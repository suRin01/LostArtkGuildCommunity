import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm/dist";
import { Repository } from "typeorm";


@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepositoy: Repository<User>
	){}
	getHello(): string {
		return "Hello World! this is user api";
	}
	
	async findAll(): Promise<User[]> {
		const users = await this.userRepositoy.find();
		return users;
	}

	
	async findOneByUsername(username: string): Promise<User> {
		const users = await this.userRepositoy.findOneBy({username});
		return users;
	}
}