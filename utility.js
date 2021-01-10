class GamblingSimulation
{
   GamblingSimulation=()=>
   {
       const STAKE=100;
       const BET=1;
       let money=STAKE;
       let i=BET;
       let luck=Math.floor(Math.random()*2)+1;
       if(luck==1)
       {
           console.log("Win");
           money=money+i;
           money=money/2;
       }
       else
       {
           console.log("Loose")
           money=money-i;
           money=money/2;
       }
   }
}
module.exports=new GamblingSimulation();