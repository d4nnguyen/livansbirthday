// =============================================
// OPEN BIRTHDAY PRESENT
// =============================================

const openButton =
    document.getElementById("openButton");

const intro =
    document.getElementById("intro");

const birthdaySite =
    document.getElementById("birthdaySite");


openButton.addEventListener("click", function () {

    intro.style.transition =
        "opacity 0.8s ease";

    intro.style.opacity =
        "0";


    setTimeout(function () {

        intro.style.display =
            "none";

        birthdaySite.style.display =
            "block";

        window.scrollTo(0, 0);

    }, 800);

});



// =============================================
// CURSOR SPARKLES
// =============================================

document.addEventListener(
    "mousemove",
    function (event) {

        if (Math.random() > 0.90) {

            const sparkle =
                document.createElement("span");


            const sparkleOptions = [
                "✦",
                "✧",
                "♡",
                "⋆"
            ];


            const colors = [
                "#9baec8",
                "#b8afd0",
                "#b5c4ac",
                "#d4b3ad",
                "#d6c17d"
            ];


            sparkle.textContent =
                sparkleOptions[
                    Math.floor(
                        Math.random() *
                        sparkleOptions.length
                    )
                ];


            sparkle.style.position =
                "fixed";

            sparkle.style.left =
                event.clientX + "px";

            sparkle.style.top =
                event.clientY + "px";

            sparkle.style.pointerEvents =
                "none";

            sparkle.style.zIndex =
                "9999";

            sparkle.style.fontSize =
                Math.floor(
                    Math.random() * 10 + 10
                ) + "px";


            sparkle.style.color =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            sparkle.style.transition =
                "all 0.8s ease";


            document.body.appendChild(
                sparkle
            );


            setTimeout(function () {

                sparkle.style.transform =
                    "translateY(-25px) rotate(30deg)";

                sparkle.style.opacity =
                    "0";

            }, 10);


            setTimeout(function () {

                sparkle.remove();

            }, 800);

        }

    }
);



// =============================================
// BOYFRIEND VENDING MACHINE
// =============================================

const vendingItems =
    document.querySelectorAll(
        ".vending-item"
    );

const machineMessage =
    document.getElementById(
        "machineMessage"
    );

const dispensedItem =
    document.getElementById(
        "dispensedItem"
    );

const vendingReward =
    document.getElementById(
        "vendingReward"
    );

const rewardRarity =
    document.getElementById(
        "rewardRarity"
    );

const rewardEmoji =
    document.getElementById(
        "rewardEmoji"
    );

const rewardTitle =
    document.getElementById(
        "rewardTitle"
    );

const rewardText =
    document.getElementById(
        "rewardText"
    );


let vendingBusy = false;



// =============================================
// VENDING MACHINE PRIZES
// =============================================

const vendingPrizes = {

    soda: {
        emoji: "🥤",
        rarity: "COMMON DROP",
        rarityClass: "",
        title: "watch the mentalist together",
        text:
            "redeemable for one uninterrupted hour of watching our favorite tv show ♡"
    },


    chocolate: {
        emoji: "🍫",
        rarity: "RARE DROP",
        rarityClass: "rare",
        title: "dani + plushie photoshoot",
        text:
            "you can use this to redeem a photoshoot of dani and her plushies."
    },


    cookie: {
        emoji: "🍪",
        rarity: "EPIC BUFF",
        rarityClass: "epic",
        title: "dani gaming buff",
        text:
            "dani will play ANY game with you. choose wisely."
    },


    strawberry: {
        emoji: "🍓",
        rarity: "RARE DROP",
        rarityClass: "rare",
        title: "pedicure + feet pics",
        text:
            "choose dani's toe colors & receive pictures of her toes."
    },


    candy: {
        emoji: "🍬",
        rarity: "LEGENDARY DROP",
        rarityClass: "legendary",
        title: "BeReal",
        text:
            "For one entire day, Dani will send you a BeReal every hour. (A BeReal is when you take a picture of your face & what you're doing at that hour) Redeemable after today."
    },


    juice: {
        emoji: "🧃",
        rarity: "COMMON BUFF",
        rarityClass: "",
        title: "energy restored",
        text:
            "dani will not be overstimulated today."
    },


    ramen: {
        emoji: "🍜",
        rarity: "EPIC DROP",
        rarityClass: "epic",
        title: "infinite kisses token",
        text:
            "dani must give you the most amazing kiss every time you ask"
    },


    popcorn: {
        emoji: "🍿",
        rarity: "RARE DROP",
        rarityClass: "rare",
        title: "movie night token",
        text:
            "redeem for a movie night where YOU pick the movie and i will happily watch with no complaints."
    },


    onigiri: {
        emoji: "🍙",
        rarity: "✦ LEGENDARY DROP ✦",
        rarityClass: "legendary",
        title: "0.0001% drop rate",
        text:
            "dani admits she is extremely obsessed with you and loves you very very much ♡"
    }

};



// =============================================
// DISPENSE ITEM
// =============================================

vendingItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            if (vendingBusy) {
                return;
            }


            vendingBusy = true;


            const itemName =
                item.dataset.item;

            const code =
                item.dataset.code;

            const prize =
                vendingPrizes[itemName];


            // Hide previous reward

            vendingReward.classList.remove(
                "show"
            );


            // Reset slot

            dispensedItem.classList.remove(
                "drop"
            );

            dispensedItem.textContent =
                prize.emoji;


            // Shake selected snack

            item.classList.add(
                "dispensing"
            );


            machineMessage.innerHTML =
                "DISPENSING<br>" +
                code +
                "...";


            // Stop button from staying animated

            setTimeout(function () {

                item.classList.remove(
                    "dispensing"
                );

            }, 500);


            // Item falls into slot

            setTimeout(function () {

                machineMessage.innerHTML =
                    "* CLUNK *";

                dispensedItem.classList.add(
                    "drop"
                );

            }, 700);


            // Reveal prize

            setTimeout(function () {

                rewardRarity.textContent =
                    prize.rarity;


                rewardRarity.className =
                    "reward-rarity";


                if (
                    prize.rarityClass
                ) {

                    rewardRarity.classList.add(
                        prize.rarityClass
                    );

                }


                rewardEmoji.textContent =
                    prize.emoji;

                rewardTitle.textContent =
                    prize.title;

                rewardText.textContent =
                    prize.text;


                vendingReward.classList.add(
                    "show"
                );


                machineMessage.innerHTML =
                    "ENJOY ♡";


                vendingSparkles();


                vendingBusy = false;

            }, 1200);

        }
    );

});



// =============================================
// VENDING SPARKLES
// =============================================

function vendingSparkles() {

    const pieces = [
        "♡",
        "✦",
        "⋆",
        "✧"
    ];


    for (let i = 0; i < 18; i++) {

        const piece =
            document.createElement("span");


        piece.textContent =
            pieces[
                Math.floor(
                    Math.random() *
                    pieces.length
                )
            ];


        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 +
            "vw";

        piece.style.top =
            Math.random() * 100 +
            "vh";

        piece.style.pointerEvents =
            "none";

        piece.style.zIndex =
            "9999";

        piece.style.fontSize =
            Math.floor(
                Math.random() * 10 + 12
            ) + "px";

        piece.style.color =
            "#9a8fb4";

        piece.style.transition =
            "transform 0.8s ease, opacity 0.8s ease";


        document.body.appendChild(
            piece
        );


        setTimeout(function () {

            piece.style.transform =
                "translateY(-30px) rotate(45deg)";

            piece.style.opacity =
                "0";

        }, 10);


        setTimeout(function () {

            piece.remove();

        }, 850);

    }

}



// =============================================
// CHOOSE YOUR BIRTHDAY PRESENT
// =============================================

const presentButtons =
    document.querySelectorAll(
        ".present-box"
    );

const presentReveal =
    document.getElementById(
        "presentReveal"
    );

const revealEmoji =
    document.getElementById(
        "revealEmoji"
    );

const revealTitle =
    document.getElementById(
        "revealTitle"
    );

const revealText =
    document.getElementById(
        "revealText"
    );


const presents = {

    one: {
        emoji: "💋",
        title: "a surprise that you can open",
        text:
            "it will be arriving at your door some time next week. just something simple and silly"
    },


    two: {
        emoji: "🏆",
        title: "cosplay photoshoot",
        text:
            "some will be cute, some will be freaky. will be arriving in your DMs in the following days"
    },


    three: {
        emoji: "🍰",
        title: "let them eat (ice cream) cake!",
        text:
            "ICE CREAM CAKEEEE ♡ check your door dummy >:)"
    },

};



presentButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const presentName =
                button.dataset.present;

            const selectedPresent =
                presents[presentName];


            presentButtons.forEach(
                function (otherButton) {

                    otherButton.classList.remove(
                        "opened"
                    );

                }
            );


            button.classList.add(
                "opened"
            );


            presentReveal.classList.remove(
                "show"
            );


            setTimeout(function () {

                revealEmoji.textContent =
                    selectedPresent.emoji;

                revealTitle.textContent =
                    selectedPresent.title;

                revealText.textContent =
                    selectedPresent.text;


                presentReveal.classList.add(
                    "show"
                );

            }, 150);


            presentBurst(button);

        }
    );

});



// =============================================
// PRESENT SPARKLE BURST
// =============================================

function presentBurst(button) {

    const rect =
        button.getBoundingClientRect();


    const pieces = [
        "♡",
        "✦",
        "⋆",
        "✧"
    ];


    for (let i = 0; i < 12; i++) {

        const piece =
            document.createElement("span");


        piece.textContent =
            pieces[
                Math.floor(
                    Math.random() *
                    pieces.length
                )
            ];


        piece.style.position =
            "fixed";

        piece.style.left =
            rect.left +
            rect.width / 2 +
            "px";

        piece.style.top =
            rect.top +
            rect.height / 2 +
            "px";

        piece.style.zIndex =
            "9999";

        piece.style.pointerEvents =
            "none";

        piece.style.fontSize =
            Math.floor(
                Math.random() * 12 + 12
            ) + "px";

        piece.style.color =
            "#9a8fb4";

        piece.style.transition =
            "transform 0.8s ease, opacity 0.8s ease";


        document.body.appendChild(
            piece
        );


        const x =
            Math.random() * 180 - 90;

        const y =
            Math.random() * 180 - 90;


        setTimeout(function () {

            piece.style.transform =
                `translate(${x}px, ${y}px)
                 rotate(${Math.random() * 360}deg)`;

            piece.style.opacity =
                "0";

        }, 10);


        setTimeout(function () {

            piece.remove();

        }, 850);

    }

}



// =============================================
// BIRTHDAY CANDLES
// =============================================

const candles =
    document.querySelectorAll(
        ".candle"
    );

const wishMessage =
    document.getElementById(
        "wishMessage"
    );

let candlesOut = 0;


candles.forEach(function (candle) {

    candle.addEventListener(
        "click",
        function () {

            if (
                candle.classList.contains(
                    "blown-out"
                )
            ) {
                return;
            }


            candle.classList.add(
                "blown-out"
            );


            const flame =
                candle.querySelector(
                    ".flame"
                );


            flame.textContent =
                "💨";

            candlesOut++;


            setTimeout(function () {

                flame.style.opacity =
                    "0";

            }, 450);


            if (
                candlesOut ===
                candles.length
            ) {

                setTimeout(function () {

                    wishMessage.textContent =
                        "happy birthday baby ♡";

                    birthdayConfetti();

                }, 600);

            }

        }
    );

});



// =============================================
// BIRTHDAY CONFETTI
// =============================================

function birthdayConfetti() {

    const confettiPieces = [
        "♡",
        "✦",
        "⋆",
        "✧",
        "🎉",
        "♡"
    ];


    const colors = [
        "#9baec8",
        "#b8afd0",
        "#b5c4ac",
        "#d4b3ad",
        "#d6c17d"
    ];


    for (let i = 0; i < 45; i++) {

        const piece =
            document.createElement("span");


        piece.textContent =
            confettiPieces[
                Math.floor(
                    Math.random() *
                    confettiPieces.length
                )
            ];


        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 +
            "vw";

        piece.style.top =
            "-30px";

        piece.style.zIndex =
            "9999";

        piece.style.pointerEvents =
            "none";

        piece.style.fontSize =
            Math.floor(
                Math.random() * 15 + 12
            ) + "px";


        piece.style.color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.transition =
            "transform 2.5s ease, opacity 2.5s ease";


        document.body.appendChild(
            piece
        );


        setTimeout(function () {

            piece.style.transform =
                `translateY(110vh)
                 rotate(${Math.random() * 720}deg)`;

            piece.style.opacity =
                "0";

        }, Math.random() * 300);


        setTimeout(function () {

            piece.remove();

        }, 3000);

    }

}



// =============================================
// VIDEO CONTROLS
// =============================================

const videos =
    document.querySelectorAll(
        ".memory-video"
    );


videos.forEach(function (video) {

    video.volume = 0.65;


    video.addEventListener(
        "play",
        function () {

            videos.forEach(
                function (otherVideo) {

                    if (
                        otherVideo !== video
                    ) {

                        otherVideo.pause();

                    }

                }
            );

        }
    );

});



// Pause videos if he leaves the tab

document.addEventListener(
    "visibilitychange",
    function () {

        if (document.hidden) {

            videos.forEach(
                function (video) {

                    video.pause();

                }
            );

        }

    }
);