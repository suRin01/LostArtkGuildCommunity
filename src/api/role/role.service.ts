import { Injectable } from "@nestjs/common";
import { role, role_relation, user as userModel} from "@prisma/client";
import { PrismaService } from "../../datasource/prisma.service";

@Injectable()
export class RoleService {
	constructor(
		private readonly prismaService: PrismaService
	){}
	
	async findAll(userIdx: number): Promise<role_relation[]> {
		const users = this.prismaService.role_relation.findMany({
            where:{
                user_idx: {
                    equals : userIdx
                }
            },
			include:{
                role: true
            }
		});
		return users;
	}
    async findRoleAll(userIdx: number): Promise<role[]> {
		const roles = this.prismaService.role.findMany({
			include:{
                
            }
		});
		return roles;
	}

    
}