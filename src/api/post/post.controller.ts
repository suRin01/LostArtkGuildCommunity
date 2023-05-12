import { Controller, Get, Query, Param, HttpException, HttpStatus, UseGuards, Request } from "@nestjs/common";
import { common_bbs_article} from "@prisma/client";
import { PostService } from "./post.service";
import { AccessJwtAuthGuard } from "../auth/auth.guard";

@Controller("/bbs")
export class PostController {
	constructor(private readonly postService: PostService) {}

	@UseGuards(AccessJwtAuthGuard)
    @Get("/me")
    async getMyArticles(@Request() req, @Query() query): Promise<common_bbs_article[]> {
        const offset:number = typeof query.offset === typeof undefined ? 0 : +query.offset
        const count:number = typeof query.count === typeof undefined ? 10 : +query.count
        return await this.postService.getAllBbsArticles(
            offset, 
            count, 
            [
                {searchType: "input_id", searchValue: req.user.username},
            ]
        );

    }

	@Get("/:bbsId")
	async getBbsAllArticles(@Param() params, @Query() query): Promise<common_bbs_article[]> {
        if(typeof params.bbsId === typeof undefined){
            throw new HttpException("bbs id needed", HttpStatus.BAD_REQUEST); 
        }

        const offset:number = typeof query.offset === typeof undefined ? 0 : +query.offset
        const count:number = typeof query.count === typeof undefined ? 10 : +query.count
		return await this.postService.getListBbsArticles(
            offset, 
            count, 
            [
                {searchType: "bbs_idx", searchValue: +params.bbsId},
                {searchType: "article_code", searchValue: query.article_code},
            ]
        );
	}

    @Get("/:bbsId/:articleId")
	async getSingleArticle(@Param() params): Promise<common_bbs_article[]> {
        if(typeof params.bbsId === typeof undefined){
            throw new HttpException("bbs id needed", HttpStatus.BAD_REQUEST); 
        }
        if(typeof params.articleId === typeof undefined){
            throw new HttpException("article id needed", HttpStatus.BAD_REQUEST); 
        }
		return await this.postService.getAllBbsArticles(
            0, 
            1, 
            [
                {searchType: "bbs_idx", searchValue: +params.bbsId},
                {searchType: "article_idx", searchValue: +params.articleId}
            ]
        );
	}

    



}
