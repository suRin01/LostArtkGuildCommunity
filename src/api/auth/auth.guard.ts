import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from "@nestjs/config";
import { Reflector } from '@nestjs/core';
import { RoleService } from '../role/role.service';
import { role_relation } from '@prisma/client';

@Injectable()
export class AccessJwtAuthGuard implements CanActivate {
    constructor(
        private configService: ConfigService,
        private jwtService: JwtService,
        private readonly reflector: Reflector,
        private roleService: RoleService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles: string[] = this.reflector.get('roles', context.getHandler());
        console.log("authguard roles: ");
        console.log(roles);

        const request = context.switchToHttp().getRequest();
        const token: string = this.extractTokenFromHeader(request);
        const secret: string = this.configService.get("JWT_TOKEN");

        if (!token) {
            console.log("token not found");
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret
                }
            );
            const roles: role_relation[] = await this.roleService.findAll(+payload.idx);

            console.log(roles);


            request['user'] = payload;
        } catch {
            console.log("authentication failed");
            throw new UnauthorizedException();
        }



        //authentication, authorization success
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        // const cookies = request.headers.cookie.split(';')
        //     .map(v => v.split('='))
        //     .reduce((acc, v) => {
        //         if(v[0] === '' || v[1] === undefined){
        //             return acc
        //         }
        //         acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        //         return acc;
        //     }, {});
        // console.log(cookies);
        return type === 'Bearer' ? token : undefined;
    }
}