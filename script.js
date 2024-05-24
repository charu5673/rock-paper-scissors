let r=document.createElement("div");
        r=document.querySelector("#result");
        let rr=document.createElement("div");
        rr=document.querySelector("#rResult");
        let humanScore=0,computerScore=0;
        function getComputerChoice()
            {
                a=parseInt(Math.random()*3);
                switch(a)
                    {
                        case 1:return "rock";break;
                        case 2:return "paper";break;
                        case 0:return "scissors";break;
                        default:return "scissors";
                    }
            }
                function playRound(humanChoice,computerChoice)
                {
                    if(humanScore==5||computerScore==5)
                    {
                        r.textContent="Your score: 0  Computer score: 0";
                        rr.textContent=" ";
                        humanScore=0;
                        computerScore=0;
                        return;
                    }
                    else{
                let w=0;
                if(humanChoice=="rock")
                {
                    if(computerChoice=="scissors")
                        w=2;
                    else if(computerChoice==="paper")
                        w=1;
                }
                else if(humanChoice=="paper")
                {
                    if(computerChoice=="scissors")
                        w=1;
                    else if(computerChoice==="rock")
                        w=2;
                }
                else
                {
                    if(computerChoice=="paper")
                        w=2;
                    else if(computerChoice==="rock")
                        w=1;
                }
                if(w==0)
                    rr.textContent=("Draw!");
                else if(w==1)
                {
                    rr.textContent=("You lose! "+computerChoice+" beats "+humanChoice+"!");
                    computerScore++;
                    r.textContent="Your score: "+humanScore+"  Computer score: "+computerScore;
                }
                else
                {
                    rr.textContent=("You win! "+humanChoice+" beats "+computerChoice+"!");
                    humanScore++;
                    r.textContent="Your score: "+humanScore+"  Computer score: "+computerScore;
                }
                check();
            }
                }
                function check()
                {
                    if(humanScore==5)
                    {
                        r.textContent="You won! Click any button to reset!";
                    }
                    else if(computerScore==5)
                    {
                        r.textContent="You lost! Click any button to reset!";
                    }
                }