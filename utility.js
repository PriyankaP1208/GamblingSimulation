class GamblingSimulation
{
    GamblingSimulation=()=>
    {
        const STAKE=100;
        const BET=1;
        let money=STAKE;
        let i=BET;
        let days=0;
        let totalWin=0;
        let totalLoss=0;
        while(days<20)
        {
            let luck=Math.floor(Math.random()*2)+1;
            if(luck==1)
            {
                console.log("Win");
                money=money+i;
                totalWin=totalWin+(money/2);
                money=money+(money/2);
                console.log("Won","day",days,"By->",money);
            }
            else
            {
                console.log("Loose")
                money=money-i;
                totalLoss=totalLoss+(money/2);
                money=money/2;
                console.log("Lost","day",days,"By->",money);
            }
            days++;
        }
        console.log("Total win:",totalWin);
        console.log("Total loss:",totalLoss);
    }
}
module.exports=new GamblingSimulation();