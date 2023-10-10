import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,3000);
    })
}

async function welcome(){
let animat=chalkAnimation.rainbow("WELCOME TO MAT NUMBER GESSING GAME");
await sleep();
animat.stop();
}
await welcome();


async function main(){
    const SystemGenerate=Math.floor(Math.random()*100);
    await inquirer.prompt([
        {
            type:"number",
            name:"UserNo",
            message:"Enter the number",
            validate:(input)=>{
                const num =parseInt(input);
                if(isNaN(num)){
                    return"Plz enter a valid number";
                }
                return true;
            },
        },
    ])
    .then(async (ans) => {
        console.log(chalk.blue("User No. ",ans.UserNo, "System No", SystemGenerate));
        if(ans.UserNo==SystemGenerate){
            console.log(chalk.green("You win"));
        }
        else{
            console.log(chalk.red("Better luck next time"));
        }
      });
}

await main();




async function Again(){
    do{
       
        var again=await inquirer.prompt([
            {
                type:"input",
                name:"ReCalculate",
                message:"Do you want to play again Press y for YES and n for NO",
            }
        ])
        if(again.ReCalculate=='y'||again.ReCalculate=='Y'||again.ReCalculate=='yes'||again.ReCalculate=='Yes'){
          await main();
        }
        else{
          return;
        }
        
        
  }while(again.ReCalculate=='y'||again.ReCalculate=='Y'||again.ReCalculate=='yes'||again.ReCalculate=='Yes');
}
await Again();
