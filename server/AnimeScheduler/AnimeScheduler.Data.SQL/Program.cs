Console.WriteLine("Hello, World!");


/*

using AnimeScheduler.Core.Models;
using AnimeScheduler.Data.SQL;

using (AnimeSchedulerContext context = new AnimeSchedulerContext())
{
    context.Database.EnsureCreated();
    //this will ensure the database was created and if it wasn't
    //it will make it on the fly
    //EF CORE will read the connectionstring as well
}

void AddShows()
{//Create the context
    using AnimeSchedulerContext context = new AnimeSchedulerContext();
    //make a show object
    Show firstShow = new Show()
    {
        Name= "First",
        Description = "www.link.com",
        Season = Season.Winter,
        Year = 2022,
        Weekday = Weekday.Tuesday,
        Completed= false,
        EpisodeOn = 4,
        EpisodeTotal= 24,
        StartDate= DateTime.Now,
        EndDate = new DateTime(2022,12,30)
    };
    context.Add(firstShow);
    context.SaveChanges();
}

void GetShows()
{
    using var context = new AnimeSchedulerContext();
    var shows = context.Shows.ToList(); //entering dbset and LINQ op
    //run the query and the get query results in the form of a list
    //now go through the rows and print
    foreach(var show in shows)
    {
        Console.WriteLine(show.Name + " total ep count: " + show.EpisodeTotal);
    }
}

void GetShowNames()
{
    using var context = new AnimeSchedulerContext();
    var showNames = context.Shows
        .Where(show => show.Name == "first")
        .Select(show => show.Name)
        .ToList();
    foreach(var showName in showNames)
    {
        Console.WriteLine(showName);
    }

}

AddShows();
GetShows();
*/