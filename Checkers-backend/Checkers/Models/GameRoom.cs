using System.Media;

namespace Checkers.Models
{
    public class GameRoom
    {
        public string RoomCode { get; }
        public Player[] Players = new Player[] { null, null };

        public GameRoom(string roomCode)
        {
            RoomCode = roomCode;
        }

        public void AddPlayer(Player player)
        {
            if (Players.ElementAt(0) == null)
            {
                Players.SetValue(player, 0);
            }
            else if (Players.ElementAt(1) == null)
            {
                Players.SetValue(player, 1);
            }
        }
    }
}
