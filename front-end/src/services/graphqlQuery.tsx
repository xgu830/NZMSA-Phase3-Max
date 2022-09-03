import { useQuery, gql } from "@apollo/client";

interface Ranking {
    id: number,
    name: string,
    score: number
}

interface LeaderBoard {
    leaderboards: Ranking[]
}

const GET_LEADERBOARD = gql`
    query getLeaderBoard {
        leaderboard (where: {score: {gte: 1024}}, order: {score: DESC}) {
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
            {data && data.leaderboards.map(list => (
                <li key={list.id}>{list.name}: {list.score}</li>
            ))}
        </ol>
    </div> 
    
}