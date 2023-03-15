namespace Checkers.Models
{
    public class Player
    {
        public ApplicationUser User { get; }
        public string SignalrId { get; set; }
        public List<Pawn> Pawns = new List<Pawn>();

        public Player(ApplicationUser user)
        {
            User = user;
        }
    }
}
