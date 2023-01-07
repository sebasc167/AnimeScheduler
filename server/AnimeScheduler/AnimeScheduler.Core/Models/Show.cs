using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnimeScheduler.Core.Models
{
    public class Show
    {
        public int? Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Link { get; set; } = string.Empty;
        public string Season { get; set; } = "Fall";
        public int Year { get; set; }
        public string Weekday { get; set; } = "Monday";
        public bool Completed { get; set; } = false;
        public int? EpisodeOn { get; set; } = 0;
        public int EpisodeTotal { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? SeasonOn { get; set; }

    }
}
