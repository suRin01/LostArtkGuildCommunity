import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { PrismaService } from "src/datasource/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { RoleModule } from "../role/role.module";
@Module({
    imports:[JwtModule, RoleModule],
	controllers: [PostController],
	providers: [PostService, PrismaService],
	exports: []

})
export class PostModule {}
