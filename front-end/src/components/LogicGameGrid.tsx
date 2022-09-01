import { Fragment, useEffect } from "react";
import { DisplayLeaderBoard } from "../services/graphqlQuery";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectState, selectScore,selectIsOver, startGame, moveLeft, moveRight, moveUp, moveDown } from "../store/slices/gameSlice";
import GameGrid from "./GameGrid";

export interface LogicGameGridProps {
    width: number,
    height: number
}

const LogicGameGrid = ({width, height}: LogicGameGridProps): JSX.Element => {
    const gameState = useAppSelector(selectState);
    const gameScore = useAppSelector(selectScore);
    const gameIsOver = useAppSelector(selectIsOver);
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
        {gameIsOver ? <DisplayLeaderBoard />
            :
            <div>
                <h5>Score: {gameScore}</h5>
                <GameGrid width={width} height={height} gameState={gameState} />
            </div>
        }
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