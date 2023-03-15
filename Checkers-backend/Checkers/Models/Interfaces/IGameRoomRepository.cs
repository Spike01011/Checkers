namespace Checkers.Models.Interfaces
{
    public interface IGameRoomRepository
    {
        public GameRoom CreateRoom();
        public void DeleteRoom(string roomCode);

        public GameRoom GetRoom(string roomCode);

        public GameRoom GetRoomByPlayer(Player player);

        public void SetRoomPlayersIdByEmail(string email, string signalrId);
        public GameRoom GetRoomByPlayerId(string signalrId);

        public List<string> GetRoomPlayersIds(GameRoom room);
    }
}
