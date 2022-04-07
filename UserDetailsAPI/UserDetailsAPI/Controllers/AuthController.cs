using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDetailsAPI.Data;
using UserDetailsAPI.DTOs;
using UserDetailsAPI.Models;

namespace UserDetailsAPI.Controllers
{
    [Route(template: "api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var user = new User()
            {
                UserEmail = dto.UserEmail,
                Password = dto.UserPassword,
                Gender = dto.Gender
            };
            return Created("Success",_repository.Create(user));
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _repository.CheckUserLogin(dto.UserEmail, dto.UserPassword);
            if (user == null) return BadRequest("Invalid User Credentials");
            else return Ok(user);
        }
    }
}
