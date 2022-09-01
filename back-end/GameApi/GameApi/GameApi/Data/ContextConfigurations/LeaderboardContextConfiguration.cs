using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using GameApi.Model;

namespace GameApi.Data.ContextConfigurations
{
    public class LeaderboardContextConfiguration : IEntityTypeConfiguration<Leaderboard>
    {
        private Guid[] _ids;
        public LeaderboardContextConfiguration(Guid[] ids)
                {
                    _ids = ids;
                }
        public void Configure(EntityTypeBuilder<Leaderboard> builder)
        {
            builder.
                HasData(
                new Leaderboard
                {
                    Id = _ids[0],
                    Name = "Ooowl",
                    Score = 2048
                },
                new Leaderboard
                {
                    Id = _ids[1],
                    Name = "CoolGuy",
                    Score = 1024
                },
                new Leaderboard
                {
                    Id = _ids[2],
                    Name = "Toad",
                    Score = 4096
                },
                new Leaderboard
                {
                    Id = _ids[3],
                    Name = "PrincessPeach",
                    Score = 3016
                },
                new Leaderboard
                {
                    Id = _ids[4],
                    Name = "Mario",
                    Score = 1048
                });
        }
    }
}
