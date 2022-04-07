using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserDetailsAPI.DTOs
{
    public class RegisterDto
    {
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string Gender { get; set; }
    }
}
