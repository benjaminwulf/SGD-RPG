// Set variables to player hp
var hpHw = 140;
var hpHh = 112;
var hpRc = 80;
var hpRb = 120;

// Use jQuery to display hp to DOM
$("#hp-hw").text("HP: " + hpHw);
$("#hp-hh").text("HP: " + hpHh);
$("#hp-rc").text("HP: " + hpRc);
$("#hp-rb").text("HP: " + hpRb);

// Move card to fight section on click of attack-button
$("#card-hw").on("click", function() {
    $("#card-hw").appendTo($("#selected-character-section"));
});
$("#card-hh").on("click", function() {
    $("#card-hh").appendTo($("#selected-character-section"));
});
$("#card-rc").on("click", function() {
    $("#card-rc").appendTo($("#selected-character-section"));
});
$("#card-rb").on("click", function() {
    $("#card-rb").appendTo($("#selected-character-section"));
});

// On click "id="attack-button" the immediate following click of card will move id="defender""