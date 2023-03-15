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

        public void SetRoomPlayersIdByEmail(string email, string signalrId)
        {
            var room = GameRooms.Where(x => x.Players.Any(player => player.User.Email == email)).FirstOrDefault();
            if (room != null)
            {
                if (room.Players[0] != null)
                {
                    if (room.Players[0].User.Email == email)
                    {
                        room.Players[0].SignalrId = signalrId;
                    }
                    else if (room.Players[1].User.Email == email)
                    {
                        room.Players[1].SignalrId = signalrId;
                    }
                }
            }
        }

        public GameRoom GetRoomByPlayerId(string signalrId)
        {
            return GameRooms.Where(x => x.Players.Any(player => player.SignalrId == signalrId)).FirstOrDefault();
        }

        public List<string> GetRoomPlayersIds(GameRoom room)
        {
            List<string> ids = new List<string>();
            foreach (var player in room.Players)
            {
                ids.Add(player.SignalrId);
            }
            return ids;
        }
    }
}
