using GameApi.Model;

namespace GameApi.Data
{
    public class Query
    {
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Leaderboard> GetLeaderboards([Service] GameDbContext context) =>
            context.Leaderboards;
    }
}
