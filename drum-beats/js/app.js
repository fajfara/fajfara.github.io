// Variables main
let userSeq = [];
let simonSeq = [1];
let playedID = [];
let on;
let off;
let j = 0;
let count= 1;
let userClickNum = -1;
let playing = true;
let drumNumber;
const introSeq = [2,3,5];

// Selecting DOM elements
const snareDrum = document.getElementById('snare-drum');
const leftTom = document.getElementById('left-tom');
const rightTom = document.getElementById('right-tom');
const kickDrum = document.getElementById('kick-drum');
const rightCymbal = document.getElementById('right-cymbal');
const leftCymbalTop = document.getElementById('left-cymbal-top-one');
const leftCymbalBottom = document.getElementById('left-cymbal-bottom-one');
const leftCymbal = document.getElementById('left-top-cymbal');
const overlay = document.getElementById('overlay');
const drumContainer = document.getElementById('drum-container');
const startButton = document.getElementById('start-button');
const drumOverlay = document.getElementById('drum-overlay');
const disableClick = document.getElementById('disable-click');
const score = document.getElementById('score');
const failScreen = document.getElementById('fail-screen');
const tryAgainbutton = document.getElementById('try-again-button');
const quitButton = document.getElementById('quit-button');

// audio variables
const snareDrumAudio = new Audio('./drum-sounds/snare.wav');
const leftTomAudio = new Audio('./drum-sounds/left-tom.wav');
const rightTomAudio = new Audio('./drum-sounds/right-tom.wav');
const kickDrumAudio = new Audio('./drum-sounds/kickdrum.wav');
const rightCymbalAudio = new Audio('./drum-sounds/cymbal.wav');
const leftCymbalAudio = new Audio('./drum-sounds/closed-cymbal.wav');
const buttonPushed = new Audio('./drum-sounds/button-push.wav');

// selecting the hitbox DOM elements
const hitboxSnare = document.getElementById("hitbox-snare");
const hitboxLeftTom = document.getElementById("hitbox-left-tom");
const hitboxRightTom = document.getElementById("hitbox-right-tom");
const hitboxKickDrum = document.getElementById("hitbox-kick-drum");
const hitboxRightCymbal = document.getElementById("hitbox-right-cymbal");
const hitboxLeftCymbal = document.getElementById("hitbox-left-cymbal");

window.onload = function() {
    
    loadingScreen();

    // This is after the user clicks start button
    startButton.addEventListener("click", function(){
        // Play the sound effect for the button pushed
        buttonPushed.play();
        
        for(var i = 0; i < 100; i++){
            simonSeq[i] = Math.ceil((Math.random() * 6));
        }
        console.log(simonSeq);

        // Remove the overlay with instructions etc.
        setTimeout(() => {
            drumOverlay.classList.remove("show");
            drumOverlay.classList.add("fade-out");
            setTimeout(() => {
                drumOverlay.classList.add("hide");
                score.classList.remove("hide");
                score.classList.add("show");
                score.classList.add("fade-in");
            }, 900);
        }, 500);

        // Remove the start button and show the transparent div that prevents user clicks
        setTimeout(() => {
            startButton.classList.add("fade-out");
            setTimeout(() => {
                startButton.classList.remove("show");
                startButton.classList.add("hide");
            }, 900);
            
        }, 500);
        startSequence();
        
        userPlays();



        // For debugging only
        console.log(count, j);
    })




};

// Function made for playing the intro drum sequence, tried to do badum tss, eh close enough :)
function introSequence(){
    // Variables for interval and index for the array
    var onIntro = 500;
    var offIntro = 100;
    var index = 0;

    // Animating the drum set
    var a = setInterval(function() {
        if(introSeq[index] == 2){
            leftTom.classList.add("animate--beat");
            playAudio(leftTomAudio);
            setTimeout(function() {
                leftTom.classList.remove("animate--beat");
            }, offIntro);
        }
        if(introSeq[index] == 3){
            rightTom.classList.add("animate--beat");
            playAudio(rightTomAudio);
            setTimeout(function() {
                rightTom.classList.remove("animate--beat");
            }, offIntro);
        }
        if(introSeq[index] == 5){
            rightCymbal.classList.add("animate--beat");
            playAudio(rightCymbalAudio);
            setTimeout(function() {
                rightCymbal.classList.remove("animate--beat");
            }, 1000);
        }
        index++;
        // When it gets to the end of the array clear interval, enable the start button and show overlay
        if(index === introSeq.length){
            clearInterval(a);
            startButton.classList.remove("disable-click");
            startButton.classList.add("enable-click");
            setTimeout(() => {
                drumOverlay.classList.remove("hide");
                drumOverlay.classList.add("show");
                drumOverlay.classList.add("fade-in");
            }, 500);

            index = 0;
        }
    }, onIntro)
}

function loadingScreen(){
    // At the start don't show the transparent div that is used to prevent user clicking the drums while the sequence is playing
    disableClick.classList.add("show");
    // Call the function which draws the start screen
    startScreen();
    // Intro drum sequence
    setTimeout(() => {
        introSequence();
    }, 2200);
}

// Show the whole drum container 
function startScreen() {
    setTimeout(() => {
        overlay.classList.add('hide');
        drumContainer.classList.add('fade-in');
    }, 1800);
    setTimeout(() => {
        drumContainer.classList.remove('hide');
        drumContainer.classList.add('show');
    }, 1900);
}

// Function for playing audio
function playAudio(source) {
    setTimeout(function(){
        source.play();
        setTimeout(function(){
            source.pause();
            source.currentTime = 0;
        }, 900)
    }, 100);
}

// Going through the sequence
function startSequence() {
    console.log("Inside of start sequence, simonseq: " + simonSeq);
    disableClick.classList.remove("hide");
    disableClick.classList.add("show");
    // set interval length
    if(count <= 10){
        off = 800;
        on = 1600;
    }
    else {
        off = 500;
        on = 1000;
    }
    // Interval
    x = setInterval(function () {
        if(simonSeq[j] == 1){
            snareDrum.classList.add("animate--beat");
            console.log("Inside of snare drum");
            
            playAudio(snareDrumAudio);
            playedID.push(1);
            setTimeout(function() {
                snareDrum.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 2) {
            leftTom.classList.add("animate--beat");
            console.log("Inside of left tom drum");
            playAudio(leftTomAudio);
            playedID.push(2);
            setTimeout(function() {
                leftTom.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 3) {
            rightTom.classList.add("animate--beat");
            console.log("Inside of right tom drum");
            playAudio(rightTomAudio);
            playedID.push(3);
            setTimeout(function() {
                rightTom.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 4) {
            kickDrum.classList.add("animate--beat");
            console.log("Inside of kick drum");
            playAudio(kickDrumAudio);
            playedID.push(4);
            setTimeout(function() {
                kickDrum.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 5) {
            rightCymbal.classList.add("cymbal-shake");
            console.log("Inside of open cymbal");
            playAudio(rightCymbalAudio);
            playedID.push(5);
            setTimeout(function() {
                rightCymbal.classList.remove("cymbal-shake");
            }, off);
        }
        else if(simonSeq[j] == 6) {
            leftCymbal.classList.add("move-cymbal-down");
            leftCymbalTop.classList.add("move-cymbal-down");
            console.log("Inside of closed cymbal");
            playAudio(leftCymbalAudio);
            playedID.push(6);
            setTimeout(function() {
                leftCymbal.classList.remove("move-cymbal-down");
                leftCymbalTop.classList.remove("move-cymbal-down");
            }, off);
        }
        j++;
        // debugging
        console.log("This is the: " + j + "nth time throught the interval");
        console.log("PlayedID: " + playedID);
        // Check if at the end of the array and reset j
        if(j >= count){
            clearInterval(x);
            setTimeout(() => {
                disableClick.classList.remove("show");
                disableClick.classList.add("hide");
            }, 1000);
        }

    }, on);
}

// function that checks for user input
function userPlays(){

    // Check if the hitbox was clicked
    hitboxSnare.addEventListener("click", function(){
        // Push the id to the userSeq array
        userSeq.push(1);
        // Playing the audio for the drum
        playAudio(snareDrumAudio);
        // Add animation class
        snareDrum.classList.add("animate--beat");
        // setTimeout removes the animation class after .8 seconds
        setTimeout(function() {
            snareDrum.classList.remove("animate--beat");
        }, 800);
        // run the check function
        checking();
    });

    hitboxLeftTom.addEventListener("click", function(){
        userSeq.push(2);
        playAudio(leftTomAudio);
        leftTom.classList.add("animate--beat");
        setTimeout(function() {
            leftTom.classList.remove("animate--beat");
        }, 800);
        checking();
    });

    hitboxRightTom.addEventListener("click", function(){
        userSeq.push(3);
        playAudio(rightTomAudio);
        rightTom.classList.add("animate--beat");
        setTimeout(function() {
            rightTom.classList.remove("animate--beat");
        }, 800);
        checking();
    });

    hitboxKickDrum.addEventListener("click", function(){
        userSeq.push(4);
        playAudio(kickDrumAudio);
        kickDrum.classList.add("animate--beat");
        setTimeout(function() {
            kickDrum.classList.remove("animate--beat");
        }, 800);
        checking();
    });

    hitboxRightCymbal.addEventListener("click", function(){
        userSeq.push(5);
        playAudio(rightCymbalAudio);
        rightCymbal.classList.add("animate--beat");
        setTimeout(function() {
            rightCymbal.classList.remove("animate--beat");
        }, 800);
        checking();
    });

    hitboxLeftCymbal.addEventListener("click", function(){
        userSeq.push(6);
        playAudio(leftCymbalAudio);
        leftCymbal.classList.add("move-cymbal-down");
        leftCymbalTop.classList.add("move-cymbal-down");
        setTimeout(function() {
            leftCymbal.classList.remove("move-cymbal-down");
            leftCymbalTop.classList.remove("move-cymbal-down");
        }, 800);
        checking();
    });

}

// Checking the user input if it matches the one played by the computer
function checking(){
    disableClick.classList.remove("hide");
    disableClick.classList.add("show");
    userClickNum++;
    if(userSeq.length == playedID.length){

            if(userSeq.join() == playedID.join()){

                if(count === 100){

                    alert("you win");

                } else {
                    console.log("Inside of the first if statement, inside of else. Vars are: " + 
                        "User clicked time is: " + userClickNum + " " + 
                        "Played id are: " + playedID + 
                        "user clicked drums are: " + userSeq +
                        "Count is: " + count +
                        "j is: " + j
                    );
                    score.innerText = "Score: " + count;
                    count++;
                    playedID = [];
                    userSeq = [];
                    j = 0;
                    userClickNum = -1;
                    startSequence();
                    return;
                }
            } else {
                console.log("Inside of the else first fail statement. Vars are:  " +
                    "User clicked time is: " + userClickNum + " " + 
                    "Played id are: " + playedID + 
                    "user clicked drums are: " + userSeq +
                    "Count is: " + count +
                    "j is: " + j
                )
                disableClick.classList.remove("show");
                disableClick.classList.add("hide");

                playedID = [];
                userSeq = [];
                j = 0;
                userClickNum = -1;


                setTimeout(() => {
                    failScreen.classList.add('fade-in');
                    failScreen.classList.remove('hide');
                    failScreen.classList.add('show');
                    buttonsFailEnable();
                }, 500);
            }

    } else if(userSeq[userClickNum] == playedID[userClickNum]){
        console.log("Inside of the second else if statement. Vars are: " + 
            "User clicked time is: " + userClickNum + " " + 
            "Played id are: " + playedID + 
            "user clicked drums are: " + userSeq +
            "Count is: " + count +
            "j is: " + j
        )
        if(userClickNum == playedID.length - 1){
            userClickNum = -1;
        }
        setTimeout(() => {
            disableClick.classList.remove("show");
            disableClick.classList.add("hide");
        }, 1000);
        return;

    } else {
        console.log("Inside of the else for fail statement. Vars are:  " +
            "User clicked time is: " + userClickNum + " " + 
            "Played id are: " + playedID + 
            "user clicked drums are: " + userSeq +
            "Count is: " + count +
            "j is: " + j
        )
        disableClick.classList.remove("show");
        disableClick.classList.add("hide");

        playedID = [];
        userSeq = [];
        j = 0;
        userClickNum = -1;


        setTimeout(() => {
            failScreen.classList.add('fade-in');
            failScreen.classList.remove('hide');
            failScreen.classList.add('show');
            buttonsFailEnable();
        }, 500);
    }

    /*
    // Check if the length of the playedID and user clicked (userSeq) is the same.
    if(playedID.length === userSeq.length){
        // Check if playedID and user clicked ID are the same
        if(playedID.join() === userSeq.join()){
            // Play next round
            setTimeout(function(){
                // Display and update the score
                score.innerText = "Score: " + count;
                count++;
                // reset both arrays
                playedID = [];
                userSeq = [];
                j = 0;
                simonSeq.push(drumNumber);
                startSequence();

            });
        }

    }

    */
}

// Enable the buttons on fail screen and do stuff
function buttonsFailEnable(){
    tryAgainbutton.addEventListener("click", function(){
        tryAgain();
    });

    quitButton.addEventListener("click", function(){
        location.reload();
    })
}

function tryAgain(){
    console.log("Inside of try again");
    // Remove the fail screen
    failScreen.classList.remove("show");
    failScreen.classList.add("hide");

    // reset all variables
    userSeq = [];
    simonSeq = [];
    playedID = [];
    on;
    off;
    j = 0;
    count= 1;
    userClickNum = -1;

    for(var i = 0; i < 100; i++){
        simonSeq[i] = Math.ceil((Math.random() * 6));
    }

    console.log(simonSeq);

    startSequence();


}

// Animation functions when hovering the drums
function sizeUp(x){
    checkDrum(x.attributes.name.nodeValue);
}

function sizeDown(x){
    normalizeDrum(x.attributes.name.nodeValue);
}

function checkDrum(drum){
    if(drum === 'snare'){
        snareDrum.classList.remove('normalize-scale');
        snareDrum.classList.remove('scale-up');
        snareDrum.classList.add('scale-up'); 
    } else if(drum === 'left-tom'){
        leftTom.classList.remove('normalize-scale');
        leftTom.classList.remove('scale-up');
        leftTom.classList.add('scale-up'); 
    } else if(drum === 'right-tom'){
        rightTom.classList.remove('normalize-scale');
        rightTom.classList.remove('scale-up');
        rightTom.classList.add('scale-up'); 
    } else if(drum === 'kick-drum'){
        kickDrum.classList.remove('normalize-scale');
        kickDrum.classList.remove('scale-up');
        kickDrum.classList.add('scale-up'); 
    } else if(drum === 'right-cymbal'){
        rightCymbal.classList.add("cymbal-shake");
        setTimeout(function() {
            rightCymbal.classList.remove("cymbal-shake");
        }, 800);
    } else if(drum === 'left-cymbal'){
        leftCymbal.classList.add("move-cymbal-down");
        leftCymbalTop.classList.add("move-cymbal-down");
        setTimeout(function() {
            leftCymbal.classList.remove("move-cymbal-down");
            leftCymbalTop.classList.remove("move-cymbal-down");
        }, 800);
    }
}

function normalizeDrum(drum){
    if(drum === 'snare'){
        snareDrum.classList.remove('normalize-scale');
        snareDrum.classList.remove('scale-up');
        snareDrum.classList.add('normalize-scale'); 
    } else if(drum === 'left-tom'){
        leftTom.classList.remove('normalize-scale');
        leftTom.classList.remove('scale-up');
        leftTom.classList.add('normalize-scale'); 
    } else if(drum === 'right-tom'){
        rightTom.classList.remove('normalize-scale');
        rightTom.classList.remove('scale-up');
        rightTom.classList.add('normalize-scale'); 
    } else if(drum === 'kick-drum'){
        kickDrum.classList.remove('normalize-scale');
        kickDrum.classList.remove('scale-up');
        kickDrum.classList.add('normalize-scale'); 
    } else if(drum === 'right-cymbal'){
        rightCymbal.classList.add("cymbal-shake");
        setTimeout(function() {
            rightCymbal.classList.remove("cymbal-shake");
        }, 800);
    } else if(drum === 'left-cymbal'){ 
        leftCymbal.classList.add("move-cymbal-down");
        leftCymbalTop.classList.add("move-cymbal-down");
        
        setTimeout(function() {
            leftCymbal.classList.remove("move-cymbal-down");
            leftCymbalTop.classList.remove("move-cymbal-down");
        }, 800);
    }
}