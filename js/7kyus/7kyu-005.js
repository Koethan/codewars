// 7 Wonders is a board game that consists of building your city, gathering resources and fighting your neighbors.

// One part of the game is also to research science in order to gain points at the end of the game. There are 3 types of science glyphs you can gather:

// Compasses
// Gears
// Tablets
// The way points are added up works as described here:

// Step 1
// Each distinct set of three different glyphs is worth 7 points.

// 1 Compass, 1 Gear and 1 Tablet is 7 points.

// 2 Compasses, 1 Gear and 1 Tablet is still 7 points.

// Note that a distinct set of three different glyphs means 1 Compass, 1 Gear and 1 Tablet. No more, no less!

// Step 2
// The amount of each glyph you own is squared and then summed up.

// 1 Compass, 1 Gear and 1 Tablet is 3 points.

// 2 Compasses, 1 Gear and 1 Tablet is 6 points.

// Finally
// The total science points is equal to the sum of the two steps.

// 1 Compass, 1 Gear and 1 Tablet is finally 10 points.

// 2 Compasses, 1 Gear and 1 Tablet is finally 13 points.

// You will be given 3 inputs corresponding to the amount of each glyph you have acquired in the game. Your task is to output the final score. Take into account that you may have no glyphs at all!


function solve(compasses, gears, tablets) {
    //step 1
    let stepOneTotal = 0
    let tempcomp = compasses
    let tempgears = gears
    let temptablets = tablets
    while( tempcomp > 0 && tempgears > 0 && temptablets > 0){
       if(compasses>=1 && gears >=1 && tablets >=1){
          stepOneTotal += 7
         tempcomp--
         tempgears--
         temptablets--
       }
    }
   
    let stepTwoTotal = (compasses ** 2) + (gears ** 2) + (tablets ** 2)
    return stepOneTotal + stepTwoTotal
  }

//   function solve(c, g, t) {
//     return Math.min(c, g, t) * 7 + c * c + g * g + t * t
//   }
//math.min(c,g,t) finds the minimum value of unique sets, so 0 means none 1 means at least all are 1, 2 means at least there are 2 sets of each etc...
//then we times that by 7 and add it two the squares of each set of items