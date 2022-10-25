import { Controller, Get } from "@nestjs/common";
import { UserService } from "src/service/user.service";

@Controller()
export class AppController {
	constructor(private readonly userService: UserService) {}

	@Get()
	getHello(): string {
		return this.userService.getHello();
	}
}
