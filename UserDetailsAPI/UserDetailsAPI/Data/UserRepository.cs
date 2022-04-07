using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDetailsAPI.Models; 

namespace UserDetailsAPI.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDetailsContext _context;

        public UserRepository(UserDetailsContext context)
        {
            _context = context;
        }

        public User CheckUserLogin(string email, string password)
        {
          var user =  _context.User.FirstOrDefault(x => x.UserEmail.ToLower().Equals(email.ToLower()) && x.Password.ToLower().Equals(password.ToLower()));
           return user;
        }

        public User Create(User user)
        {
            _context.User.Add(user);
            user.Id = _context.SaveChanges();

            return user;
        }
    }
}
