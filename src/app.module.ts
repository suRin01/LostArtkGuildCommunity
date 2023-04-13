import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./api/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./api/auth/auth.module";

@Module({
	imports: [UserModule, AuthModule, ConfigModule.forRoot({
		isGlobal: true,
	  }), TypeOrmModule.forRoot({
		type: "mysql",
		host: process.env.DB_URL,
		port: Number.parseInt(process.env.DB_PORT as string),
		username: process.env.DB_ID,
		password: process.env.DB_PW,
		database: process.env.DB_SID,
		entities: [join(__dirname, '**', '*.entity.{ts,js}')],
		synchronize: false,
	  }),],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
