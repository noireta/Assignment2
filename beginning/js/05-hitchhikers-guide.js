
let galaxyGame = prompt("Are you ready to play the game?");
switch (galaxyGame){
    case "yes":
        alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
        let followUser = prompt("Which direction would you like to head (please enter forward, left, or right).");
        switch (followUser){
            case    "forward": 
               alert("You walk 100 yards and safely make your way out of the cave.");
              break;
            case    "left":
                alert("left: alert, Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
              break;
            case    "right":
                alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
              break;
            default: 
                alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
        }
        let askUser = prompt("Are ready to rate");
        if (askUser >= 1 && askUser <= 10){
                                                                
            if(askUser >= 6 && askUser <= 10){
                document.write("playing game again");

            }else{
                document.write("you are working hard to improve the game.");
            }
    }else{
             document.write("Thank you for playing and end the game");

        }
          break;
    
    case "No":
        alert("Thank you play again sometime");
        break;
    default:
       alert("Thank you play again sometime");
       
}

