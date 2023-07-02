var gamePattern=[]
var level=0;
var i=0;
var buttonColours=["red", "blue", "green", "yellow"]
var userClickedPattern=[]
function nextSequence(){
    level+=1;
    i=0;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);
    
}


// nextSequence();

$(".btn").click(function(event){
    if (level>0){
    var userChosenColor=event.target.id;
    // console.log(event.target);
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    if(i<gamePattern.length){
        if(gamePattern[i]===userClickedPattern[i]){
            console.log("equality checked")
            i+=1
        }
        else{
            $("h1").text("Game over, Press Any Key to Restart");
            $("body").addClass("game-over");
            playsound("wrong");
            setTimeout(function(){
            $("body").removeClass("game-over");  
            },100);
            $(document).keypress(function(){
                location.reload(true);
            })
        }
    }
    if(i===gamePattern.length){
        userClickedPattern=[];
        setTimeout(function(){nextSequence();},1000);
        
    }
     

    
    }
});

// console.log(userClickedPattern);


function playsound(color){
            var aud=new Audio("sounds/"+color+".mp3");
            aud.play();
}

function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){$("#"+color).removeClass("pressed");},100);
}

$(document).keypress(function(event){
        if (level===0){nextSequence();}
                
});


