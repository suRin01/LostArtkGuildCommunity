import { Controller, Get, Param, Query, HttpException, HttpStatus } from "@nestjs/common";
import { common_code, common_code_group, user } from "@prisma/client";
import { CodeService } from "./code.service";

@Controller("/code")
export class CodeController {
	constructor(private readonly codeService: CodeService) {}


	@Get("/group")
	async getAllCodeGroups(@Query() query): Promise<common_code_group[]> {
        if(typeof query.code_group_idx === typeof undefined){
            throw new HttpException("code group idx value is needed.", HttpStatus.BAD_REQUEST); 
        }

        const offset:number = typeof query.offset === typeof undefined ? 0 : +query.offset
        const count:number = typeof query.count === typeof undefined ? 10 : +query.count
		return await this.codeService.getAllCodeGroups(offset, count, +query.code_group_idx);
	}


	@Get("/detail")
	async getAllCodeGroupDetails(@Query() query): Promise<common_code[]> {
        if(typeof query.code_group_idx === typeof undefined){
            throw new HttpException("code group idx value is needed.", HttpStatus.BAD_REQUEST); 
        }

        const offset:number = typeof query.offset === typeof undefined ? 0 : +query.offset
        const count:number = typeof query.count === typeof undefined ? 10 : +query.count
		return await this.codeService.getAllCodeGroupDetails(offset, count, +query.code_group_idx);
	}
}
