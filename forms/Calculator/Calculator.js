Function addTwo(n1,n2) {
  Let answer = n1 + n2
  return answer
  }
  
Function multiplyTwo(n1,n2) {
  Let answer = n1 * n2
  return answer
  }
  


btnAdd.onclick=Function(){
  Let num1 = Number(inptNum1.value)
  Let num2 = Number(inptNum2.value)
  names = inptName.value
  lblCalculator.value = names + ", the answer is " + addTwo(num1,num2)
}


btnMultiply.onclick=Function(){
  Let num1 = Number(inptNum1.value)
  Let num2 = Number(inptNum2.value)
  names = inptName.value
  lblCalculator.value = names + ", the answer is " + multiplyTwo(num1,num2)
}



btnReset.onclick=Function(){
  lblCalculator.value = ""
  inptNum1.value = ""
  inptNum2.value = ""
}