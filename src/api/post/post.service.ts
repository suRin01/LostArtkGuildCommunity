import { Injectable } from "@nestjs/common";
import { Prisma, common_bbs, common_bbs_article} from "@prisma/client";
import { PrismaService } from "../../datasource/prisma.service";
import { searchParams } from "src/model/models";

@Injectable()
export class PostService {
	constructor(
		private readonly prismaService: PrismaService
	){}

    async getBbsList(): Promise<common_bbs[]>{
        const bbsList = await this.prismaService.common_bbs.findMany();
        return bbsList;
    }

    async getAllBbsArticles(skip:number = 0, take:number = 10, searchParams: searchParams[]): Promise<common_bbs_article[]> {
		let query = {
            skip,
            take,
            where: {
                bbs_idx: {
                    equals: undefined
                },
                article_idx: {
                    equals: undefined
                },
                title:{
                    contains: undefined
                },
                article_code:{
                    equals: undefined
                },
                input_id:{
                    equals: undefined
                },
            },
            include:{
                common_bbs_reply:{
                    orderBy:{
                        reply_idx: Prisma.SortOrder.asc 
                    }
                }
            }
        }

        searchParams.map((searchParam)=>{
            const acceptableParam = Object.keys(query.where).findIndex((node)=>{
                if(node === searchParam.searchType) 
                    return node;
            })

            if(acceptableParam === -1){
                return;
            }
            if(searchParam.searchValue !== undefined && searchParam.searchValue !== null){
                query.where[searchParam.searchType][Object.keys(query.where[searchParam.searchType])[0]] = searchParam.searchValue;
            }
            return;
        })
        
        const posts = this.prismaService.common_bbs_article.findMany(query);
		return posts;
    }



	
}