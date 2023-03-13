using Checkers.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Checkers.Controllers
{
    public class GameController : ControllerBase
    {
        public List<ApplicationUser> Players { get; set; }
        public GameController() { }

        public string Host()
        {

            throw new NotImplementedException();
        }

        public void Join(string GameId)
        {
            throw new NotImplementedException();
        }

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
