/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: item680.js
Date: 12/13/18
Programmer: Illya King
*/

// The line below is to test your link to the .js file. 
//   Please comment it out (put // in front).
// alert("the link to the .js file is correct!");

$(document).ready(function () {
    
    document.getElementById("a").focus();

    var palletLength;
    var palletWidth;
    var commodityLength;
    var commodityWidth;
    var freightLength;
    var freightWidth;
    var freightHeight;
    var crateLength;
    var crateWidth;
    var crateHeight;
    var button;
    var button2;
    var answer;
    var answer2;
    var shortBase;
    var shortBaseTwo;
    var baseWidth;
    var heightMeasure;
    var commodityLengthMeasure;
    var commodityWidthMeasure;
    var compareOne;
    var compareTwo;
    var compareThree;
    var compareFour;
    var newBoxOne;
    var newBoxTwo;
    
    $("#clear").on("click", function () {

        $("#a").val("");
        $("#b").val("");
        $("#c").val("");
        $("#d").val("");
        $("#e").val("");
        $("#f").val("");
        $("#g").val("");
        $("#h").val("");
        $("#i").val("");
        $("#j").val("");
        $("#k").val("");
        $("#l").val("");
        $("#m").val("");
        $("#n").val("");
        $("#o").val("");
        $("#aa").val("");
        $("#aaa").val("");
        $("#bbb").val("");
        $("#bbbb").val("");
    });
    
    $("#clear2").on("click", function () {
        $("#q").val("");
        $("#r").val("");
        $("#s").val("");
        $("#t").val("");
        $("#u").val("");
        $("#v").val("");
        $("#w").val("");
        $("#x").val("");
        $("#y").val("");
        $("#z").val("");
    });
    
    $(".operator").on("click", function () {

        button = $(this).attr("value");

        palletLength = $("#a").val();

        palletWidth = $("#b").val();
        
        baseWidth = $("#bbbb").val();

        commodityLength = $("#e").val();

        commodityWidth = $("#f").val();
           
        heightMeasure = $("#aa").val();
          
        commodityLengthMeasure = $("#e").val();
          
        commodityWidthMeasure = $("#f").val();

        if (isNaN(palletLength) || isNaN(palletWidth)) {
            alert("Please enter a number in both boxes.");
            return;
        }

        if (button === "Calculate") {
            var palletSqInches = parseFloat(palletLength) * parseFloat(palletWidth);
            var itemSqInches = parseFloat(commodityLength) * parseFloat(commodityWidth);
            answer = ((itemSqInches / palletSqInches) * 100);
            $("#c").val(palletSqInches);
            $("#d").val((palletSqInches / 144).toFixed(2));
            $("#g").val(itemSqInches);
            $("#h").val((itemSqInches / 144).toFixed(2));
            $("#i").val(answer.toFixed(2));
            $("#m").val((parseFloat(heightMeasure) * 0.67).toFixed(2));
            $("#n").val(parseFloat(commodityLengthMeasure) + parseFloat(12));
            $("#o").val(parseFloat(commodityWidthMeasure) + parseFloat(12));
            shortBaseTwo = $("#o").val();
            $("#bbbb").val((parseFloat(heightMeasure) * 0.67).toFixed(2));
            
            if (commodityLength <= commodityWidth) {
                $("#k").val(commodityLength);
                $("#l").val(commodityLength * 1.5);
                shortBase = $("#l").val();
            } else {
                $("#k").val(commodityWidth);
                $("#l").val(commodityWidth * 1.5);
                shortBase = $("#l").val();
            }
            
            compareOne = $("#m").val();
            compareTwo = $("#n").val();
            compareThree = $("#bbbb").val();
            compareFour = $("#o").val();

            if (compareOne > compareTwo) {
                $("#aaa").val((parseFloat(heightMeasure) * 0.67).toFixed(2));
                newBoxOne = $("#aaa").val();
            } else if (compareOne < compareTwo) {
                $("#aaa").val(parseFloat(commodityLengthMeasure) + parseFloat(12));
                newBoxOne = $("#aaa").val();
            }
            
            if (compareThree >= compareFour) {
                $("#bbb").val(compareThree);
                newBoxTwo = $("#bbb").val();
            } else {
                $("#bbb").val(compareFour);
                newBoxTwo = $("#bbb").val();
            }
        }

        if (answer < 65.00 && shortBase > heightMeasure) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else if (answer < 65.00 && shortBase >= heightMeasure && shortBaseTwo <= baseWidth) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else if (answer < 65.00 && shortBase >= heightMeasure && newBoxOne >= palletLength && newBoxTwo <= palletWidth) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else if (answer < 65.00 && shortBase >= heightMeasure && newBoxOne <= palletLength && newBoxTwo >= palletWidth) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else if (answer < 65.00 && shortBase <= heightMeasure && shortBaseTwo >= baseWidth && newBoxOne >= palletLength && newBoxTwo <= palletWidth) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else if (answer < 65.00 && shortBase <= heightMeasure && shortBaseTwo >= baseWidth && newBoxOne <= palletLength && newBoxTwo >= palletWidth) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else if (answer < 65.00 && shortBase <= heightMeasure && newBoxOne <= palletLength && newBoxTwo <= palletWidth) {
            document.getElementById("j").value = "YES";
            document.getElementById("j").style.backgroundColor = "#7FFF00";
            document.getElementById("j").style.fontWeight = "bold";
        } else {
            document.getElementById("j").value = "NO";
            document.getElementById("j").style.backgroundColor = "#ff0000";
            document.getElementById("j").style.fontWeight = "bold";
        }

    });
    
    $(".operator2").on("click", function () {

        button = $(this).attr("value");
            
        crateLength = $("#q").val();

        crateWidth = $("#r").val();
            
        crateHeight = $("#s").val();
    
        freightLength = $("#u").val();

        freightWidth = $("#v").val();
            
        freightHeight = $("#w").val();
        
        if (isNaN(crateLength) || isNaN(crateWidth)) {
            alert("Please enter a number in both boxes.");
            return;
        }
        
        if (button === "Calculate") {
            var crateSqInches = crateLength * crateWidth * crateHeight;
            var freightSqInches = freightLength * freightWidth * freightHeight;
            answer2 = ((freightSqInches / crateSqInches) * 100);
            $("#t").val((crateSqInches / 1728).toFixed(2));
            $("#x").val((freightSqInches / 1728).toFixed(2));
        }
        
        if (answer2 < 65.00) {
            document.getElementById("z").value = "YES";
            document.getElementById("z").style.backgroundColor = "#7FFF00";
            document.getElementById("z").style.fontWeight = "bold";
        } else {
            document.getElementById("z").value = "NO";
            document.getElementById("z").style.backgroundColor = "#ff0000";
            document.getElementById("z").style.fontWeight = "bold";
        }
        
        $("#y").val(answer2.toFixed(2));

    });
    
});
