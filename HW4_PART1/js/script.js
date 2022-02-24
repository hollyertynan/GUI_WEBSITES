/*

File: script.js
GUI Assignment: Creating an Interactive Dynamic Table
Tynan Hollyer, UMass Lowell Computer Science
tynan_hollyer@student.uml.edu
Updated by TH on 11/3/2021 at 5:51 PM

Description: Using JavaScript to make
a multiplication table.

Credit:
Proper Documentation copied from
HW 1, Part 2, Author: Wenjin Zhou

Help from: https://www.w3schools.com/

Other help from: 
https://www.dropbox.com/s/9k0r4cqv5kdsu8u/hw6_grader_lecture.m4v?d
https://www.youtube.com/watch?v=zIpA8k167gU

This channel: https://www.youtube.com/channel/UCZ6hWRouBVsr8luNAUMtsiw
Video from the channel specifically: https://www.youtube.com/watch?v=XFGtGzZhy_A

*/

/*
    NEW FORM VALIDATION
*/

// this video helped with most, if not all error checking
// https://www.youtube.com/watch?v=yaxUV3Ib4vM&t=10s
$(document).ready(function() {
    $("#multiForm").validate({
        rules: {
            firstMultiplier: {
                required: true,
                min: -50,
                max: 50
            },

            lastMultiplier: {
                required: true,
                min: -50,
                max: 50
            },

            firstMultiplicand: {
                required: true,
                min: -50,
                max: 50
            },

            lastMultiplicand: {
                required: true,
                min: -50,
                max: 50
            }
        },

        messages: {
            firstMultiplier: {
                required: "Input Required",
                min: "Must be greater than or equal to -50",
                max: "Must be less than or equal to 50"
            },

            lastMultiplier: {
                required: "Input Required",
                min: "Must be greater than or equal to -50",
                max: "Must be less than or equal to 50"
            },

            firstMultiplicand: {
                required: "Input Required",
                min: "Must be greater than or equal to -50",
                max: "Must be less than or equal to 50"
            },

            lastMultiplicand: {
                required: "Input Required",
                min: "Must be greater than or equal to -50",
                max: "Must be less than or equal to 50"
            }
        },

        submitHandler: function(form) {
            getValues(); 
            return false;
            form.submit();
          }
    });
});

function getValues() {

    // reset table and get numbers
    document.getElementById("table").innerHTML = "";
    firstMultiplier = Number(document.getElementById("first").value);
    lastMultiplier = Number(document.getElementById("second").value);
    firstMultiplicand = Number(document.getElementById("third").value);
    lastMultiplicand = Number(document.getElementById("fourth").value);

    /* OLD NUMBER CHECKS

    All Number Checks

    1. If firstMultiplier > lastMultiplier
    2. -50 <= firstMultiplier <= 50
    3. -50 <= lastMultiplier <= 50
    4. If firstMultiplicand > lastMultiplicand
    5. -50 <= firstMultiplicand <= 50
    6. -50 <= lastMultiplicand <= 50
    7. If any errors, print the errors and retrn. 

    */

    /*
    var flag = 0;
    var errors = "";

    if (firstMultiplier > lastMultiplier) {
        errors += "First Multiplier cannot be greater than Last Multiplier </br></br>"
        flag++;
    }

    if (firstMultiplier < -50 || firstMultiplier > 50) {
        errors += "First Multiplier must be greater than -50 and less than 50 </br></br>"
        flag++;
    }

    if (lastMultiplier < -50 || lastMultiplier > 50) {
        errors += "Last Multiplier must be greater than -50 and less than 50 </br></br>"
        flag++;
    }

    if (firstMultiplicand > lastMultiplicand) {
        errors += "First Multiplicand cannot be greater than Last Multiplicand </br></br>"
        flag++;
    }

    if (firstMultiplicand < -50 || firstMultiplicand > 50) {
        errors += "First Multiplicand must be greater than -50 and less than 50 </br></br>"
        flag++;
    }

    if (lastMultiplicand < -50 || lastMultiplicand > 50) {
        errors += "Last Multiplicand must be greater than -50 and less than 50 </br></br>"
        flag++;
    }

    if (flag > 0) {
        document.getElementById("errors").innerHTML = errors;
        return;
    }
    */

    /*

    Use row_counter and col_counter to keep 
    track of the headers as we build the table.

    Start for loop, start building table row. Start 
    next for loop, and add a table head or table 
    data accordingly.

    Increase counters accordingly and end row. 


    */

    var multi_table = "";
    var row_counter = firstMultiplier;
    var col_counter = firstMultiplicand;

    var multiplier_multiplier = firstMultiplier - 1;
    var multiplicand_multiplier = firstMultiplicand - 1;

    for (i = firstMultiplicand; i <= lastMultiplicand + 1; i++) { // row

        multi_table += "<tr>";

        for (j = firstMultiplier; j <= lastMultiplier + 1; j++) { // col
            if (i == firstMultiplicand && j == firstMultiplier) {
                multi_table += "<th class=\"table-light px-3\" style=\"width: 5%\">X</th>";
            } else if (j == firstMultiplier) {
                multi_table += "<th class=\"table-light position-absolute\" style=\"width: 3.2%\">" + col_counter + "</th>";
                col_counter++;
            } else if (i == firstMultiplicand) {
                multi_table += "<th class=\"table-light\">" + row_counter + "</th>";
                row_counter++;
            } else {
                multi_table += "<td>" + multiplier_multiplier * multiplicand_multiplier + "</td>";
                multiplier_multiplier++;
            }
        }

        multiplicand_multiplier++;
        multiplier_multiplier = firstMultiplier;

        multi_table += "</tr>";
    }

    /*

    Print table and remove any error messages if any 
    since we made it through the program there are no errors. 

    */

    document.getElementById("table").innerHTML = "<table class=\"table table-bordered table-dark\">" + multi_table + "</table>";
    document.getElementById("errors").innerHTML = "";
}