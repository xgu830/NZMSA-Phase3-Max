import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_ITEM = gql `
    mutation updateBoard{
        addLeaderboardItem(newItem: {
            name: "abc"
            score: 123
            })
            {
            newItem {
                name
                score
            }
        }
    }
`

interface NewLeaderboardItem {
    name: string;
    score: number
}

export interface mutationProp {
    gameScore: number
}

export const NewLeaderboard = ({gameScore}: mutationProp) => {
    const [name, setName] = useState('');
    const score = gameScore;

    const [updateBoard, { error, data}] = useMutation<{newItem: NewLeaderboardItem}>(
        ADD_ITEM, {variables: {newItem: {name: name, score}}}
    );

    return (
        <div className="updateBoard">
            {error ? <p>{error.message}</p> : null}
            {data && data.newItem ? <p>Record saved!</p> : null}

            <input type="string" name="name" onChange={e => setName(e.target.value)} />
            <button onClick={() => data && updateBoard()}>Save your record</button>
        </div>
    )
}

