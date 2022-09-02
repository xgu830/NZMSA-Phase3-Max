using Microsoft.EntityFrameworkCore;
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
            builder.Entity<Leaderboard>()
                .HasData(
                    new Leaderboard
                    {
                        Id = 1,
                        Name = "Ooowl",
                        Score = 2048
                    },
                    new Leaderboard
                    {
                        Id = 2,
                        Name = "CoolGuy",
                        Score = 1024
                    },
                    new Leaderboard
                    {
                        Id = 3,
                        Name = "Toad",
                        Score = 4096
                    },
                    new Leaderboard
                    {
                        Id = 4,
                        Name = "PrincessPeach",
                        Score = 3016
                    },
                    new Leaderboard
                    {
                        Id = 5,
                        Name = "Mario",
                        Score = 1048
                    });
        }

        public DbSet<Leaderboard> Leaderboards { get; set; }
    }
}
