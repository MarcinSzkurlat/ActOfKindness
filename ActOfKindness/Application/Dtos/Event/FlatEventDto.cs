﻿namespace Application.Dtos.Event
{
    public class FlatEventDto
    {
        public Guid Id { get; set; }
        public string Localization { get; set; }
        public bool IsOnline { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndingDate { get; set; }
        public string Image { get; set; }
    }
}