function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput()
{
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num==""){
    document.getElementById("output-value").innerText=num;
    }else
    
    {
    document.getElementById("output-value").innerText=getformat(num);
    }
}
function getformat(num)
{
    let n=Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseno(num)
{
    return Number(num.replace(/,/g,''))
}
let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        
        if(this.id=="clear")
        {
            printHistory("");
            printoutput("");
        }
       else if(this.id=="backspace")
        {
            let output= reverseno(getoutput()).toString();
            if(output)
            {
                output = output.substr(0,output.length-1);
                printoutput(output);
            }
        }
        else{ 
        
            let output1=getoutput();
            let history1=gethistory();
            if(output1!=""){
            
                output1 = reverseno(output1);
                history1 = history1+output1;
                if(this.id=="=")
                {
                    var result = eval(history1);
                    printoutput(result);
                    printHistory("");
                }
                else{
                    history1=history1+this.id;
                    printHistory(history1);
                    printoutput("");
                }
            }
        }
    });
}
let number = document.getElementsByClassName("number");
for(let i=0; i<number.length;i++)
{
    number[i].addEventListener('click',function(){
        let output = reverseno(getoutput());
        if(output!=NaN)
        {
            output=output+this.id;
            printoutput(output);
        }
        
    });
}
