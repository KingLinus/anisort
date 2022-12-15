dataSetVersion = "2022-12-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Status",
    key: "series",
    tooltip: "Check this to restrict to certain status.",
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
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
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
  stage: []
  }
  },
  
  {
  name: "ALDNOAH.ZERO",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Cowboy Bebop",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Death Parade",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Fate/Apocrypha",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "GAMERS!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Kill la Kill",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Koro Sensei Quest!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Spice and Wolf II",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Paprika",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "PSYCHO-PASS",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Re:PETIT ~Re: Starting Life in Another World From PETIT~",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Re:ZERO ~Starting Break Time From Zero~",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Your lie in April",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Soul Eater",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "The Melancholy of Haruhi Suzumiya",
  img: "c5DqpgX.png",
  opts: {
  series: ["PAUSED"],
  stage: []
  }
  },
  
  {
  name: "Angel Beats!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Assassination Classroom",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Assassination Classroom 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Berserk",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Berserk 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "ERASED",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Hero Academia",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Hero Academia Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Hero Academia Season 3",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Code Geass: Lelouch of the Rebellion",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Code Geass: Lelouch of the Rebellion R2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "I Can't Understand What My Husband Is Saying",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "I Can't Understand What My Husband is Saying 2nd Thread",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Death Note",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Dragon Ball Z: Resurrection 'F'",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Today's Menu for the Emiya Family",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/Grand Order: First Order",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya 2wei! Herz!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya 2wei!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya 3rei!!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/stay night [Heaven's Feel] I. presage flower",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/stay night [Heaven's Feel] II. lost butterfly",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/stay night [Heaven’s Feel] III. spring song",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/stay night: Unlimited Blade Works",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/stay night: Unlimited Blade Works 2nd Season",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/Zero",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/Zero Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fullmetal Alchemist: Brotherhood",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fullmetal Alchemist: Brotherhood OVA Collection",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Into the Forest of Fireflies' Light",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure (TV)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Diamond is Unbreakable",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Golden Wind",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Stardust Crusaders",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Kaguya-sama: Love is War",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Kakegurui",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "the Garden of sinners Chapter 1: Thanatos. (Overlooking View)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "the Garden of sinners Chapter 2: …and nothing heart. (Murder Speculation Part A)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "the Garden of sinners Chapter 3: ever cry, never life. (Remaining Sense of Pain)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "the Garden of sinners Chapter 4: garan-no-dou. (The Hollow Shrine)",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "the Garden of sinners Chapter 5: Paradox Paradigm",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Secret World of Arrietty",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Berserk",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Miss Kobayashi's Dragon Maid",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "A Silent Voice",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "KONOSUBA -God's blessing on this wonderful world!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "KONOSUBA -God's blessing on this wonderful world! 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Log Horizon",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Log Horizon 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Lucky☆Star",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Lucky☆Star OVA",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Made in Abyss",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Made in Abyss: Dawn of the Deep Soul",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Puella Magi Madoka Magica",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Puella Magi Madoka Magica the Movie Part III: Rebellion",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Future Diary",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Mob Psycho 100",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Mob Psycho 100 II",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Princess Mononoke",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Seven Deadly Sins",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Seven Deadly Sins: Revival of the Commandments",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "No Game, No Life",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "One-Punch Man",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "One-Punch Man Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Wolf Children",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Spice and Wolf",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Love Story!!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Ouran High School Host Club",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Overlord",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Overlord II",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Overlord III",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Overlord: Ple Ple Pleiades",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Re:ZERO -Starting Life in Another World-",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Moribito: Guardian of the Spirit",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Spirited Away",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Steins;Gate",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Sword Art Online",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Sword Art Online II",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Gurren Lagann",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Teen Romantic Comedy SNAFU",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Teen Romantic Comedy SNAFU TOO!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Saga of Tanya the Evil",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Yu-Gi-Oh! 5D's",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Yu-Gi-Oh! GX",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Gabriel DropOut",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "ISEKAI QUARTET",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Learning with Manga! Fate/Grand Order",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Devil is a Part-Timer!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Demon Girl Next Door",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Hero Academia Season 4",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Ascendance of a Bookworm",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Kaguya-sama: Love is War?",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "No Game, No Life Zero",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Isekai Quartet2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "My Next Life as a Villainess: All Routes Lead to Doom!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Re:ZERO -Starting Life in Another World- Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Ascendance of a Bookworm Side Story",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Didn't I Say to Make My Abilities Average in the Next Life?!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Tower of God",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "The Demon Girl Next Door Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Fate/Grand Carnival",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Re:ZERO -Starting Life in Another World- Season 2 Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Thus Spoke Rohan Kishibe",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Komi Can’t Communicate",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "SPY x FAMILY",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Ya Boy Kongming!",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Skeleton Knight in Another World",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Kaguya-sama: Love is War -Ultra Romantic-",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Summer Wars",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "In the Land of Leadale",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Made in Abyss: The Golden City of the Scorching Sun",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: STONE OCEAN",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Horizon in the Middle of Nowhere",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "JoJo's Bizarre Adventure: STONE OCEAN Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Komi Can't Communicate Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "A Centaur's Life",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Mobile Suit Gundam: The Witch from Mercury - PROLOGUE",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Umamusume: Pretty Derby",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "One-Punch Man OVA",
  img: "c5DqpgX.png",
  opts: {
  series: ["COMPLETED"],
  stage: []
  }
  },
  
  {
  name: "Azumanga Daioh",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Baccano!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Code Geass: Lelouch of the Re;surrection",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Daily Lives of High School Boys",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Fate/kaleid liner Prisma☆Illya: Vow in the Snow",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Full Metal Panic!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Kaiji - Ultimate Survivor",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Eden of The East",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "When They Cry",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Grave of the Fireflies",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Your Name.",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Kokoro Connect",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "The Troubled Life of Miss Kotoura",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Little Witch Academia",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Little Witch Academia (TV)",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "The Ancient Magus' Bride",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Mob Psycho 100 REIGEN The Miraculous Unknown Psychic",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Nichijou - My Ordinary Life",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Plastic Memories",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Symphogear",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "My Bride is a Mermaid",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Attack on Titan",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "From the New World",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "SHIROBAKO",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "WorldEnd: What are you doing at the end of the world? Are you busy? Will you save us?",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Tanaka-kun is Always Listless",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Akagi",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Tsukigakirei",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Violet Evergarden",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "ZOMBIE LAND SAGA",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Handa-kun",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Hitoribocchi no Marumaruseikatsu",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Log Horizon: Destruction of the Round Table",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Demon Slayer: Kimetsu no Yaiba",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "KONOSUBA -God's blessing on this wonderful world!- Legend of Crimson",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "My Teen Romantic Comedy SNAFU Climax!",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Hunter x Hunter (2011)",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Ascendance of a Bookworm Season 3",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "As Miss Beelzebub Likes it.",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Sleepy Princess in the Demon Castle",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Wandering Witch: The Journey of Elaina",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Hunter x Hunter",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Fate/Grand Order Divine Realm of the Round Table: Camelot - Paladin; Agateram",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "SHADOWS HOUSE",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Oshi No Ko",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Endo and Kobayashi Live! The Latest on Tsundere Villianess Lieselotte",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Lycoris Recoil",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "The Devil is a Part-Timer! Season 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Uncle from Another World",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "",
  img: "c5DqpgX.png",
  opts: {
  series: ["PLANNING"],
  stage: []
  }
  },
  
  {
  name: "Black Bullet",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "Eromanga Sensei",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "Kumamiko -Girl Meets Bear",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "Black Butler",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "Oreimo",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "WATAMOTE ~No Matter How I Look at It, It’s You Guys Fault I’m Not Popular!~",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "SING \"YESTERDAY\" FOR ME",
  img: "c5DqpgX.png",
  opts: {
  series: ["DROPPED"],
  stage: []
  }
  },
  
  {
  name: "Girls' Last Tour",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "the Garden of sinners Chapter 6: Fairy Tale. (Oblivion Recording)",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Fate/Grand Order Absolute Demonic Front: Babylonia",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Magia Record: Puella Magi Madoka Magica Side Story",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Ascendance of a Bookworm Part 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "My Hero Academia Season 5",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "ISEKAI QUARTET: ANOTHER WORLD",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "My Next Life as a Villainess: All Routes Lead to Doom! X",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Overlord IV",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Chainsaw Man",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "BLEACH: Thousand-Year Blood War",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Reincarnated as a Sword",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Management of a Novice Alchemist",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "SPY x FAMILY Cour 2",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Mob Psycho 100 III",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "The Eminence in Shadow",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Mobile Suit Gundam: The Witch from Mercury",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Arknights: Prelude to Dawn",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "BOCCHI THE ROCK!",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Horizon in the Middle of Nowhere II",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "Mobile Suit Gundam Seed",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
  {
  name: "CYBERPUNK: EDGERUNNERS",
  img: "c5DqpgX.png",
  opts: {
  series: ["CURRENT"],
  stage: []
  }
  },
  
];
  



