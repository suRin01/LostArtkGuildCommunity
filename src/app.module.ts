import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./api/user/user.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./api/auth/auth.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CodeModule } from "./api/commonCode/code.module";
import { PostModule } from "./api/post/post.module";

@Module({
	imports: [UserModule, AuthModule, CodeModule, PostModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client'),
		})
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
	constructor() {}
}
