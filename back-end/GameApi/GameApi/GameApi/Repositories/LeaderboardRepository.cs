using GameApi.Interfaces;
using GameApi.Data;
using GameApi.Model;
using Microsoft.EntityFrameworkCore;

namespace GameApi.Repositories
{
    public class LeaderboardRepository : ILeaderboardRepository
    {
        private readonly GameDbContext gameDbContext;

        public LeaderboardRepository(GameDbContext gameDbContext)
        {
            this.gameDbContext = gameDbContext;
            gameDbContext.Database.EnsureCreated();
        }

        public List<Leaderboard> GetLeaderboardAsync()
        {
            return gameDbContext.Leaderboards.ToList();
        }
    }
}
