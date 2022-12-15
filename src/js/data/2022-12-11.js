dataSetVersion = "2022-12-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Status",
    key: "series",
    tooltip: "Check this to restrict to certain statuses.",
    checked: false,
    sub: [
        { name: "Watching", tooltip: "Currently Watching Anime", key: "CURRENT" },
        { name: "Completed", tooltip: "Completed Anime", key: "COMPLETED" },
        { name: "Dropped", tooltip: "Dropped Anime", key: "DROPPED" },
        { name: "On Hold", tooltip: "On Hold Anime", key: "PAUSED" },
        { name: "Planning", tooltip: "Planning Anime", key: "PLANNING" },
    ]
  },
  {
    name: "Filter by format",
    key: "format",
    tooltip: "Check this to restrict certain formats.",
    checked: false,
    sub: [ 
      { name: "TV", key: "TV" }, 
      { name: "ONA", key: "ONA" }, 
      { name: "Movie", key: "MOVIE" }, 
      { name: "Special", key: "SPECIAL" }, 
      { name: "TV Short", key: "TV SHORT" }, 
      { name: "OVA", key: "OVA" }, 
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];


dataSet[dataSetVersion].characterData = [

  {
  name: "Snow White with the Red Hair",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "ALDNOAH.ZERO",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Cowboy Bebop",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Death Parade",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/Apocrypha",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "GAMERS!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kill la Kill",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Koro Sensei Quest!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["ONA"]
  }
  },
  
  {
  name: "Spice and Wolf II",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Paprika",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "PSYCHO-PASS",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Re:PETIT ~Re: Starting Life in Another World From PETIT~",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV_SHORT"]
  }
  },
  
  {
  name: "Re:ZERO ~Starting Break Time From Zero~",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV_SHORT"]
  }
  },
  
  {
  name: "Your lie in April",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Soul Eater",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Melancholy of Haruhi Suzumiya",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Angel Beats!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Assassination Classroom",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Assassination Classroom 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Berserk",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Berserk 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "ERASED",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Hero Academia",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Hero Academia Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Hero Academia Season 3",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Code Geass: Lelouch of the Rebellion",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Code Geass: Lelouch of the Rebellion R2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "I Can't Understand What My Husband Is Saying",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV_SHORT"]
  }
  },
  
  {
  name: "I Can't Understand What My Husband is Saying 2nd Thread",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV_SHORT"]
  }
  },
  
  {
  name: "Death Note",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Dragon Ball Z: Resurrection 'F'",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Today's Menu for the Emiya Family",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["ONA"]
  }
  },
  
  {
  name: "Fate/Grand Order: First Order",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["SPECIAL"]
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya 2wei! Herz!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya 2wei!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya 3rei!!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/stay night [Heaven's Feel] I. presage flower",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Fate/stay night [Heaven's Feel] II. lost butterfly",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Fate/stay night [Heaven’s Feel] III. spring song",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Fate/stay night: Unlimited Blade Works",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/stay night: Unlimited Blade Works 2nd Season",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/Zero",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/Zero Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fullmetal Alchemist: Brotherhood",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fullmetal Alchemist: Brotherhood OVA Collection",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Into the Forest of Fireflies' Light",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure (TV)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Diamond is Unbreakable",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Golden Wind",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Stardust Crusaders",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kaguya-sama: Love is War",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kakegurui",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "the Garden of sinners Chapter 1: Thanatos. (Overlooking View)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "the Garden of sinners Chapter 2: …and nothing heart. (Murder Speculation Part A)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "the Garden of sinners Chapter 3: ever cry, never life. (Remaining Sense of Pain)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "the Garden of sinners Chapter 4: garan-no-dou. (The Hollow Shrine)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "the Garden of sinners Chapter 5: Paradox Paradigm",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "The Secret World of Arrietty",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Berserk",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Miss Kobayashi's Dragon Maid",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "A Silent Voice",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "KONOSUBA -God's blessing on this wonderful world!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "KONOSUBA -God's blessing on this wonderful world! 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Log Horizon",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Log Horizon 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Lucky☆Star",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Lucky☆Star OVA",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Made in Abyss",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Made in Abyss: Dawn of the Deep Soul",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Puella Magi Madoka Magica",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Puella Magi Madoka Magica the Movie Part III: Rebellion",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "The Future Diary",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mob Psycho 100",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mob Psycho 100 II",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Princess Mononoke",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "The Seven Deadly Sins",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Seven Deadly Sins: Revival of the Commandments",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "No Game, No Life",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "One-Punch Man",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "One-Punch Man Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Wolf Children",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Spice and Wolf",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Love Story!!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Ouran High School Host Club",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Overlord",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Overlord II",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Overlord III",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Overlord: Ple Ple Pleiades",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["SPECIAL"]
  }
  },
  
  {
  name: "Re:ZERO -Starting Life in Another World-",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Moribito: Guardian of the Spirit",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Spirited Away",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Steins;Gate",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Sword Art Online",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Sword Art Online II",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Gurren Lagann",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Teen Romantic Comedy SNAFU",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Teen Romantic Comedy SNAFU TOO!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Saga of Tanya the Evil",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Yu-Gi-Oh! 5D's",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Yu-Gi-Oh! GX",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Gabriel DropOut",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "ISEKAI QUARTET",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV_SHORT"]
  }
  },
  
  {
  name: "Learning with Manga! Fate/Grand Order",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["SPECIAL"]
  }
  },
  
  {
  name: "The Devil is a Part-Timer!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Demon Girl Next Door",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Hero Academia Season 4",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Ascendance of a Bookworm",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kaguya-sama: Love is War?",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "No Game, No Life Zero",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Isekai Quartet2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV_SHORT"]
  }
  },
  
  {
  name: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Next Life as a Villainess: All Routes Lead to Doom!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Re:ZERO -Starting Life in Another World- Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Ascendance of a Bookworm Side Story",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Didn't I Say to Make My Abilities Average in the Next Life?!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Tower of God",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Demon Girl Next Door Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/Grand Carnival",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Re:ZERO -Starting Life in Another World- Season 2 Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Thus Spoke Rohan Kishibe",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Komi Can’t Communicate",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "SPY x FAMILY",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Ya Boy Kongming!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Skeleton Knight in Another World",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kaguya-sama: Love is War -Ultra Romantic-",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Summer Wars",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "In the Land of Leadale",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Made in Abyss: The Golden City of the Scorching Sun",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: STONE OCEAN",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["ONA"]
  }
  },
  
  {
  name: "Horizon in the Middle of Nowhere",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: STONE OCEAN Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["ONA"]
  }
  },
  
  {
  name: "Komi Can't Communicate Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "A Centaur's Life",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mobile Suit Gundam: The Witch from Mercury - PROLOGUE",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["SPECIAL"]
  }
  },
  
  {
  name: "Umamusume: Pretty Derby",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["TV"]
  }
  },
  
  {
  name: "One-Punch Man OVA",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Azumanga Daioh",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Baccano!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Code Geass: Lelouch of the Re;surrection",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Daily Lives of High School Boys",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya: Vow in the Snow",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Full Metal Panic!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kaiji - Ultimate Survivor",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Eden of The East",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "When They Cry",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Grave of the Fireflies",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Your Name.",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Kokoro Connect",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Troubled Life of Miss Kotoura",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Little Witch Academia",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Little Witch Academia (TV)",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Ancient Magus' Bride",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mob Psycho 100 REIGEN The Miraculous Unknown Psychic",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["OVA"]
  }
  },
  
  {
  name: "Nichijou - My Ordinary Life",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Plastic Memories",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Symphogear",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Bride is a Mermaid",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Attack on Titan",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "From the New World",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "SHIROBAKO",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "WorldEnd: What are you doing at the end of the world? Are you busy? Will you save us?",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Tanaka-kun is Always Listless",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Akagi",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Tsukigakirei",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Violet Evergarden",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "ZOMBIE LAND SAGA",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Handa-kun",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Hitoribocchi no Marumaruseikatsu",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Log Horizon: Destruction of the Round Table",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Demon Slayer: Kimetsu no Yaiba",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "KONOSUBA -God's blessing on this wonderful world!- Legend of Crimson",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "My Teen Romantic Comedy SNAFU Climax!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Hunter x Hunter (2011)",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Ascendance of a Bookworm Season 3",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "As Miss Beelzebub Likes it.",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Sleepy Princess in the Demon Castle",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Wandering Witch: The Journey of Elaina",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Hunter x Hunter",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Fate/Grand Order Divine Realm of the Round Table: Camelot - Paladin; Agateram",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "SHADOWS HOUSE",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Oshi No Ko",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["SPECIAL"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Endo and Kobayashi Live! The Latest on Tsundere Villianess Lieselotte",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Lycoris Recoil",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Devil is a Part-Timer! Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Uncle from Another World",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  format: ["TV"]
  }
  },
  
  {
  name: "Black Bullet",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Eromanga Sensei",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Kumamiko -Girl Meets Bear",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Black Butler",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Oreimo",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "WATAMOTE ~No Matter How I Look at It, It’s You Guys Fault I’m Not Popular!~",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "SING \"YESTERDAY\" FOR ME",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  format: ["TV"]
  }
  },
  
  {
  name: "Girls' Last Tour",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "the Garden of sinners Chapter 6: Fairy Tale. (Oblivion Recording)",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "Fate/Grand Order Absolute Demonic Front: Babylonia",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Magia Record: Puella Magi Madoka Magica Side Story",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Ascendance of a Bookworm Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "My Hero Academia Season 5",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "ISEKAI QUARTET: ANOTHER WORLD",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["MOVIE"]
  }
  },
  
  {
  name: "My Next Life as a Villainess: All Routes Lead to Doom! X",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Overlord IV",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Chainsaw Man",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "BLEACH: Thousand-Year Blood War",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Reincarnated as a Sword",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Management of a Novice Alchemist",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "SPY x FAMILY Cour 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mob Psycho 100 III",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "The Eminence in Shadow",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mobile Suit Gundam: The Witch from Mercury",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Arknights: Prelude to Dawn",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "BOCCHI THE ROCK!",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Horizon in the Middle of Nowhere II",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "Mobile Suit Gundam Seed",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["TV"]
  }
  },
  
  {
  name: "CYBERPUNK: EDGERUNNERS",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  format: ["ONA"]
  }
  },
  
  
];
  



