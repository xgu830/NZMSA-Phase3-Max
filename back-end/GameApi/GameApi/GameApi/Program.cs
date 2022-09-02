using Microsoft.EntityFrameworkCore;
using GameApi.Data;
using GameApi.Interfaces;
using GameApi.Repositories;

var MyAllowedSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

builder.Services.AddCors(options => 
{
    options.AddPolicy(name: MyAllowedSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("https://msa-phase3-frontend.azurewebsites.net").AllowAnyHeader();
        });
});

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<GameDbContext>(context => 
    context.UseInMemoryDatabase("LeaderBoards"));

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<ILeaderboardRepository, LeaderboardRepository>();
builder.Services.AddGraphQLServer().AddQueryType<Query>()
    .AddProjections().AddFiltering().AddSorting();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowedSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.MapGraphQL("/graphql");

app.Run();
