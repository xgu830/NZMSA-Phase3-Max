import { Grid } from "@mui/material";
import { TileInfo } from "../store/slices/gameSlice";
import GameGridRow from "./GameGridRow";

export interface GameGridProp {
    width: number,
    height: number,
    gameState: TileInfo[][]
}

const GameGrid = ({width, height, gameState}: GameGridProp) => {
    
    function drawGrid(): JSX.Element[] {
        const gridArray = [];

        for (let i = 0; i < height; i++) {
            gridArray.push(<GameGridRow key={`GameGridRow${i}`}
                width={width} height={height} tiles={gameState[i]} />)
        }

        return gridArray
    }

    return <Grid container spacing={2} justifyContent={"space-evenly"} alignContent={"space-evenly"}
        sx={{backgroundColor: "#eaeaff", pr: 2, pb: 2, borderRadius: 4}}>
            {drawGrid().map(row => row)}
    </Grid>
}

export default GameGrid;