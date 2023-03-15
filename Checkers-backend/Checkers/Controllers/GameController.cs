using Checkers.Models;
using Checkers.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace Checkers.Controllers
{
    [Route("Game")]
    [EnableCors]
    [Authorize]
    public class GameController : ControllerBase
    {
        private IGameRoomRepository _roomRepo;
        private IAccountRepository _accountRepo;
        public GameController(IGameRoomRepository gameRoomRepository, IAccountRepository accountRepository) 
        {
            _roomRepo= gameRoomRepository;
            _accountRepo= accountRepository;
        }

        [Route("Host")]
        public async Task<IActionResult> Host()
        {
            ApplicationUser user = null;
            var userEmail = HttpContext.User.Claims.Single(x => x.Type == ClaimTypes.Email);
            if (userEmail != null)
            {
                user = await _accountRepo.GetByMail(userEmail.Value);
            }
            if (user != null)
            {

                var room = _roomRepo.CreateRoom();
                var player = new Player(user);
                room.AddPlayer(player);
                return Ok(room.RoomCode);
            }
            HttpContext.Response.StatusCode = 503;
            HttpContext.Request.Headers.RetryAfter = "a few minutes";
            return StatusCode(503, "Creating a room is currently unavailable");
        }

        [Route("Join")]
        public IActionResult Join(string roomCode)
        {
            Player user = (Player)HttpContext.User.Identity;
            GameRoom room = _roomRepo.GetRoom(roomCode);
            if (user != null && room != null)
            {
                room.AddPlayer(user);
                return Ok("connection succesfull");
            }


            HttpContext.Response.StatusCode = 503;
            HttpContext.Request.Headers.RetryAfter = "a few minutes";

            return Ok("Joining a room is currently unavailable");
        }

        [Route("Play")]
        public ApplicationUser Play()
        {
            throw new NotImplementedException();
        }

        public void PlayRound() { }

        public void Move() { }



        public IActionResult Index()
        {
            return Ok();
        }
    }
}
