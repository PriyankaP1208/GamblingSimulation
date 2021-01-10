class GamblingSimulation
{
   GamblingSimulation=()=>
   {
       const STAKE=100;
       const BET=1;
       let bet=Math.floor(Math.random()*2)+1;
       if(bet==1)
       {
           console.log("Win");
       }
       else
       {
           console.log("Loose")
       }
   }
}
module.exports=new GamblingSimulation();