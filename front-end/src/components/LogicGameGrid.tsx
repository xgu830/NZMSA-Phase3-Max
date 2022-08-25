import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectState, startGame, moveLeft, moveRight, moveUp, moveDown } from "../store/slices/gameSlice";
import GameGrid from "./GameGrid";

export interface LogicGameGridProps {
    width: number,
    height: number
}

const LogicGameGrid = ({width, height}: LogicGameGridProps): JSX.Element => {
    const gameState = useAppSelector(selectState);
    const dispatch = useAppDispatch();

    useKeyPress("ArrowLeft", () => {
        dispatch(moveLeft());
    });
    
    useKeyPress("ArrowRight", () => {
        dispatch(moveRight());
    });

    useKeyPress("ArrowUp", () => {
        dispatch(moveUp());
    });

    useKeyPress("ArrowDown", () => {
        dispatch(moveDown());
    });

    useEffect(() => {
        dispatch(startGame())
    },[dispatch]);

    return <Fragment>
        <GameGrid width={width} height={height} gameState={gameState} />
    </Fragment>
}

const useKeyPress = (targetKey: string, callback: () => void) => {
    const handlePress = (event: KeyboardEvent) => {
        if (event.key === targetKey) {
            callback();
        }
    };

    useEffect(() => {
        window.removeEventListener('keyup', handlePress);
        window.addEventListener('keyup', handlePress);
    }, []);
}

export default LogicGameGrid;