import { createSlice } from '@reduxjs/toolkit';

export interface TileInfo{
    value: number
}

export interface GameState{
    gameState: TileInfo[][],
    height: number,
    width: number,
    score: number,
    isOver: boolean
}

const initialState: GameState = {
    gameState: [
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
        [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]
    ],
    height: 4,
    width: 4,
    score: 0,
    isOver: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGame: (state) => {
            state.gameState = initialState.gameState;
        }
    }
})

export const {newGame} = gameSlice.actions; 

export default gameSlice.reducer;