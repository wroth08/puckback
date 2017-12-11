exports.seed = function(knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return knex('teams').insert([
        {id: 1,
        name: "New Jersey Devils",
        favorited: 'y'
        },
        {id: 2,
          name: "New York Islanders",
          favorited: 'y'
        },
        {id: 3,
          name: "New York Rangers",
          favorited: 'y'
        },
        {id: 4,
          name: "Philadelphia Flyers",
          favorited: 'y'
        },
        {id: 5,
          name: "Pittsburgh Penguins",
          favorited: 'y'
        },
        {id: 6,
          name: "Boston Bruins",
          favorited: 'y'
        },
        {id: 7,
          name: "Buffalo Sabres",
          favorited: 'y'
        },
        {id: 8,
          name: "Montreal Canadiens",
          favorited: 'y'
        },
        {id: 9,
          name: "Ottawa Senators",
          favorited: 'y'
        },
        {id: 10,
          name: "Toronto Maple Leafs",
          favorited: 'y'
        },
        {id: 12,
          name: "Carolina Hurricanes",
          favorited: 'y'
        },
        {id: 13,
          name: "Florida Panthers",
          favorited: 'y'
        },
        {id: 14,
          name: "Tampa Bay Lightning",
          favorited: 'y'
        },
        {id: 15,
          name: "Washington Capitals",
          favorited: 'y'
        },
        {id: 16,
          name: "Chicago Blackhawks",
          favorited: 'y'
        },
        {id: 17,
          name: "Detroit Red Wings",
          favorited: 'y'
        },
        {id: 18,
          name: "Nashville Predators",
          favorited: 'y'
        },
        {id: 19,
          name: "St. Louis Blues",
          favorited: 'y'
        },
        {id: 20,
          name: "Calgary Flames",
          favorited: 'y'
        },
        {id: 21,
          name: "Colorado Avalanche",
          favorited: 'y'
        },
        {id: 22,
          name: "Edmonton Oilers",
          favorited: 'y'
        },
        {id: 23,
          name: "Vancouver Canucks",
          favorited: 'y'
        },
        {id: 24,
          name: "Anaheim Ducks",
          favorited: 'y'
        },
        {id: 25,
          name: "Dallas Stars",
          favorited: 'y'
        },
        {id: 26,
          name: "Los Angeles Kings",
          favorited: 'y'
        },
        {id: 28,
          name: "San Jose Sharks",
          favorited: 'y'
        },
        {id: 29,
          name: "Columbus Blue Jackets",
          favorited: 'y'
        },
        {id: 30,
          name: "Minnesota Wild",
          favorited: 'y'
        },
        {id: 52,
          name: "Winnipeg Jets",
          favorited: 'y'
        },
        {id: 53,
          name: "Arizona Coyotes",
          favorited: 'y'
        },
        {id: 54,
          name: "Vegas Golden Knights",
          favorited: 'y'
        },
      ]);
    });
};
