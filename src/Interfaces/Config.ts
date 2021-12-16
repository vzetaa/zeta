declare namespace NodeJS {
	export interface ProcessEnv {
		TOKEN: string;
		PREFIX: string;
		MONGOURI: string;
		TESTSERVER: string;
		OWNERID: string;
		ORIGIN_CHANNEL: string;
		UPLOAD_CHANNEL: string;
		HOLODEX_APIKEY: string;
	}
}
