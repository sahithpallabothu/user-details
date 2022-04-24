using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDetailsAPI.Data;
using UserDetailsAPI.DTOs;
using UserDetailsAPI.Helpers;
using UserDetailsAPI.Models;

namespace UserDetailsAPI.Controllers
{
    [Route(template: "api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JWTHelper _jwtService;
        public AuthController(IUserRepository repository, JWTHelper jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
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

            var jwtString = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt",jwtString, new CookieOptions
            {
                HttpOnly = true
            });
            return Ok(new { message="Success"});
        }

        [HttpPost("logout")]
        public IActionResult Logout(int id)
        {
            Response.Cookies.Delete("jwt");
            return Ok(new
            {
                message = "success"
            });
        }

        [HttpGet("user")]
        public IActionResult GetUser()
        {
            try
            {
                var jwtString = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwtString);
                int userId = int.Parse(token.Issuer);

                var user = _repository.GetUserById(userId);
                return Ok(user);
            }
            catch(Exception ex)
            {
                return Unauthorized(ex.Message);
            }
            
        }
    }
}
