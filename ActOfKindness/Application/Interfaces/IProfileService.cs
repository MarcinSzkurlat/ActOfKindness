﻿using Application.Dtos.Profile;
using Application.Dtos.User;

namespace Application.Interfaces;

public interface IProfileService
{
    Task<ProfileDto?> GetProfileDtoAsync(string username);
}