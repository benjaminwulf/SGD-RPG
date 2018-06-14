// Set variables to player hp
var hpHw = 140;
var hpHh = 112;
var hpRc = 88;
var hpRb = 120;
var attackerHp = "";
var defenderHp = "";
var isAttacker = false;

// Create object with all character cards
var characters = [
        {
        name: "Henrike Warsaw",
        hp: 140
        },
        {
        name: "Hansel Heidelber",
        hp: 112
        },
        {
        name: "Race Car",
        hp: 88
        },
        {
        name: "Ruby",
        hp: 120
        }
    ]

// Use jQuery to display hp to DOM
$("#hp-hw").text("HP: " + hpHw);
$("#hp-hh").text("HP: " + hpHh);
$("#hp-rc").text("HP: " + hpRc);
$("#hp-rb").text("HP: " + hpRb);

// Move card to fight section on click of attack-button
// If "#choose-enemy-button" clicked is true, run defender function
// If "#choose-enemy-button" not clicked, run attacker function
if (isAttacker == true) {
    $("#choose-enemy-button").on("click", function defender() {
        $("#card-hw.card").on("click", function() {
            defenderHp = hpHw;
            console.log(defenderHp);
            $("#card-hw").appendTo($("#defender"));
        });
        $("#card-hh.card").on("click", function() {
            defenderHp = hpHh;
            console.log(defenderHp);
            $("#card-hh").appendTo($("#defender"));
        });
        $("#card-rc.card").on("click", function() {
            defenderHp = hpRc;
            console.log(defenderHp);
            $("#card-rc").appendTo($("#defenderr"));
        });
        $("#card-rb.card").on("click", function() {
            defenderHp = hpRb;
            console.log(defenderHp);
            $("#card-rb").appendTo($("#defender"));
        });
    });
} else if (isAttacker == false) { 
$("#card-hw.card").on("click", function() {
    isAttacker = true;
    attackerName = characters.name;
    attackerHp = hpHw;
    console.log(attackerHp);
    $("#card-hw").appendTo($("#selected-character"));
});
$("#card-hh.card").on("click", function() {
    isAttacker = true;
    attackerName = characters.name;
    attackerHp = hpHh;
    console.log(attackerHp);
    $("#card-hh").appendTo($("#selected-character"));
});
$("#card-rc.card").on("click", function() {
    isAttacker = true;
    attackerName = characters.name;
    attackerHp = hpRc;
    console.log(attackerHp);
    $("#card-rc").appendTo($("#selected-character"));
});
$("#card-rb.card").on("click", function() {
    isAttacker = true;
    attackerName = characters.name;
    attackerHp = hpRb;
    console.log(attackerHp);
    $("#card-rb").appendTo($("#selected-character"));
});
} 
// On click "id="attack-button" the immediate following click of card will move id="defender"
// $("#choose-enemy-button").on("click", function defender() {
//     $("#card-hw.card").on("click", function() {
//         defenderHp = hpHw;
//         console.log(defenderHp);
//         $("#card-hw").appendTo($("#defender"));
//     });
//     $("#card-hh.card").on("click", function() {
//         defenderHp = hpHh;
//         console.log(defenderHp);
//         $("#card-hh").appendTo($("#defender"));
//     });
//     $("#card-rc.card").on("click", function() {
//         defenderHp = hpRc;
//         console.log(defenderHp);
//         $("#card-rc").appendTo($("#defenderr"));
//     });
//     $("#card-rb.card").on("click", function() {
//         defenderHp = hpRb;
//         console.log(defenderHp);
//         $("#card-rb").appendTo($("#defender"));
//     });
// });
    // $("#choose-enemy-message").text("Choose a character to attack!");
    // $(".card").on("click", function() {
    //      defender = this.key.hp;
    //      $(this).appendTo($("#defender"));
    // });


// Here we are creating logic to adjust HP based on Math.random in attack

