using Checkers.Utils;

namespace Checkers.Models
{
    public class Pawn
    {
        public int Row { get; set; }
        public int Col { get; set; }
        public PawnColor Color { get; }
        public bool IsKing { get; set; }
        public Pawn(int row, int col, PawnColor pawnColor)
        {
            Row = row;
            Col = col;
            Color = pawnColor;
            IsKing= false;
        }
    }
}
