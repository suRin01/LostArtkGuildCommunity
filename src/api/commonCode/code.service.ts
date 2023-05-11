import { Injectable } from "@nestjs/common";
import { common_code, common_code_group} from "@prisma/client";
import { PrismaService } from "../../datasource/prisma.service";

@Injectable()
export class CodeService {
	constructor(
		private readonly prismaService: PrismaService
	){}

    async getAllCodeGroups(skip:number = 0, take:number = 10,  codeGroupIdx: number): Promise<common_code_group[]> {
        let query = {
            skip,
            take,
            where: {
                code_group_idx:{
                    equals: codeGroupIdx
                }
            }
        }

		const codeGroups = await this.prismaService.common_code_group.findMany(query);
		return codeGroups;
	}
    
	async getAllCodeGroupDetails(skip:number = 0, take:number = 10, codeGroupIdx: number): Promise<common_code[]> {
        let query = {
            skip,
            take,
            where: {
                code_group_idx: {
                    equals: codeGroupIdx
                }
            }
        }

		const codeGroupDetails = await this.prismaService.common_code.findMany(query);
		return codeGroupDetails;
	}

	
}