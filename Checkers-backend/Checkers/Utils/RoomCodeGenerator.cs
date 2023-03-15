using shortid;
using shortid.Configuration;
namespace Checkers.Utils
{
    public static class RoomCodeGenerator
    {
        private static GenerationOptions options = new GenerationOptions(useNumbers: true, useSpecialCharacters: false, length: 8);
        public static string Create()
        {
            try
            {
                return ShortId.Generate(options);
            }
            catch (Exception ex)
            {
                ShortId.Reset();
            }
            return Create();
        }

    }
}
