let result=document.getElementById("result")
//数字ボタン
function clicknumber(target){
  let resultnum=target.innerHTML;
if(result.innerHTML==="00"){
  result.innerHTML="0"
}
if (result.innerHTML==="0"){
  result.innerHTML=resultnum
}
else{
  result.innerHTML+=target.innerHTML
}}
//ACボタン
function clickAC(target){
 result.innerHTML="0";
  }
//=ボタン
function clickresult(target){
    result.innerHTML=eval(result.innerHTML)
  }
//記号ボタン
  function clickcal(target){
  if (result.innerHTML.slice(-1)=="+"){
    result.innerHTML=result.innerHTML.slice(0,-1)}
    if (result.innerHTML.slice(-1)=="-"){
      result.innerHTML=result.innerHTML.slice(0,-1)}
      if (result.innerHTML.slice(-1)=="*"){
        result.innerHTML=result.innerHTML.slice(0,-1)}
        if (result.innerHTML.slice(-1)=="/"){
          result.innerHTML=result.innerHTML.slice(0,-1)}
      else{
      result.innerHTML+=target.innerHTML}
  }
