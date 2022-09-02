using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GameApi.Data;
using GameApi.Model;

namespace GameApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeaderboardsController : ControllerBase
    {
        private readonly GameDbContext _context;

        public LeaderboardsController(GameDbContext context)
        {
            _context = context;
            _context.Database.EnsureCreated();
        }

        [HttpGet(Name = "GetLeaderboards")]
        public async Task<ActionResult<IEnumerable<Leaderboard>>> GetLeaderboards()
        {
            return await _context.Leaderboards.ToListAsync();
        }
    }
}
