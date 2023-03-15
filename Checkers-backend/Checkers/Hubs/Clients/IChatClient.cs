using Checkers.Models;

namespace Checkers.Hubs.Clients;

public interface IChatClient
{
    Task ReceiveMessage(ChatMessage message);
}