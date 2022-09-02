using GameApi.Interfaces;
using GameApi.Data;
using GameApi.Models;
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

        public async Task<IEnumerable<LeaderboardItem>> GetAll()
        {
            return await gameDbContext.Leaderboard.ToListAsync();
        }

        public async Task<LeaderboardItem> Create(LeaderboardItem boardItem)
        {
            gameDbContext.Leaderboard.Add(boardItem);
            await gameDbContext.SaveChangesAsync();

            return boardItem;
        }
    }
}
