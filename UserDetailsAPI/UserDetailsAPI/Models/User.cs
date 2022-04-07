using System;
using System.Collections.Generic;

#nullable disable

namespace UserDetailsAPI.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
    }
}
