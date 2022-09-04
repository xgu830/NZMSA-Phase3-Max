import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { DisplayLeaderBoard } from './graphqlQuery';

const ADD_ITEM = gql`
    mutation addLeaderboardItem($newItem: NewLeaderboardItemInput!) {
        addLeaderboardItem(newItem: $newItem) {
            newItem{
                name
                score
            }
        }
    }
`;

interface NewLeaderboardItem {
    name: string;
    score: number
}

export interface mutationProp {
    newScore: number
}

export const NewLeaderboard = ({newScore}: mutationProp) => {
    const [username, setUsername] = useState('');
    const [disable, setDisable] = useState(false);

    const [addLeaderboardItem, { error, data }] = useMutation<
        {addLeaderboardItem:NewLeaderboardItem}
        >(ADD_ITEM, {
        variables: {newItem: {name: username, score: newScore}}}
    );

    function saveButton() {
        if (username) {
            addLeaderboardItem();
        }
        setDisable(true);
    }

    return (
        <div>
            <label>Username: </label>
            <input type="string" name="username" onChange={e => setUsername(e.target.value)} />
            <button disabled={disable} 
                onClick={() => saveButton()}>Save your record</button>

            {error ? <p>{ error.message }</p> : null}
            {data && data.addLeaderboardItem ? <DisplayLeaderBoard /> : null}
        </div>
    )
}

