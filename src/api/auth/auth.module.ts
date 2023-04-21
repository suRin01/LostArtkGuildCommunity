import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { LocalStrategy } from "./local.trategy";
@Module({
    imports:[UserModule, ConfigModule.forRoot(), JwtModule.register({
        secret: process.env.JWT_TOKEN,
        signOptions: { expiresIn: '3600s' },
      }),],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy],
    exports: []
})
export class AuthModule {}
