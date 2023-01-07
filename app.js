console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for ( let i = 0; i <= count; i++) {
        if ( i % 2 != 0 ) {
            console.log(i);
        }
        if (count < 0) {
            console.log(`This is a negative number. Let's change it to a positive!`); 
            count = Math.abs(count);
            //or count = count * 1; 
            //or count = -count; 
        }
    }
    }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`; 
    const belowSixteen = `Sorry ${userName}, but you need to wait unti you're 16.`; 

    if (!age) {
        console.log("Please enter a valid age.");
    } else if (age >= 16 || age == undefined) {
        console.log(aboveSixteen)
    } else {
        console.log(belowSixteen)
    }
}


// Exercise 3 Section
function cartesianPlane(x, y) {
    if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`)
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`)
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4`)
    } else if ( x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`)
    } else if (x == 0 && y != 0) {
        console.log(`0, ${y} is on the y axis`)
    } else if (x != 0 && y == 0) {
        console.log(`${x} is on the y axis`)
    } else {
        console.log('Origin');
    }
}


//Exercise 4 Section
function triangleSides(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
        return `Invalid triangle`;
    } 
 

    if (a != b && a != c && b != c) {
        return `Sides ${a}, ${b}, and ${c} make a Scalene triangle`;
    } 
    

    if ( a == b && a == c && b == c ){
        return `Sides ${a}, ${b}, and ${c} make an Equilateral triangle`
    } else {
        if ( a == b || a == c || b == c || b == a ) {
            return `Sides ${a}, ${b}, and ${c} make an Isosceles triangle`;
        } 

    } 
}

//or:
// function validTri(a, b, c) {
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         console.log(`invalid triangle`)
//     } else if (a == b && a == c && b == c) {
//         console.log(`equilateral triangle`);
//     } else if ((a != b && a != c && b != c)) {
//         console.log(`scalene triangle`);
//     } else {
//         console.log(`isoceles triangle`);
//     }
// }

// validTri(1,1,2);
// validTri(2,2,2);
// validTri(6,5,4);
// validTri(1,2,2);



//Exercise 5 Section
function dailyUsage(planLimit, day, usage) {
    const dayPeriod = 30;
    const expectedAvgUse = (planLimit / dayPeriod).toFixed(2);
    const averageUsageSoFar = (usage / day).toFixed(2);
    const projectedTotalUsage = averageUsageSoFar * dayPeriod;
    const totalUsageDifference = projectedTotalUsage - planLimit;
    const remainingData = planLimit - usage;
    const daysRemaining = dayPeriod - day;
    const gbPerDayCorrection = (remainingData / daysRemaining).toFixed(2);
  
    if (remainingData <= 0) {
      console.log(`You are completely out of data :(`);
    }
  
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Expected average daily use: ${expectedAvgUse} GB/day`);
  
    //Exceeding Text
    if (projectedTotalUsage > planLimit) {
      console.log(
        `You are Exceeding your daily average use ${averageUsageSoFar} GB/day. Continuing this high usage, you'll exceed your data plan by ${totalUsageDifference} GB/day. To stay below your data plan, use no more than ${gbPerDayCorrection}.`
      );
    } else if (projectedTotalUsage < planLimit) {
      console.log(
        `You are below your daily average use ${averageUsageSoFar} GB/day. To get the most out of your data plan, start using ${gbPerDayCorrection} per day.`
      );
    }
  }




