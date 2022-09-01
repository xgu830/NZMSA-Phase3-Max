import { TileInfo } from "../store/slices/gameSlice";

export const copyGameState = (arr: TileInfo[][]): TileInfo[][] => {
    return arr.map(tiles => tiles.slice());
}

export const movingLeft = (arr: TileInfo[][]): TileInfo[][] => {
    let newState = moveTilesToLeft(arr);

    if (hasTileMoved(arr, newState)) {
        return generateNewTile(newState);
    }

    return arr;
}

export const movingRight = (arr: TileInfo[][]): TileInfo[][] => {
    let newState = moveTilesToRight(arr);

    if (hasTileMoved(arr, newState)) {
        return generateNewTile(newState);
    }

    return arr;
}

export const movingUp = (arr: TileInfo[][]): TileInfo[][] => {
    let newState = moveTilesToTop(arr);

    if (hasTileMoved(arr, newState)) {
        return generateNewTile(newState);
    }

    return arr;
}

export const movingDown = (arr: TileInfo[][]): TileInfo[][] => {
    let newState = moveTilesToBottom(arr);

    if (hasTileMoved(arr, newState)) {
        return generateNewTile(newState);
    }

    return arr;
}

export const calculateScore = (arr: TileInfo[][]): number => {
    let score = 0;
    
    arr.forEach(row => row.forEach(tile => {
        if (tile.value > 0) {
            score += Math.pow(2, tile.value);
        }
    }));

    return score;
}

export const isGameOver = (arr: TileInfo[][]): boolean => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j].value === 0 || arr[i][j+1].value === 0 ) {
                return false
            };
            if (arr[i][j].value === arr[i][j+1].value) {
                return false
            };
        }
    }

    const rotateState = rotateStateToLeft(arr);
    for (let i = 0; i < rotateState.length; i++) {
        for (let j = 0; j < rotateState[i].length - 1; j++) {
            if (rotateState[i][j].value === rotateState[i][j+1].value) {
                return false
            };
        }
    }

    return true;
}

function hasTileMoved(originalState: TileInfo[][], newState: TileInfo[][]): boolean {
    for (let i = 0; i < originalState.length; i++) {
        for (let j = 0; j < originalState[i].length; j++) {
            if (originalState[i][j].value !== newState[i][j].value) {
                return true;
            }
        }
    }
    return false;
}

function generateNewTile(arr: TileInfo[][]): TileInfo[][] {
    let newState = copyGameState(arr);
    let emptyTileIndex: {x:number,y:number}[] = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (arr[i][j].value === 0) {
                emptyTileIndex.push({x: i, y: j});
            }
        }
    }

    let newTilePosition = emptyTileIndex[Math.floor(Math.random() * emptyTileIndex.length)]
    newState[newTilePosition.x][newTilePosition.y] = {value: Math.ceil(Math.random() * 2)}

    return newState;
}

function moveTilesToLeft(arr: TileInfo[][]): TileInfo[][] {
    return arr.map(row => {
        let newRow = mergeTileToLeft(row.filter(tile => tile.value>0));

        while (newRow.length < 4) {
            newRow.push({value:0});
        }

        return newRow;
    })
}

function moveTilesToRight(arr: TileInfo[][]): TileInfo[][] {
    return arr.map(row => {
        let newRow = mergeTileToRight(row.filter(tile => tile.value>0));

        while (newRow.length < 4) {
            newRow.unshift({value:0});
        }

        return newRow;
    })
}

function moveTilesToTop(arr: TileInfo[][]): TileInfo[][] {
    return rotateStateToRight(moveTilesToLeft(rotateStateToLeft(arr)));
}

function moveTilesToBottom(arr: TileInfo[][]): TileInfo[][] {
    return rotateStateToRight(moveTilesToRight(rotateStateToLeft(arr)));
}

function mergeTileToLeft(row: TileInfo[]): TileInfo[] {
    let newRow = [];

    for (let i = 0; i < row.length; i++) {
        if (i+1 === row.length) {
            newRow.push({value: row[i].value});
            break;
        }

        if (row[i].value === row[i+1].value) {
            newRow.push({value: row[i].value + 1});
            i++;
            continue;
        }
        
        newRow.push({value: row[i].value});
    }

    return newRow;
}

function mergeTileToRight(row: TileInfo[]): TileInfo[] {
    let newRow = [];

    for (let i = row.length - 1; i >= 0; i--) {
        if (i === 0) {
            newRow.unshift({value: row[i].value});
            break;
        }

        if (row[i].value === row[i-1].value) {
            newRow.unshift({value: row[i].value + 1});
            i--;
            continue;
        }
        
        newRow.unshift({value: row[i].value});
    }

    return newRow;
}

function rotateStateToLeft(arr: TileInfo[][]): TileInfo[][] {
    let newState: TileInfo[][] = [];

    for (let i = 0; i < arr.length; i++) {
        newState.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            newState[arr.length-j-1].push(arr[i][j]); 
        }
    }

    return newState;
}

function rotateStateToRight(arr: TileInfo[][]): TileInfo[][] {
    let newState: TileInfo[][] = [];

    for (let i = 0; i < arr.length; i++) {
        newState.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            newState[j].unshift(arr[i][j]);
        }
    }

    return newState;
}

