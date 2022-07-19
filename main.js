

var choice=document.getElementsByClassName("image")
var com=0
function comfind(choice){


for(var i in choice)
{
    console.log(i)
   if( choice[i].addEventListener("click",function ()
    {
        com=i
        if(i==0)
        {
            
            console.log("you click paper")
            return i
        }
        if(i==1)
        {console.log("you click rock")}
        if(i==2)
        {console.log("you click scissor")}
    }))
    {
        console.log("pressed")
    }
    
}
}
