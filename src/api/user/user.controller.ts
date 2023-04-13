import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UserService } from "src/api/user/user.service";
import { User } from "./user.entity";
import { AuthGuard } from "../auth/auth.guard";

@Controller("/user")
export class UserContoller {
	constructor(private readonly userService: UserService) {}

	@Get("/hello")
	getHello(): string {
		return this.userService.getHello();
	}

	@Get("/")
	async getUserAll(): Promise<User[]> {
		return await this.userService.findAll();
	}


	@Get(":username")
	async getUserOne(@Param() params): Promise<User> {
		return await this.userService.findOneByUsername(params.username);
	}
}
