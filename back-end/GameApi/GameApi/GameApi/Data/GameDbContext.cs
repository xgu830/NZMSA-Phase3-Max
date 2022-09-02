using Microsoft.EntityFrameworkCore;
using GameApi.Models;

namespace GameApi.Data
{
    public class GameDbContext : DbContext
    {
        public GameDbContext (DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<LeaderboardItem>()
                .HasData(
                    new LeaderboardItem
                    {
                        Id = Guid.NewGuid(),
                        Name = "Ooowl",
                        Score = 2048
                    },
                    new LeaderboardItem
                    {
                        Id = Guid.NewGuid(),
                        Name = "CoolGuy",
                        Score = 1024
                    },
                    new LeaderboardItem
                    {
                        Id = Guid.NewGuid(),
                        Name = "Toad",
                        Score = 4096
                    },
                    new LeaderboardItem
                    {
                        Id = Guid.NewGuid(),
                        Name = "PrincessPeach",
                        Score = 3016
                    },
                    new LeaderboardItem
                    {
                        Id = Guid.NewGuid(),
                        Name = "Mario",
                        Score = 1048
                    });
        }

        public DbSet<LeaderboardItem> Leaderboard { get; set; }
    }
}
