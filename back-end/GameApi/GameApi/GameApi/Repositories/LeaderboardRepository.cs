using GameApi.Interfaces;
using GameApi.Data;

namespace GameApi.Repositories
{
    public class LeaderboardRepository : ILeaderboardRepository
    {
        private readonly GameDbContext gameDbContext;

        public LeaderboardRepository(GameDbContext gameDbContext)
        {
            this.gameDbContext = gameDbContext;
        }
    }
}
