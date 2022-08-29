import { createSlice } from '@reduxjs/toolkit';
import * as GameServices from '../../services/gameLogicServices';
import { RootState } from "../rootStore";

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
        startGame: (state) => {
            let startState = GameServices.copyGameState(initialState.gameState);

            let x1 = Math.floor(Math.random() * 4);
            let x2 = Math.floor(Math.random() * 4);
            let y1 = Math.floor(Math.random() * 4);
            let y2 = Math.floor(Math.random() * 4);

            if (x1 === x2 && y1 === y2) {
                if (x1 === 0 && y1 === 0) {
                    x2 = Math.floor(Math.random() * 3 + 1);
                    y2 = Math.floor(Math.random() * 3 + 1);
                } else {
                    x2 = Math.floor(Math.random() * x1);
                    y2 = Math.floor(Math.random() * y1);
                }
            }

            startState[x1][y1] = {value: 1};
            startState[x2][y2] = {value: 1};

            state.score = 0;
            state.gameState = startState;
        },
        moveLeft: (state) => {
            let newState = GameServices.movingLeft(state.gameState);

            state.score = GameServices.calculateScore(newState);
            state.isOver = GameServices.isGameOver(newState);
            state.gameState = newState;
        },
        moveRight: (state) => {
            let newState = GameServices.movingRight(state.gameState);

            state.score = GameServices.calculateScore(newState);
            state.isOver = GameServices.isGameOver(newState);
            state.gameState = newState;
        },
        moveUp: (state) => {
            let newState = GameServices.movingUp(state.gameState);

            state.score = GameServices.calculateScore(newState);
            state.isOver = GameServices.isGameOver(newState);
            state.gameState = newState;
        },
        moveDown: (state) => {
            let newState = GameServices.movingDown(state.gameState);

            state.score = GameServices.calculateScore(newState);
            state.isOver = GameServices.isGameOver(newState);
            state.gameState = newState;
        }
    }
})

export const {startGame, moveLeft, moveRight, moveUp, moveDown} = gameSlice.actions; 

export const selectState = (state: RootState) => state.game.gameState;
export const selectScore = (state: RootState) => state.game.score;
export const selectIsOver = (state: RootState) => state.game.isOver;

export default gameSlice.reducer;