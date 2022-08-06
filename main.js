


var choice=document.getElementsByClassName("image")
var com=0
let inp=document.getElementById("userinpspan")
let cominp=document.getElementById("compinpspan")
let op=document.getElementById("opspan")
var output=""
var btn=document.querySelector("button")
for(let i in choice)
{
    
  choice[i].onclick=function ()
    {
        //console.log(choice[i])
        
       
        //userinp=
        inp.innerHTML=findwhatval(i)
        
        var randomnum=Math.floor(Math.random()*3)
        console.log(i)
        console.log(randomnum)
        
        cominp.innerHTML=findwhatval(randomnum)
        
        if(i==randomnum)
        {
            console.log("draw")
            output="draw"
           // window.location.reload()
            
        }
        else
        probabilityofwin(i,randomnum)
        op.innerHTML=output
    
    
    }
    
    
}
btn.onclick=function()
{
    window.location.reload()
}

function findwhatval(val)
{
    if(val==0)
    return "Rock"
    else if(val==1)
    return "Paper"
    else
    return "Scissors"
}
function probabilityofwin(user,computer)
{
    console.clear()
    if((user==0&& computer==2) || (user==1 &&computer==0)||(user==2 && computer==1))
    {
       
        console.log("you won")
        output="you won"
    }
    else
    {
        console.log("computer won")
        output="computer won"
    }
}