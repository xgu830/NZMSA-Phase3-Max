import { TileInfo } from "../store/slices/gameSlice";

export const copyGameState = (arr: TileInfo[][]): TileInfo[][] => {
    return arr.map(tiles => tiles.slice());
}

