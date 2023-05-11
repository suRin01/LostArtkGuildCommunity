import { Module } from "@nestjs/common";
import { PrismaService } from "../../datasource/prisma.service";
import { RoleService } from "./role.service";
@Module({
    imports:[],
	controllers: [],
	providers: [RoleService, PrismaService],
	exports: [RoleService]

})
export class RoleModule {}
