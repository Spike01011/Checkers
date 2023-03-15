using Checkers.Models.Interfaces;
using Checkers.Utils;

namespace Checkers.Models
{
    public class GameRoomRepositry : IGameRoomRepository
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public List<GameRoom> GameRooms { get; }

        public GameRoomRepositry(IHttpContextAccessor httpContextAccessor)
        {
            GameRooms = new List<GameRoom>();
        }

        public GameRoom CreateRoom() 
        {
            var code = RoomCodeGenerator.Create();
            var room = new GameRoom(code);
            GameRooms.Add(room);
            return room; 
        }

        public void DeleteRoom(string roomCode)
        {
            var room = GameRooms.FirstOrDefault(x => x.RoomCode == roomCode);
            if (room != null) GameRooms.Remove(room);
        }

        public GameRoom GetRoom(string roomCode)
        {
            return GameRooms.Where(x => x.RoomCode == roomCode).FirstOrDefault();
        }

        public GameRoom GetRoomByPlayer(Player player)
        {
            return GameRooms.Where(x => x.Players.Contains(player)).FirstOrDefault();
        }
    }
}
