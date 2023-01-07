using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AnimeScheduler.Core.Models
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Season
    {
        [JsonPropertyName("Winter")]
        Winter,
        [JsonPropertyName("Summer")]
        Summer,
        [JsonPropertyName("Fall")]
        Fall
    }
}
