import fetch, { Response } from 'node-fetch';

// Nekos.life
/**
 *
 * @param type
 * @description Returns a data from nekos.life
 */
const nekoslife = async (type: string) => {
	if (!type) return 'Please specify the type / endpoint!';
	const req: Response = await fetch(`https://nekos.life/api/v2/img/${type}`);
	const res = await req.json();
	return res;
};

// Waifu.pics
/**
 *
 * @param type
 * @description Returns a data from waifu.pics
 */
const waifupics = async (type: string) => {
	const req: Response = await fetch(`https://api.waifu.pics/nsfw/${type}`);
	const res = await req.json();
	return res;
};

// Nekobot.xyz
/**
 *
 * @param type
 * @description Returns a data from nekobot.xyz
 */
const nekobot = async (type: string) => {
	const req: Response = await fetch(
		`https://nekobot.xyz/api/image?type=${type}`
	);
	const res = await req.json();
	return res;
};

export default { nekoslife, waifupics, nekobot };
