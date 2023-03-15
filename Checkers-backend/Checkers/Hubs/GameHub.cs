using Checkers.Hubs.Clients;
using Checkers.Models;
using Checkers.Models.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace Checkers.Hubs
{
    public class GameHub : Hub<IChatClient>
    {
        private IGameRoomRepository _roomRepository;

        public GameHub(IGameRoomRepository roomRepository) 
        {
            _roomRepository = roomRepository;
        }

        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.ReceiveMessage(message);
            //await Clients.Users(new List<int>() { rooms.Where(code => code == urlReceivedCode).Players.ConnectionIds });
        }

        public Task OnConnectedAsync()
        {
            var signalrId = Context.UserIdentifier;
            Player user = (Player)Context.User.Identity;
            if (signalrId != null && user != null)
            {
                user.SignalrId = signalrId;
                return Task.CompletedTask;
            }
            throw new Exception("signalr id or user missing. please help Q_Q");
        }
    }
}
