import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectState, startGame } from "../store/slices/gameSlice";
import GameGrid from "./GameGrid";

export interface LogicGameGridProps {
    width: number,
    height: number
}

const LogicGameGrid = ({width, height}: LogicGameGridProps): JSX.Element => {
    const gameState = useAppSelector(selectState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startGame())
    },[dispatch]);

    return <Fragment>
        <GameGrid width={width} height={height} gameState={gameState} />
    </Fragment>
}

export default LogicGameGrid;