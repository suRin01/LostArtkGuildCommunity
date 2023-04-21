import { Controller, Get, Post, Body, Request, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";
import { user } from "@prisma/client";

@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
	@Post("/login")
	async getUserAll(@Body() signInDto: Record<string, any>): Promise<user[]> {
		return await this.authService.signIn(signInDto.username, signInDto.password);
	}


    @HttpCode(HttpStatus.OK)
	@Get("/test")
    @UseGuards(AuthGuard)
	test(): string {
		return "jwt test"
	}

    
    @UseGuards(LocalAuthGuard)
	@Post("/test2")
	async test2(@Request() req): Promise<any> {
		//return req.user;
        return this.authService.login(req.user);
	}

}
