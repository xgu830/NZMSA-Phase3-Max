using GameApi.Model;

namespace GameApi.Interfaces
{
    public interface ILeaderboardRepository
    {
        List<Leaderboard> GetLeaderboardAsync();
    }
}
