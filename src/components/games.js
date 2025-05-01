const allgames = [
  {
    "id": 1,
    "name": "Diablo IV",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/3/3a/Diablo_Coverart.png"
  },
  {
    "id": 2,
    "name": "Half-Life: Alyx",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/49/Half-Life_Alyx_Cover_Art.jpg"
  },
  {
    "id": 3,
    "name": "Final Fantasy VII Rebirth",
    "price": 69.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/7/75/Boxart_for_Final_Fantasy_VII_Rebirth.png"
  },
  {
    "id": 4,
    "name": "Assassin’s Creed Shadows",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/5/54/Assassin%27s_Creed_Shadows_cover.png"
  },
  {
    "id": 5,
    "name": "Monster Hunter Wilds",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/5/52/Monster_Hunter_Wilds_cover.png"
  },
  {
    "id": 6,
    "name": "Celeste",
    "price": 19.99,
    "url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png"
  },
  {
    "id": 7,
    "name": "Dead by Daylight",
    "price": 47.99,
    "url": "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?resize=1&w=360&h=480&quality=medium"
  },
  {
    "id": 8,
    "name": "Hollow Knight",
    "price": 14.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp"
  },
  {
    "id": 9,
    "name": "The Last of us II Remastered",
    "price": 79.99,
    "url": "https://wallpapercave.com/wp/wp13431019.jpg"
  },
  {
    "id": 10,
    "name": "Dead Cells",
    "price": 24.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/1/1f/Dead_cells_cover_art.png"
  },
  {
    "id": 11,
    "name": "Stardew Valley",
    "price": 14.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png"
  },
  {
    "id": 12,
    "name": "The Last of us I",
    "price": 69.99,
    "url": "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?resize=1&w=360&h=480&quality=medium"
  },
  {
    "id": 13,
    "name": "Ori and the Will of the Wisps",
    "price": 29.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/9/94/Ori_and_the_Will_of_the_Wisps.jpg"
  },
  {
    "id": 14,
    "name": "Subnautica",
    "price": 29.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/6/6d/Subnautica_cover_art.png"
  },
  {
    "id": 15,
    "name": "The Forest",
    "price": 19.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/46/TheForest_Game.jpg"
  },
  {
    "id": 16,
    "name": "Minecraft",
    "price": 24.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png"
  },
  {
    "id": 17,
    "name": "Don't Starve",
    "price": 14.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/d/d2/Don%27t_Starve_cover.jpg"
  },
  {
    "id": 18,
    "name": "Factorio",
    "price": 30.00,
    "url": "https://upload.wikimedia.org/wikipedia/en/0/08/Factorio_cover.png"
  },
  {
    "id": 19,
    "name": "Terraria",
    "price": 9.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg"
  },
  {
    "id": 20,
    "name": "Gris",
    "price": 16.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/8/84/GrisCoverImage.jpg"
  },
  {
    "id": 21,
    "name": "Call of Duty: Modern Warfare",
    "price": 6.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg"
  },
  {
    "id": 22,
    "name": "Call of Duty: Black Ops",
    "price": 44.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/0/02/CoD_Black_Ops_cover.png"
  },
  {
    "id": 23,
    "name": "Grand Theft Auto V",
    "price": 14.99,
    "url": "https://wallpapers.com/images/high/gta-5-2560x1440-tile-collage-41b3h33b9sgwam7b.webp"
  },
  {
    "id": 24,
    "name": "Grand Theft Auto: San Andreas",
    "price": 9.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg"
  },
  {
    "id": 25,
    "name": "Mafia: Definitive Edition",
    "price": 19.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/a/ae/Mafia_Definitive_Edition.jpg"
  },
  {
    "id": 26,
    "name": "Max Payne 3",
    "price": 39.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/2/21/Max_Payne_3_Cover.jpg"
  },
  {
    "id": 27,
    "name": "Sleeping Dogs",
    "price": 14.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/9/90/Sleeping_Dogs_-_Square_Enix_video_game_cover.jpg"
  },
  {
    "id": 28,
    "name": "Watch Dogs 2",
    "price": 29.99,
    "url": "https://images3.alphacoders.com/708/708311.jpg"
  },
  {
    "id": 30,
    "name": "Saints Row IV",
    "price": 14.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/5/5d/SaintsRowIV.jpg"
  },
  {
    "id": 31,
    "name": "Red Dead Redemption 2",
    "price": 49.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
  },
  {
    "id": 32,
    "name": "Cyberpunk 2077",
    "price": 39.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
  },
  {
    "id": 33,
    "name": "Elden Ring",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"
  },
  {
    "id": 34,
    "name": "The Witcher 3: Wild Hunt",
    "price": 29.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
  },
  {
    "id": 35,
    "name": "Far Cry 6",
    "price": 34.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/3/35/Far_cry_6_cover.jpg"
  },
  {
    "id": 36,
    "name": "Assassin's Creed Valhalla",
    "price": 44.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg"
  },
  {
    "id": 37,
    "name": "Battlefield V",
    "price": 19.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/f/f0/Battlefield_V_standard_edition_box_art.jpg"
  },
  {
    "id": 38,
    "name": "Tom Clancy's Rainbow Six Siege",
    "price": 14.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg"
  },
  {
    "id": 39,
    "name": "Metro Exodus",
    "price": 29.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/a/af/Cover_Art_of_Metro_Exodus.png"
  },
  {
    "id": 40,
    "name": "Hitman 3",
    "price": 34.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/4b/Hitman_3_Packart.jpg"
  },
  {
    "id": 41,
    "name": "Resident Evil Village",
    "price": 39.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png"
  },
  {
    "id": 42,
    "name": "Dying Light 2",
    "price": 49.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/6/6d/Dying_Light_2_cover_art.jpg"
  },
  {
    "id": 43,
    "name": "Sekiro: Shadows Die Twice",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg"
  },
  {
    "id": 44,
    "name": "Marvel's Spider-Man Remastered",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg"
  },
  {
    "id": 46,
    "name": "Call of duty : World at War",
    "price": 69.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/6/69/WAW_Cover_Art.jpg"
  },
  {
    "id": 47,
    "name": "Avowed",
    "price": 49.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/4d/Avowed_key_art.jpeg"
  },
  {
    "id": 48,
    "name": "Dragon Age: Dreadwolf",
    "price": 69.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/4/4b/Dragon_Age_The_Veilguard_key_art.png"
  },
  {
    "id": 49,
    "name": "The Elder Scrolls VI",
    "price": 79.99,
    "url": "https://www.giantbomb.com/a/uploads/scale_small/0/1992/3478587-7670239509-elder.jpg"
  },
  {
    "id": 50,
    "name": "Black Myth: Wukong",
    "price": 59.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/a/a6/Black_Myth_Wukong_cover_art.jpg"
  },
  {
    "id": 51,
    "name": "Frostpunk 2",
    "price": 25.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/1/1f/Frostpunk_2_cover_art.jpg"
  },
  {
    "id": 52,
    "name": "Atomfall",
    "price": 62.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/1/13/Atomfall_cover_art.jpeg"
  },
  {
    "id": 53,
    "name": "Starfield",
    "price": 55.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/6/6d/Bethesda_Starfield.jpg"
  },
  {
    "id": 54,
    "name": "Hogwarts Legacy",
    "price": 69.99,
    "url": "https://upload.wikimedia.org/wikipedia/commons/3/33/Hogwarts_Legacy_promotional_photo_horizontal.jpg"
  },
  {
    "id": 55,
    "name": "Red Dead Redemption",
    "price": 39.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg"
  },
  {
    "id": 56,
    "name": "The Last of us Part I ",
    "price": 39.99,
    "url": "https://i.pinimg.com/736x/b5/3a/18/b53a18977e7b83e65409278f573854c5.jpg"
  },
  {
    "id": 57,
    "name": "Alan Walk 2",
    "price": 69.99,
    "url": "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S2_1200x1600-c7c8091ddac0f9669c8e5905bca88aaa?resize=1&w=360&h=480&quality=medium"
  },
  {
    "id": 58,
    "name": "Crysis 3 Remastered",
    "price": 49.99,
    "url": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4?resize=1&w=360&h=480&quality=medium"
  },
  {
    "id": 59,
    "name": "Alien: Isolation",
    "price": 56.99,
    "url": "https://cdn1.epicgames.com/df37f065c3f14eadbf011177396e2966/offer/EGS_AlienIsolation_CreativeAssembly_S6-1200x1600-af00adc8f67a7c6138cce183ac1e9503.jpg?resize=1&w=360&h=480&quality=medium"
  },
  {
    "id": 60,
    "name": "War Mongerls",
    "price": 29.99,
    "url": "https://cdn1.epicgames.com/offer/7b57136ac766477eb1e687dcd0310da5/EGS_WarMongrels_DestructiveCreations_S2_1200x1600-f9e30ca0ab7960795a9a933f4c1b8bf8?resize=1&w=360&h=480&quality=medium"
  },
  {
    "id": 61,
    "name": "World War Z Aftermath",
    "price": 52.99,
    "url": "https://cdn1.epicgames.com/offer/wombat/portrait-wwzaftermath-1200x1600_1200x1600-1c62343365f63ed408e5906b88141d7e?resize=1&w=360&h=480&quality=medium"
  },,
  {
    "id": 62,
    "name": "Shadow of the Tomb Raider ",
    "price": 42.99,
    "url": "https://upload.wikimedia.org/wikipedia/en/1/11/Shadow_of_the_Tomb_Raider_cover.png"
  }
]

export default allgames;
