using Checkers.Hubs.Clients;
using Checkers.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace Checkers.Hubs;

[Authorize]
public class ChatHub : Hub<IChatClient>
{
    //private List<int> rooms = new List<int>();
    public async Task SendMessage(ChatMessage message)
    {
        await Clients.All.ReceiveMessage(message);
        //await Clients.Users(new List<int>() { rooms.Where(code => code == urlReceivedCode).Players.ConnectionIds });
    }
}