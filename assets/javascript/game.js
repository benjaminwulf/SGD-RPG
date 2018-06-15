window.onload = function() {
    playerSelect.henrike();
    playerSelect.hansel();
    playerSelect.raceCar();
    playerSelect.ruby();
};

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
}
var hh = {
    "name": "Hansel Heidelber",
    "hp": 112
}
var rc = {
    "name": "Race Car",
    "hp": 88
}
var rb = {
    "name": "Ruby",
    "hp": 120
}
// GLOBAL 
// Use jQuery to display hp to DOM
$(".hp-hw").text("HP: " + hpHw);
$(".hp-hh").text("HP: " + hpHh);
$(".hp-rc").text("HP: " + hpRc);
$(".hp-rb").text("HP: " + hpRb);

// Move card to fight section on click of attack-button
// If "#choose-enemy-button" not clicked, isAttacker set to false
// If "#choose-enemy-button" clicked is true, run defender function
$("#choose-enemy-button").on("click", function () {
    isAttacker = true;
    console.log(isAttacker);
});


var playerSelect = {
    // On click of Henrika Warsaw card, run this function

    henrike: function () {
        $("#card-hw.card").on("click", function () {
            if (isAttacker) {
                defenderHp = hpHw;
                $("#hp-hw").text("HP: " + hpHw);
                console.log(defenderHp);
                $("#card-hw").appendTo($("#defender"));
            } else {
                attackerHp = hpHw;
                $("#hp-hw").text("HP: " + hpHw);
                console.log(attackerHp);
                $("#card-hw").appendTo($("#selected-character"));
            }
        });
    },

    // On click of Hansel Heidelberg card, run this function
    hansel: function () {
        $("#card-hh.card").on("click", function () {
            if (isAttacker) {
                defenderHp = hpHh;
                $("#hp-hh").text("HP: " + hpHh);
                console.log(defenderHp);
                $("#card-hh").appendTo($("#defender"));
            } else {
                attackerHp = hpHh;
                console.log(attackerHp);
                $("#card-hh").appendTo($("#selected-character"));
            }
        });
    },

    // On click of Race Car card, run this function
    raceCar: function () {
        $("#card-rc.card").on("click", function () {
            if (isAttacker) {
                defenderHp = hpRc;
                $("#hp-rc").text("HP: " + hpRc);
                console.log(defenderHp);
                $("#card-rc").appendTo($("#defender"));
            } else {
                attackerHp = hpRc;
                $("#hp-rc").text("HP: " + hpRc);
                console.log(attackerHp);
                $("#card-rc").appendTo($("#selected-character"));
            }
        });
    },

    // On click of Ruby card, run this function
    ruby: function () {
        $("#card-rb.card").on("click", function () {
            if (isAttacker) {
                defenderHp = hpRb;
                $("#hp-rb").text("HP: " + hpRb);
                console.log(defenderHp);
                $("#card-rb").appendTo($("#defender"));
            } else {
                attackerHp = hpRb;
                $("#hp-rb").text("HP: " + hpRb);
                console.log(attackerHp);
                $("#card-rb").appendTo($("#selected-character"));
            }
        });
    }
}

// GAME LOGIC FOR ATTACK FUNCTION
$("#attack-button").on("click", function() {
    var damageAttacker = Math.floor(Math.random() * (.2 * (defenderHp)));
    var damageDefender = Math.floor(Math.random() * (.3 * (attackerHp)));

    if (damageAttacker <= 0 && damageDefender <= 0) {
        console.log("You both are dead");
    }
    if (damageAttacker <= 0) {
        console.log("Game over");
    }
    if (damageDefender <= 0) {
        console.log("Winner");
    } else {
        attackerHp -= damageAttacker;
        defenderHp -= damageDefender;
    }
    console.log("Damage to attacker:", damageAttacker);
    console.log("Attacker HP:", attackerHp);
    
    console.log("Damage to defender:", damageDefender);
    console.log("Defender HP:", defenderHp);

});


// if (isAttacker == false) {
//     var attacker = hw.name;
//     console.log(attacker);
//     console.log(attackerHp);
//     $(".card-body.hp-hw").html("attacker: ", attacker);
//     $(".card-body.hp-hw").html("attackerHp: ", attackerHp);
// } else if ($(".card-body.hp-hw" && isAttacker == true)) {
//     var defender = hw.name;
//     console.log(defender);
//     console.log(attackerHp);
//     $(".card-body.hp-hw").html("defender: ", defender);
//     $(".card-body.hp-hw").html("defenderHp: ", defenderHp);
// }
// if ($(".card-body.hp-hh" && isAttacker == false)) {
//     var attacker = hh.name;
//     console.log(attacker);
//     console.log(attackerHp);
// } else if ($(".card-body.hp-hh" && isAttacker == true)) {
//     var defender = hh.name;
//     console.log(defender);
//     console.log(attackerHp);
// }
// if ($(".card-body.hp-rc" && isAttacker == false)) {
//     var attacker = rc.name;
//     console.log(attacker);
//     console.log(attackerHp);
// } else if ($(".card-body.hp-rc" && isAttacker == true)) {
//     var defender = rc.name;
//     console.log(defender);
//     console.log(attackerHp);
// }
// if ($(".card-body.hp-rb" && isAttacker == false)) {
//     var attacker = rb.name;
//     console.log(attacker);
//     console.log(attackerHp);
// } else if ($(".card-body.hp-rb" && isAttacker == true)) {
//     var defender = rb.name;
//     console.log(defender);
//     console.log(attackerHp);
// }

