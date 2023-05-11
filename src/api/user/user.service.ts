import { Injectable } from "@nestjs/common";
import { user as userModel} from "@prisma/client";
import { PrismaService } from "../../datasource/prisma.service";

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService
	){}
	
	async findAll(skip:number = 0, take:number = 10, username: string): Promise<userModel[]> {
		const users = this.prismaService.user.findMany({
			skip,
			take,
			where:{
				user_name: {
					contains: username
				}
			}
		});
		return users;
	}

	
	async findOneByUsername(username: string): Promise<userModel> {
		const users = await this.prismaService.user.findFirst({
			where:{
				user_name: {
					equals: username
				}
			}
		});
		return users;
	}
}