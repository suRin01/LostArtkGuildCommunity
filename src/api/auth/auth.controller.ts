import { Controller, Get, Post, Body, Request, HttpCode, HttpStatus, UseGuards, Response, Redirect } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AccessJwtAuthGuard } from "./auth.guard";
import { jwtToken } from "src/model/models";
import { RefreshJwtAuthGuard } from "./auth.refreshGuard";

@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	/**
	 * 최초 refresh jwt와 access jwt 발급
	 * @param signInDto 
	 * @param res 
	 */
    @HttpCode(HttpStatus.OK)
	@Post("/login")
	async getUserAll(@Body() signInDto: Record<string, any>, @Response() res): Promise<void> {
		const token:jwtToken= await this.authService.signIn(signInDto.username, signInDto.password)
		
		res.setHeader('Authorization', 'Bearer '+token.access_token);
		res.cookie('access_token',token.access_token,{
			httpOnly: true,
			sameSite: "lax",
			secure: true,
			maxAge: 1 * 60 * 60 * 1000 //1 hour
		});

		// res.cookie('refresh_token',token.refresh_token,{
		// 	httpOnly: true,
		// 	sameSite: "lax",
		// 	secure: true,
		// 	maxAge: 24 * 60 * 60 * 1000 //1 day
		// });

		res.status(HttpStatus.OK).json({refresh_token: token.refresh_token});
	}

	/**
	 * get refresh jwt token and return new access token
	 * @param req 
	 * @param res 
	 */
	@Get("/refresh")
	@UseGuards(RefreshJwtAuthGuard)
	async refreshAccessToken(@Request() req, @Response() res){
		const token:string= await this.authService.refreshAccessToken(req.user.username);
		res.cookie('access_token',token,{
			httpOnly: true,
			sameSite: "lax",
			secure: true,
			maxAge: 1 * 60 * 60 * 1000 //1 hour
		});


		res.status(HttpStatus.OK).send();
	}

	/**
	 * remove tokens
	 * @param res 
	 * @returns 
	 */

	@Post("/logout")
	@Redirect("/")
	logout(@Response() res): void{
		res.cookie('access_token', '', {
			maxAge: 0
		})
		return;
	}
}
