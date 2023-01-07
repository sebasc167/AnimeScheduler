using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AnimeScheduler.Core.Models;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace AnimeScheduler.Data.SQL
{
    //lets make our scheudler context 
    //and the corresponding tables we have
    public class AnimeSchedulerContext : DbContext
    {
        public AnimeSchedulerContext(DbContextOptions<AnimeSchedulerContext> options)
            :base(options)
        {

        }

        // Now we need the DBSets which are like the tables
        // the dbset shows represents a table which is tied
        // to the show class
        public DbSet<Show> Shows {get; set; }

        //Now we want to configure options for the dbcontext 
        // with method below
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            //What you see in the UseSQlServer method is the connection string
            optionsBuilder.UseSqlServer(
                "Server=localhost;Database=AnimeScheduler;Integrated Security=SSPI;TrustServerCertificate=True",
                options => options.EnableRetryOnFailure()
            ).LogTo(Console.WriteLine, 
                new[] { DbLoggerCategory.Database.Command.Name },
                LogLevel.Information)
            .EnableSensitiveDataLogging();
            //The db doesnt exists
        }
    }
}
 