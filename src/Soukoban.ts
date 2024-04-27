import p from "phaser";

export class Soukoban extends p.Scene {
  constructor() {
    super("soukoban");
  }

  preload() {
    this.load.image("tiles", "assets/tilesheet_colored.png");
  }

  create() {
    const level = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 3, 3, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const map = this.make.tilemap({
      data: level,
      tileWidth: 16,
      tileHeight: 16,
    });
    const tileset = map.addTilesetImage("sokoban", "tiles", 16, 16, 0, 1);
    const layer = map.createLayer(0, tileset || "", 0, 0);
  }
}
