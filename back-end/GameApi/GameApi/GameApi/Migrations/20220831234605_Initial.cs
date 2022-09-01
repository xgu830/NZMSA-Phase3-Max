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
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Score = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leaderboard", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Leaderboard",
                columns: new[] { "Id", "Name", "Score" },
                values: new object[,]
                {
                    { new Guid("aba5f758-35db-4146-a055-5470f57731ac"), "PrincessPeach", 3016 },
                    { new Guid("b497de8e-3af8-459c-8f1f-8bea386262b4"), "Ooowl", 2048 },
                    { new Guid("be63c866-e75f-45c1-baac-800eee5c4f7b"), "CoolGuy", 1024 },
                    { new Guid("de6192bc-0d38-4be6-9b39-c919dbb81b67"), "Toad", 4096 },
                    { new Guid("ef298108-7856-43f9-84e3-aad6d061504d"), "Mario", 1048 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leaderboard");
        }
    }
}
