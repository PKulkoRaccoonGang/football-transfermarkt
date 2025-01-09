const clubs = [
  {
    id: 1,
    name: "FC Barcelona",
    image: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    description: "One of the top clubs in Europe, known for its attacking style and producing world-class players like Lionel Messi.",
    founded: 1899,
    stadium: "Camp Nou",
    headCoach: "Xavi Hernandez",
    players: [
      {
        id: 1,
        photo: "https://img.a.transfermarkt.technology/portrait/header/28003-1710080339.jpg?lm=1",
        firstName: "Lionel",
        lastName: "Messi",
        position: "Forward",
        contract: "2025-06-30"
      },
      {
        id: 2,
        photo: "https://img.a.transfermarkt.technology/portrait/header/466805-1693590295.png?lm=1",
        firstName: "Pedri",
        lastName: "Gonzalez",
        position: "Midfielder",
        contract: "2026-06-30"
      },
      {
        id: 3,
        photo: "https://img.a.transfermarkt.technology/portrait/header/74857-1674465246.jpg?lm=1",
        firstName: "Marc-Andre",
        lastName: "ter Stegen",
        position: "Goalkeeper",
        contract: "2027-06-30"
      }
    ]
  },
  {
    id: 2,
    name: "Real Madrid",
    image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    description: "One of the most successful clubs in history, with 14 UEFA Champions League titles.",
    founded: 1902,
    stadium: "Santiago Bernabéu",
    headCoach: "Carlo Ancelotti",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Karim",
        lastName: "Benzema",
        position: "Forward",
        contract: "2024-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Luka",
        lastName: "Modric",
        position: "Midfielder",
        contract: "2024-06-30"
      },
      {
        id: 3,
        photo: "https://via.placeholder.com/100",
        firstName: "Thibaut",
        lastName: "Courtois",
        position: "Goalkeeper",
        contract: "2026-06-30"
      }
    ]
  },
  {
    id: 3,
    name: "Manchester United",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    description: "An iconic English club with a rich history of domestic and international success.",
    founded: 1878,
    stadium: "Old Trafford",
    headCoach: "Erik ten Hag",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Marcus",
        lastName: "Rashford",
        position: "Forward",
        contract: "2025-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Bruno",
        lastName: "Fernandes",
        position: "Midfielder",
        contract: "2026-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "David",
        lastName: "de Gea",
        position: "Goalkeeper",
        contract: "2024-06-30"
      }
    ]
  },
  {
    id: 4,
    name: "Liverpool FC",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    description: "Known for its passionate fans and success in both the Premier League and UEFA Champions League.",
    founded: 1892,
    stadium: "Anfield",
    headCoach: "Jürgen Klopp",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Mohamed",
        lastName: "Salah",
        position: "Forward",
        contract: "2025-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Virgil",
        lastName: "van Dijk",
        position: "Defender",
        contract: "2026-06-30"
      },
      {
        id: 3,
        photo: "https://via.placeholder.com/100",
        firstName: "Alisson",
        lastName: "Becker",
        position: "Goalkeeper",
        contract: "2027-06-30"
      }
    ]
  },
  {
    id: 5,
    name: "Bayern Munich",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    description: "The dominant team in Germany with a long history of domestic and European trophies.",
    founded: 1900,
    stadium: "Allianz Arena",
    headCoach: "Thomas Tuchel",
    players: [
      {
        id: 4,
        photo: "https://via.placeholder.com/100",
        firstName: "Thomas",
        lastName: "Müller",
        position: "Midfielder",
        contract: "2024-06-30"
      },
      {
        id: 5,
        photo: "https://via.placeholder.com/100",
        firstName: "Joshua",
        lastName: "Kimmich",
        position: "Midfielder",
        contract: "2025-06-30"
      },
      {
        id: 6,
        photo: "https://via.placeholder.com/100",
        firstName: "Manuel",
        lastName: "Neuer",
        position: "Goalkeeper",
        contract: "2024-06-30"
      }
    ]
  },
  {
    id: 6,
    name: "Paris Saint-Germain",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png",
    description: "The top club in France, known for its star-studded lineup and dominance in Ligue 1.",
    founded: 1970,
    stadium: "Parc des Princes",
    headCoach: "Luis Enrique",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Kylian",
        lastName: "Mbappe",
        position: "Forward",
        contract: "2025-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Neymar",
        lastName: "Junior",
        position: "Forward",
        contract: "2026-06-30"
      },
      {
        id: 3,
        photo: "https://via.placeholder.com/100",
        firstName: "Marco",
        lastName: "Verratti",
        position: "Midfielder",
        contract: "2024-06-30"
      }
    ]
  },
  {
    id: 7,
    name: "Juventus FC",
    image: "https://upload.wikimedia.org/wikinews/en/d/d2/Juventus_Turin.svg",
    description: "Italy's most successful club, famous for its defensive strength and domestic success.",
    founded: 1897,
    stadium: "Allianz Stadium",
    headCoach: "Massimiliano Allegri",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Dusan",
        lastName: "Vlahovic",
        position: "Forward",
        contract: "2026-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Paul",
        lastName: "Pogba",
        position: "Midfielder",
        contract: "2025-06-30"
      },
      {
        id: 3,
        photo: "https://via.placeholder.com/100",
        firstName: "Wojciech",
        lastName: "Szczesny",
        position: "Goalkeeper",
        contract: "2024-06-30"
      }
    ]
  },
  {
    id: 8,
    name: "AC Milan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png",
    description: "One of the most successful Italian clubs, known for its history in European competitions.",
    founded: 1899,
    stadium: "San Siro",
    headCoach: "Stefano Pioli",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Olivier",
        lastName: "Giroud",
        position: "Forward",
        contract: "2025-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Sandro",
        lastName: "Tonali",
        position: "Midfielder",
        contract: "2027-06-30"
      },
      {
        id: 3,
        photo: "https://via.placeholder.com/100",
        firstName: "Mike",
        lastName: "Maignan",
        position: "Goalkeeper",
        contract: "2026-06-30"
      }
    ]
  },
  {
    id: 9,
    name: "Chelsea FC",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    description: "One of England's top clubs, with multiple Premier League and Champions League titles.",
    founded: 1905,
    stadium: "Stamford Bridge",
    headCoach: "Mauricio Pochettino",
    players: [
      {
        id: 1,
        photo: "https://via.placeholder.com/100",
        firstName: "Raheem",
        lastName: "Sterling",
        position: "Forward",
        contract: "2027-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Enzo",
        lastName: "Fernandez",
        position: "Midfielder",
        contract: "2026-06-30"
      },
      {
        id: 2,
        photo: "https://via.placeholder.com/100",
        firstName: "Kepa",
        lastName: "Arrizabalaga",
        position: "Goalkeeper",
        contract: "2025-06-30"
      }
    ]
  }
];

export default clubs;
