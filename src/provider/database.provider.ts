import { DataSource } from "typeorm";

export const databaseProviders = [
	{
		provide: "DATA_SOURCE",
		useFactory: async () => {
			const dataSource = new DataSource({
				type: "mysql",
				host: "localhost",
				port: 3479,
				username: "root",
				password: "silverlistic97!",
				database: "test",
				entities: [__dirname + "/../**/*.entity{.ts,.js}"],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];
