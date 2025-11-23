function employeeEvaluate(){
    let productivity = Number(prompt("Rate employee productivity between 1-100"))
    let commitment   = Number(prompt("Rate employee commitment between 1-100"))
    let teamwork     = Number(prompt("Rate employee teamwork between 1-100"))


    let isFailed = false;
    function  checkFailed(productivity,commitment,teamwork){
        if(productivity<50||commitment<50||teamwork<50){
            isFailed = true;
       }
    }
    checkFailed(productivity,commitment,teamwork);

    if(
        productivity >=1 && productivity <=100 &&
        commitment   >=1 && commitment   <=100 &&
        teamwork     >=1 && teamwork     <=100 
        ){
            let performanceSum = Math.round((productivity+commitment+teamwork)/3);
            let evaluation ;

            if(isFailed ){
                evaluation = "Failed ❌, Weakness in one of the aspects";
                document.body.style.backgroundColor = "red";
            }

            else{
                if(performanceSum>=90){
                    evaluation =  "Perfect💯";
                    document.body.style.backgroundColor = "green";
                }else if(performanceSum>=75 ){
                    evaluation = "Very Good 🌟"
                }
                else if(performanceSum>=60 ){
                    evaluation = "Accepted 👍"
                }
                else if(performanceSum>=50){
                    evaluation = "Weak 😕"   
                } else {
                    evaluation = "Failed ❌";
                    document.body.style.backgroundColor = "red";
                }
            }
                document.writeln(
                `
                    <div class="container" > 
                        <div class="topContent">
                            <h2> Employee performance evaluation system </h2>
                            <h4> Enter the employee's scores to get the evaluation </h4>
                        </div>
                        <div class="boxContent">
                            <div class="items">
                                <div class="item" style="grid-area:Productivity">Productivity <b>${productivity}</b></div>
                                <div class="item" style="grid-area:Commitment">Commitment <b> ${commitment}</b></div>
                                <div class="item" style="grid-area:Teamwork">Teamwork <b>${teamwork}</b></div>
                                <div class="item" style="grid-area:Average">Average <b>${performanceSum}</b></div>
                            </div>
                            
                            <div class="result">
                                <div class="item1">
                                    <span>General Average</span>
                                    <span> ${performanceSum}</span>
                                </div>
                                <div class="item1">
                                    <span>Result </span>
                                    <span>${evaluation}</span>
                                </div>
                            </div>    
                        </div>
                    </div>
                `
                )
        }
        else{
            alert("Put between 1-100")
            employeeEvaluate();
        }
    
}
employeeEvaluate();