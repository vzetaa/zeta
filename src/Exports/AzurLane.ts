import fetch, { Response } from 'node-fetch';

// Search & List Ships
const searchShip = async (name: string) => {
	const req: Response = await fetch(
		`https://formidable.kashima.moe/ships/search?name=${encodeURI(name)}`
	);
	const body = await req.json();

	return body[0];
};

const searchShipById = async (id: string) => {
	const req: Response = await fetch(
		`https://formidable.kashima.moe/ships/id?code=${encodeURI(id)}`
	);
	const body = await req.json();

	return body;
};

const listRandomShip = async () => {
	const req: Response = await fetch(
		`https://formidable.kashima.moe/ships/random`
	);
	const body = await req.json();

	return body;
};

// Search Equipments
const searchEquipments = async (name: string) => {
	const req: Response = await fetch(
		`https://formidable.kashima.moe/equipments/search?name=${encodeURI(name)}`
	);
	const body = await req.json();

	return body[0];
};

// Search Voice Lines
const searchVoiceLines = async (id: string) => {
	const req: Response = await fetch(
		`https://formidable.kashima.moe/voicelines/ship?id=${encodeURI(id)}`
	);
	const body = await req.json();

	return body;
};

export default {
	searchShip,
	searchShipById,
	listRandomShip,
	searchEquipments,
	searchVoiceLines,
};
