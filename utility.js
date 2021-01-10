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
        var array1=[];
        var array2=[];
        while(days<20)
        {
            let luck=Math.floor(Math.random()*2)+1;
            if(luck==1)
            {
                console.log("Win");
                money=money+i;
                totalWin=totalWin+(money/2);
                money=money+(money/2);
                array1.push(money);
                //console.log("win",array1);
            }
            else
            {
                console.log("Loose")
                money=money-i;
                totalLoss=totalLoss+(money/2);
                money=money/2;
                array2.push(money);
                //console.log("Lost",array2);
            }
            days++;
        }
        console.log(array1);
        console.log(array2);
        let luckiest=array1[0];
        console.log("Total win:",totalWin);
        console.log("Total loss:",totalLoss);
        for (let i = 1; i < array1.length; i++) {
            if (array1[i] > luckiest) {
              luckiest = array1[i];
            }
        }
        console.log(luckiest);
        let unlukiest = array2[0];
        for (let i = 1; i < array2.length; ++i) {
            if (array2[i] < unlukiest) {
                unlukiest = array2[i];
            }
        }
        console.log(unlukiest);
        
    }
}
module.exports=new GamblingSimulation();