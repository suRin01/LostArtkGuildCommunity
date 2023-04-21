import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  import { ConfigService } from "@nestjs/config";
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private configService: ConfigService, private jwtService: JwtService,  ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token:string = this.extractTokenFromHeader(request);
      const secret:string = this.configService.get("JWT_TOKEN");
      console.log(token);
      console.log(secret);
      if (!token) {
        console.log("tokken not found");
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret
          }
        );
        
        request['user'] = payload;
      } catch {
        console.log("authentication failed");
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }