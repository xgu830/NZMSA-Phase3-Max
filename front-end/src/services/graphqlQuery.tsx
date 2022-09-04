import { useQuery, gql } from "@apollo/client";
import "./graphqlQuery.css";

interface Ranking {
    id: string,
    name: string,
    score: number
}

interface LeaderBoard {
    leaderboard: Ranking[]
}

const GET_LEADERBOARD = gql`
    query getLeaderBoard {
        leaderboard (order: {score: DESC}) {
            id
            name
            score
        }
    }
`;



export const DisplayLeaderBoard = () => {
    const { loading, data } = useQuery<LeaderBoard>(GET_LEADERBOARD);

    if (loading) return <p>Loading...</p>;

    return <div className="leaderboard"> 
        <h5>Leaderboard</h5>
        <ol>
            {data && data.leaderboard.map(list => (
                <li key={list.id} className="leaderboardItem">{list.name}: {list.score}</li>
            ))}
        </ol>
    </div> 
}