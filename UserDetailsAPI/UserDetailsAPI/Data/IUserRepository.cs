using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDetailsAPI.Models;

namespace UserDetailsAPI.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User CheckUserLogin(string email, string password);
    }
}
