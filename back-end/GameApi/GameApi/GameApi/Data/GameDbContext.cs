using Microsoft.EntityFrameworkCore;
using GameApi.Data.ContextConfigurations;
using GameApi.Model;

namespace GameApi.Data
{
    public class GameDbContext : DbContext
    {
        public GameDbContext (DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            var ids = new Guid[] { Guid.NewGuid(), Guid.NewGuid() };

            builder.ApplyConfiguration(new LeaderboardContextConfiguration(ids));
        }

        public DbSet<Leaderboard> Leaderboard { get; set; }
    }
}
