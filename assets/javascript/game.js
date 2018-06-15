window.onload = function () {
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
var attackImgArr = [];

function resetGame() {
    $("#dominion-graphic").html("<img src='https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-01-welcome.png' width='300px'>");
    $(".card").appendTo("#cards");
    attackerHp = "";
    defenderHp = "";
    isAttacker = false;
    attackImgArr = [];
};

$("#reset-game").on("click", function() {
   resetGame();
});

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
$("#attack-button").on("click", function () {
    var damageAttacker = Math.floor(Math.random() * (.2 * (defenderHp)));
    var damageDefender = Math.floor(Math.random() * (.3 * (attackerHp)));

    attackImgArr = [
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-action-ddos01.png",
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-action-ddos02.png",
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-action-ddos03.png"
    ];

    gameOverImgArr = [
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-page-hh-race-car05.png",
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-02-pre-flash-back.png",
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-hw-ruby-fight.png",
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-page-hh-race-car03.png"
    ];

    winnerImgArr = [
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-page-hh-server-room.png",
        "https://s3-us-west-2.amazonaws.com/benji.to/img-sgd-page-hh-race-car01.png",

    ];

    $("#dominion-graphic").html('<img src="' + attackImgArr[Math.floor(Math.random() * (attackImgArr.length))] + '">');

    // ATTACKER HP
    $("#attacker-damage-stats").html("Damage to attacker: " + damageAttacker);

    $("#attacker-hp-stats").html("Attacker HP Remaining: " + attackerHp);

    // DEFENDER HP
    $("#defender-damage-stats").html("Damage to defender: " + damageDefender);

    $("#defender-hp-stats").html("Defender HP: " + defenderHp);

    if (attackerHp <= 0 && defenderHp <= 0) {
        $("#dominion-message").html('<h1>Both Lose!</h1>');
        $("#dominion-graphic").html('<img src="' + gameOverImgArr[Math.floor(Math.random() * (gameOverImgArr.length))] + '" width="300px">');
    }
    if (attackerHp <= 0 && defenderHp > 0) {
        $("#dominion-message").html('<h1>You Lose!</h1>');
        $("#dominion-graphic").html('<img src="' + gameOverImgArr[Math.floor(Math.random() * (gameOverImgArr.length))] + '" width="300px">');
    }
    if (defenderHp <= 0 && attackerHp > 0) {
        $("#dominion-message").html('<h1>You Win!</h1>');
        $("#dominion-graphic").html('<img src="' + winnerImgArr[Math.floor(Math.random() * (winnerImgArr.length))] + '" width="300px">');
    } else {
        attackerHp -= damageAttacker;
        defenderHp -= damageDefender;
    }
});