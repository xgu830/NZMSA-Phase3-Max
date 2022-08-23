using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Leaderboard",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Score = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leaderboard", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Leaderboard",
                columns: new[] { "Id", "Name", "Score" },
                values: new object[] { new Guid("53cca2b6-fa02-4b45-915b-454bc665bf2e"), "Ooowl", 2048 });

            migrationBuilder.InsertData(
                table: "Leaderboard",
                columns: new[] { "Id", "Name", "Score" },
                values: new object[] { new Guid("ca1116f9-bc3f-4498-99ee-029da2eb39c8"), "CoolGuy", 1024 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leaderboard");
        }
    }
}
