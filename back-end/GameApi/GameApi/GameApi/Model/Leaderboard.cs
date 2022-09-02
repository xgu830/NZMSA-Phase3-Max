using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace GameApi.Model
{
    public class Leaderboard
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public int Score { get; set; }
    }
}
