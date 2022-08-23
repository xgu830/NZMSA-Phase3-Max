﻿// <auto-generated />
using System;
using GameApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GameApi.Migrations
{
    [DbContext(typeof(GameDbContext))]
    [Migration("20220822225717_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("GameApi.Model.Leaderboard", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Leaderboard");

                    b.HasData(
                        new
                        {
                            Id = new Guid("53cca2b6-fa02-4b45-915b-454bc665bf2e"),
                            Name = "Ooowl",
                            Score = 2048
                        },
                        new
                        {
                            Id = new Guid("ca1116f9-bc3f-4498-99ee-029da2eb39c8"),
                            Name = "CoolGuy",
                            Score = 1024
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
