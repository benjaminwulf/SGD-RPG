// Set variables to player hp
var hpHw = 140;
var hpHh = 112;
var hpRc = 88;
var hpRb = 120;

// Create object with all character cards
var cards = {
    hw: {
        name: "Henrike Warsaw",
        hp: 140
        },
    hh: {
        name: "Hansel Heidelber",
        hp: 112
        },
    rc: {
        name: "Race Car",
        hp: 88
        },
    rb: {
        name: "Ruby",
        hp: 120
        }
};

// Use jQuery to display hp to DOM
$("#hp-hw").text("HP: " + hpHw);
$("#hp-hh").text("HP: " + hpHh);
$("#hp-rc").text("HP: " + hpRc);
$("#hp-rb").text("HP: " + hpRb);

// Move card to fight section on click of attack-button
$(".card").on("click", function() {
     $(this).appendTo($("#selected-character"));
});

// On click "id="attack-button" the immediate following click of card will move id="defender"
$("#attack-button").on("click", function() {
    $("#game-message").text("Choose a character to attack!");
    $(".card").on("click", function() {
         $(this).appendTo($("#defender"));
    });
});

// Here we are creating logic to adjust HP based on Math.random in attack
