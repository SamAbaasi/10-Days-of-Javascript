var resultScreen=document.getElementById("res");
var result=0;
var operatorsSeq="";
function clickZero()
{
    
    resultScreen.innerHTML+="0";
}
function clickOne()
{
    
    resultScreen.innerHTML+="1";
}
function clickSum()
{
    operatorSeq="+";
    result=parseInt(resultScreen.innerHTML,2);
    resultScreen.innerHTML+="+";
}
function clickSub()
{
     operatorSeq="-";
    resultScreen.innerHTML+="-";
}
function clickMul()
{
    operatorSeq="*";
     result=parseInt(resultScreen.innerHTML,2);
    resultScreen.innerHTML+="*";
}
function clickDiv()
{
     operatorSeq="/";
    resultScreen.innerHTML+="/";
}
function clickEql()
{
    var ans=0;
   
  if(operatorSeq=='+')
      {
           var i =(resultScreen.innerHTML).indexOf("+");
   
         var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
          ans =result+operand2;
      }
    else if(operatorSeq=='-')
    
    {
        var i =(resultScreen.innerHTML).indexOf("-");
        var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
        ans =result-operand2;
    }
    
    else if(operatorSeq=='*')
    
    {
        var i =(resultScreen.innerHTML).indexOf("*");
        var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
        ans =result*operand2;
    }
    else if(operatorSeq=='/')
    
    {
        var i =(resultScreen.innerHTML).indexOf("/");
        var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
        ans =result/operand2;
    }
    
   
    resultScreen.innerHTML=ans.toString(2);
}
function clickClear()
{
    resultScreen.innerHTML="";
    
}
