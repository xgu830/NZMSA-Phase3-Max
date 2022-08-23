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
                });
        }
    }
}
