using Application.Dtos.Event;
using Domain.Models;

namespace Application.Interfaces
{
    public interface IEventService
    {
        Task<List<DetailsEventDto>> GetModeratedEventsAsync();
        Task<List<DetailsEventDto>> GetUnmoderatedEventsAsync();
        Task CreateEventAsync(CreateEventDto newEvent);
        Task DeleteEventAsync(Guid id);
        Task<DetailsEventDto> GetEventByIdAsync(Guid id);
        Task UpdateEventAsync(Guid id, EditEventDto updatedEvent);
        Task ModerateEventAsync(Guid id);
        Task<List<DetailsEventDto>> GetFilteredModeratedEventsAsync(EventFilter filter);
        Task<List<ParticipantDto>> ReturnParticipantsDtoAsync(Guid eventId);
        Task JoinEventAsync(Guid eventId);
    }
}
