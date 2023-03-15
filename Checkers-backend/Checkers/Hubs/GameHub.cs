using System.Security.Claims;
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
            var currentUserId = Context.UserIdentifier;
            if (currentUserId != null)
            {
                var room = _roomRepository.GetRoomByPlayerId(currentUserId);
                if (room != null)
                {
                    await Clients.Users(_roomRepository.GetRoomPlayersIds(room)).ReceiveMessage(message);
                }
            }
            //await Clients.Users(new List<int>() { rooms.Where(code => code == urlReceivedCode).Players.ConnectionIds });
        }

        public async Task OnConnectedAsync()
        {
            var signalrId = Context.UserIdentifier;
            var userEmail = Context.User.Claims.Single(x => x.Type == ClaimTypes.Email);
            if (signalrId != null && userEmail != null)
            {
                _roomRepository.SetRoomPlayersIdByEmail(userEmail.Value, signalrId);
            }
            else
            {
                throw new Exception("signalr id or user missing. please help Q_Q");
            }
        }
    }
}
