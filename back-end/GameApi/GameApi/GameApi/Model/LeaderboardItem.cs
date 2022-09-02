using System.ComponentModel.DataAnnotations;

namespace GameApi.Models
{
    public class LeaderboardItem
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public int Score { get; set; }
    }
}
