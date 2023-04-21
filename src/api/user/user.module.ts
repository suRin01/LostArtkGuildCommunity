import { Module } from "@nestjs/common";
import { UserContoller } from "./user.controller";
import { UserService } from "./user.service";
import { JwtModule } from "@nestjs/jwt";
import { PrismaService } from "../datasource/prisma.service";
@Module({
    imports:[JwtModule],
	controllers: [UserContoller],
	providers: [UserService, PrismaService],
	exports: [UserService]

})
export class UserModule {}
