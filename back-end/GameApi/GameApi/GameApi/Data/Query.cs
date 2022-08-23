using GameApi.Model;

namespace GameApi.Data
{
    public class Query
    {
        public IQueryable<Leaderboard> GetLeaderboards =>
            new List<Leaderboard>().AsQueryable();
    }
}
