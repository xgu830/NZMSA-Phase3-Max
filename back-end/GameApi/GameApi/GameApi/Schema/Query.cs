using GameApi.Data;
using GameApi.Models;

namespace GameApi.Schema
{
    public class Query
    {
        private readonly GameDbContext _context;

        public Query(GameDbContext context)
        {
            _context = context;
            _context.Database.EnsureCreated();
        }

        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<LeaderboardItem> GetLeaderboard([Service] GameDbContext context)
        {
            return context.Leaderboard;
        }        
    }
}
