import Tile from './Tile';
import { TileInfo } from '../store/slices/gameSlice';
import { Grid } from '@mui/material';

export interface GameGridRowProp {
    width: number,
    height: number,
    tiles: TileInfo[]
}

const GameGridRow = ({width, height, tiles}: GameGridRowProp) => {
    let tileWidth = 12 / width;

    function drawTiles():JSX.Element[] {
        const tileArray = [];

        for (let i = 0; i < width; i++) {
            tileArray.push(<Grid item 
                key={`GridTile${height} ${i}`} md={tileWidth} 
                justifyContent={"space-evenly"} alignItems={"stretch"}>
                <Tile currentValue={tiles[i].value}></Tile>
            </Grid>)
            
        }

        return tileArray; 
    }

    return <Grid container item 
        spacing={2} justifyContent={"space-evenly"} alignContent={"space-evenly"} md={12}>
            {drawTiles().map(tile => tile)}
        </Grid>
}

export default GameGridRow;