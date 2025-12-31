enum TileColor {
	ColorRed = "RED",
	ColorBlue = "BLUE",
	ColorBlack = "BLACK",
	ColorPurple = "PURPLE",
	ColorJoker = "JOKER",
}

export class Tile {
	readonly id: string;
	readonly value: number;
	readonly color: TileColor;

	constructor(id: string, value: number,  color: TileColor) {
		this.id = id;
		this.value = value;
		this.color = color
	}

	public isJoker(): boolean {
		return this.color === TileColor.ColorJoker;
	}
}
