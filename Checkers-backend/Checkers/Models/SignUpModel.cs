﻿using System.ComponentModel.DataAnnotations;

namespace Checkers.Models
{
    public class SignUpModel
    {
        [Required]
        public string? UserName { get; set; }
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        [Compare("ConfirmPassword")]
        public string? Password { get; set; }
        [Required]
        public string? ConfirmPassword { get; set; }

        public SignUpModel(string userName, string email, string password)
        {
            UserName = userName;
            Email = email;
            Password = password;
        }
    }
}
