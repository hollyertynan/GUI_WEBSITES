/*

File: script.js
GUI Assignment: Creating Scrabble
Tynan Hollyer, UMass Lowell Computer Science
tynan_hollyer@student.uml.edu
Updated by TH on 12/16/2021 at 10:25 PM

Description: Website HTML file. 

Credit:
Proper Documentation copied from
HW 1, Part 2, Author: Wenjin Zhou

Help from: https://www.w3schools.com/

Other help from: 
https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Tiles.html

*/

var rollingTotal = 0;
var totalPoints = 0; 
var doubleWordFlag1 = 1;
var doubleWordFlag2 = 1;
var totalTiles = 100;

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"];

/*
* clearLetters()
* Removes all tiles from the board and resets all counters. 
* 
*/
function clearLetters() {
    document.getElementById("holder").innerHTML = "";
    totalPoints = 0;
    rollingTotal = 0;
    document.getElementById("totalPointsValue").innerHTML = totalPoints;
    document.getElementById("rollingPointsValue").innerHTML = rollingTotal;

    totalTiles = 100;
    for (var i = 0; i < 27; i++) {
        ScrabbleTiles[letters[i]]["number-remaining"] = ScrabbleTiles[letters[i]]["original-distribution"];
        console.log("number-remaining: " + ScrabbleTiles[letters[i]]["number-remaining"]);
        console.log("original-distribution: " + ScrabbleTiles[letters[i]]["original-distribution"]);
    }
    document.getElementById("totalTilesValues").innerHTML = totalTiles;
}

/*
* randomizeLetters()
* Randomize tiles from the given pool, place them on holder, and remove them from the pool. 
* 
*/
function randomizeLetters() {
    rollingTotal = 0;
    document.getElementById("rollingPointsValue").innerHTML = rollingTotal;
    document.getElementById("holder").innerHTML = "";

    if (totalTiles > 7) {
        for (var i = 0; i < 7; i++) {
            // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
            var flag = 0;
    
            while(flag == 0) {
                var randomTile = letters[Math.floor(Math.random()*letters.length)];
                if (ScrabbleTiles[randomTile]["number-remaining"] > 0) {
                    document.getElementById("holder").innerHTML += "<img id=\"" + randomTile + "\" class=\"tiles\" src=\"assets/Scrabble_Tile_" + randomTile + ".jpg\" alt=\"letter\"> ";
                    flag = 1;
                    ScrabbleTiles[randomTile]["number-remaining"]--;
                    totalTiles--;
                } else {
                    flag = 0;
                }
            }
        }
    } else if (totalTiles <= 7 && totalTiles > 0) {
        for (var i = totalTiles; i > 0; i--) {
            console.log(totalTiles);
            var flag = 0;
            while(flag == 0) {
                var randomTile = letters[Math.floor(Math.random()*letters.length)];
                if (ScrabbleTiles[randomTile]["number-remaining"] > 0) {
                    document.getElementById("holder").innerHTML += "<img id=\"" + randomTile + "\" class=\"tiles\" src=\"assets/Scrabble_Tile_" + randomTile + ".jpg\" alt=\"letter\"> ";
                    flag = 1;
                    ScrabbleTiles[randomTile]["number-remaining"]--;
                    totalTiles--;
                } else {
                    flag = 0;
                }
            }
        }
    } else {
        document.getElementById("holder").innerHTML += "<h3 class=\"text-light\">No Tiles Remaining!</h3>";
    }
        

    document.getElementById("totalTilesValues").innerHTML = totalTiles;

    // https://jqueryui.com/draggable/
    // https://jqueryui.com/droppable/
    $( function() {
        $( ".tiles" ).draggable({
            snap: ".snapTiles"
        })
        /*
        $( "#draggable0" ).draggable( {
            snap: ".snapTiles"
        });
        
        $( "#draggable1" ).draggable({
            snap: ".snapTiles"
        });
        $( "#draggable2" ).draggable({
            snap: ".snapTiles"
        });
        $( "#draggable3" ).draggable({
            snap: ".snapTiles"
        });
        $( "#draggable4" ).draggable({
            snap: ".snapTiles"
        });
        $( "#draggable5" ).draggable({
            snap: ".snapTiles"
        });
        $( "#draggable6" ).draggable({
            snap: ".snapTiles"
        });
        */
        $( "#droppable0" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
            }
        });

        $( "#droppable1" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
                doubleWordFlag1 = 2;
            }
        });
        $( "#droppable2" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
            }
        });
        $( "#droppable3" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
            }
        });
        $( "#droppable4" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
            }
        });
        $( "#droppable5" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
                doubleWordFlag2 = 2;                
            }
        });
        $( "#droppable6" ).droppable({
            drop: function( event, ui ) {
                var myID = $(ui.draggable).attr("id");
                $( "#rollingPoints" )
                    .find ( "h4" )
                        .html( totalRollingPoints(myID) );
            }
        });
    });
}

/*
* totalRollingPoints(String)
* Get the string of a tile and return the value from the ScrabbleTiles array for point score. 
* 
*/
function totalRollingPoints(myID) {
    rollingTotal += ScrabbleTiles[myID]["value"];
    return rollingTotal;
}

/*
* totalAllPoints()
* Takes points from the rolling value and adds them to the total value.
* 
*/
function totalAllPoints() {
    totalPoints += rollingTotal;
    totalPoints *= doubleWordFlag1;
    totalPoints *= doubleWordFlag2;
    document.getElementById("totalPointsValue").innerHTML = totalPoints;
    randomizeLetters();
    rollingTotal = 0;
    document.getElementById("rollingPointsValue").innerHTML = rollingTotal;
}