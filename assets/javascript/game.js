// Set variables to player hp
var hpHw = 140;
var hpHh = 112;
var hpRc = 88;
var hpRb = 120;
var attackerHp = "";
var defenderHp = "";
var isAttacker = false;

// Create objects with all character cards
var hw = {
        "name": "Henrike Warsaw",
        "hp": 140
        };
var hh = {
        "name": "Hansel Heidelber",
        "hp": 112
        };
var rc = {
        "name": "Race Car",
        "hp": 88
        };
var rb = {
        "name": "Ruby",
        "hp": 120
        };

// Use jQuery to display hp to DOM
$("#hp-hw").text("HP: " + hpHw);
$("#hp-hh").text("HP: " + hpHh);
$("#hp-rc").text("HP: " + hpRc);
$("#hp-rb").text("HP: " + hpRb);

// Move card to fight section on click of attack-button
// If "#choose-enemy-button" not clicked, isAttacker set to false
// If "#choose-enemy-button" clicked is true, run defender function
$("#choose-enemy-button").on("click", function() {
    isAttacker = true;
    console.log(isAttacker);
 });

// On click of Henrika Warsaw card, run this function
$("#card-hw.card").on("click", function() {
    if (isAttacker) {
        defenderHp = hpHw;
        console.log(defenderHp);
        $("#card-hw").appendTo($("#defender"));
    }
    else {
        attackerHp = hpHw;
        console.log(attackerHp);
        $("#card-hw").appendTo($("#selected-character"));
    }
});

// On click of Hansel Heidelberg card, run this function
$("#card-hh.card").on("click", function() {
    if (isAttacker) {
        defenderHp = hpHh;
        console.log(defenderHp);
        $("#card-hh").appendTo($("#defender"));
    }
    else {
        attackerHp = hpHh;
        console.log(attackerHp);
        $("#card-hh").appendTo($("#selected-character"));
    }
});

// On click of Race Car card, run this function
$("#card-rc.card").on("click", function() {
    if (isAttacker) {
        defenderHp = hpRc;
        console.log(defenderHp);
        $("#card-rc").appendTo($("#defender"));
    }
    else {
        attackerHp = hpRc;
        console.log(attackerHp);
        $("#card-rc").appendTo($("#selected-character"));
    }
});

// On click of Ruby card, run this function
$("#card-rb.card").on("click", function() {
    if (isAttacker) {
        defenderHp = hpRb;
        console.log(defenderHp);
        $("#card-rb").appendTo($("#defender"));
    }
    else {
        attackerHp = hpRb;
        console.log(attackerHp);
        $("#card-Rb").appendTo($("#selected-character"));
    }
});