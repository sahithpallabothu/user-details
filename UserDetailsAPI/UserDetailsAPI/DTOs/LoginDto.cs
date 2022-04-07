using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserDetailsAPI.DTOs
{
    public class LoginDto
    {
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
    }
}
