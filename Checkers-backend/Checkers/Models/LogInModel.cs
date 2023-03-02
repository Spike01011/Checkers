using System.ComponentModel.DataAnnotations;

namespace Checkers.Models;

public class LogInModel
{
    [EmailAddress, Required]
    public string? Email { get; set; }
    public string? Token { get; set; }
    public bool IsAdmin { get; set; }
}