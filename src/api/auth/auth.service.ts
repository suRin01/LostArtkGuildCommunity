import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { user } from "@prisma/client";
import { jwtToken } from 'src/model/models';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<jwtToken> {
        const user = await this.userService.findOneByUsername(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = {
            idx: user.user_idx,
            username: user.user_name,
            sub: user.name
        };
        const access_token = await this.jwtService.signAsync(payload);
        const refresh_token = await this.jwtService.signAsync({...payload, type:"rtoken"}, {
            expiresIn: "1d"
        })

        return {
            payload,
            access_token,
            refresh_token
        };
    }

    async refreshAccessToken(username: string): Promise<string>{
        const user = await this.userService.findOneByUsername(username);
        const payload = {
            idx: user.user_idx,
            username: user.user_name,
            sub: user.name
        };
        const access_token = await this.jwtService.signAsync(payload);

        return access_token;
    }

}