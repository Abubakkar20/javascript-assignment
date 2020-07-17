
// feetToMile:
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}


// woodCalculator

function woodCalculator (chair, table, bed) {
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWoodAmmount = chairWoodCount + tableWoodCount + bedWoodCount;

    return totalWoodAmmount;
}



// tinyFriend
var friends =["Razzak", "Abubakkar", "Raju", "Raj"]
function tinyFriend (friends){
    var smallestNumber = friends[0];
    for( var i = 0; i < friends.length; i++){
        var currentNumber = friends[i];
        if(currentNumber < smallestNumber){
            smallestNumber = currentNumber;
        }
    }
    return smallestNumber;
}
// brickCalculator
function brickCalculator(floor){
    let brick = 0;
    if(floor > 0 && floor <= 10){
        brick = floor * 15000;
    }
    else if(floor > 10 && floor <= 20){
        floor = floor - 10;
        brick = (floor * 12000) + 150000;
    }
    else if(floor > 20){
        floor = floor - 20;
        brick = (floor * 10000) + 270000;
    }
    else{
        return "Could not be a negative value."
    }
    return brick;
}


