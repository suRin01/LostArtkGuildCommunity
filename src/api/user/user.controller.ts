import { Controller, Get, Param, Query, Request, UseGuards } from "@nestjs/common";
import { UserService } from "src/api/user/user.service";
import { AccessJwtAuthGuard } from "../auth/auth.guard";
import { user } from "@prisma/client";
import { hasRole } from "src/decorator/role.decorator";

@Controller("/user")
export class UserContoller {
	constructor(private readonly userService: UserService) {}

	@Get("")
	@hasRole('admin', 'user')
	async getUserAll(@Query() query): Promise<user[]> {
		return await this.userService.findAll(+query.offset ?? 0, +query.count ?? 10, query.username);
	}

	@UseGuards(AccessJwtAuthGuard)
	@Get("/me")
	async getUserOne(@Request() req): Promise<user> {
		return await this.userService.findOneByUsername(req.user.username);
	}
}
