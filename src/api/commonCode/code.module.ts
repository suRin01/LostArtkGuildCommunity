import { Module } from "@nestjs/common";
import { CodeService } from "./code.service";
import { CodeController } from "./code.controller";
import { PrismaService } from "src/datasource/prisma.service";
@Module({
    imports:[],
	controllers: [CodeController],
	providers: [CodeService, PrismaService],
	exports: []

})
export class CodeModule {}
