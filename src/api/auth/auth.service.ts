import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service'; 
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, 
    private jwtService: JwtService
) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { username: user.username, sub: user.name };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


}