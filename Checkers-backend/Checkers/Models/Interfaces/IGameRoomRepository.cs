namespace Checkers.Models.Interfaces
{
    public interface IGameRoomRepository
    {
        public GameRoom CreateRoom();
        public void DeleteRoom(string roomCode);

        public GameRoom GetRoom(string roomCode);

        public GameRoom GetRoomByPlayer(Player player);
    }
}
