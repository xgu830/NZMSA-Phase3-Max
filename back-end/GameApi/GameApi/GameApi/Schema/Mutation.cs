using GameApi.Models;
using GameApi.Data;

namespace GameApi.Schema
{
    public class Mutation
    {
        private readonly GameDbContext _context;

        public Mutation(GameDbContext context)
        {
            _context = context;
        }

        public async Task<AddNewItemPayload> AddLeaderboardItemAsync(NewLeaderboardItem newItem,
            [Service] GameDbContext context)
        {
            var item = new LeaderboardItem()
            {
                Id = Guid.NewGuid(),
                Name = newItem.name,
                Score = newItem.score
            };

            context.Leaderboard.Add(item);
            await context.SaveChangesAsync();

            return new AddNewItemPayload(newItem);
        }
        
    }
}