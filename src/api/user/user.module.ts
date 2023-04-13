import { Module } from "@nestjs/common";
import { UserContoller } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { AuthModule } from "../auth/auth.module";
@Module({
    imports:[TypeOrmModule.forFeature([User])],
	controllers: [UserContoller],
	providers: [UserService],
	exports: [UserService]

})
export class UserModule {}
