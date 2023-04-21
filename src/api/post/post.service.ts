import { Injectable } from "@nestjs/common";
import { common_bbs_article} from "@prisma/client";
import { PrismaService } from "../datasource/prisma.service";

@Injectable()
export class PostService {
	constructor(
		private readonly prismaService: PrismaService
	){}

	getHello(): string {
		return "Hello World! this is user api";
	}
	
    async getAllBbs(): Promise<common_bbs_article[]> {
		const posts = this.prismaService.common_bbs_article.findMany();
		return posts;
	}
    
	async findAll(skip:number = 0, take:number = 10, bbsType: number, searchKeyword: string): Promise<common_bbs_article[]> {
        let query = {
            skip,
            take,
            where: {
                bbs_idx: {
                    equals: bbsType
                },
                title:{
                    contains: searchKeyword
                }
            }
        }

		const posts = this.prismaService.common_bbs_article.findMany(query);
		return posts;
	}

	
}