using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace GameApi.Model
{
    public class Leaderboard
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }
        public int Score { get; set; }
    }
}
