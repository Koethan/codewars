// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {
    //using modulo to circle back to the start of the array
    //if the goose index is the final element of the array the modulo will return 0 so we...
    //...return the last element of the array
    //else, we minus 1 from the goose index so we can start at 0 and then modulo the array length...
    //...and get the remainder which will always stay under the length of the array
    
    if(goose % players.length === 0){
      return players[players.length-1].name
    }
    let position = (goose-1) % players.length
    return players[position].name
  }

    // return players[(goose-1)%players.length].name