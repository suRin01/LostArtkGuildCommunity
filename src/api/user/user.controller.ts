import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";
import { UserService } from "src/api/user/user.service";
import { AuthGuard } from "../auth/auth.guard";
import { user } from "@prisma/client";

@Controller("/user")
export class UserContoller {
	constructor(private readonly userService: UserService) {}

	@Get("/hello")
	getHello(): string {
		return this.userService.getHello();
	}

	@Get("/")
	async getUserAll(@Param() params): Promise<user[]> {
		const serchQuery = {
			
		};

		return await this.userService.findAll();
	}


	@UseGuards(AuthGuard)
	@Get(":username")
	async getUserOne(@Request() req, @Param() params): Promise<user> {
		console.log(req.user);
		return await this.userService.findOneByUsername(params.username);
	}
}
