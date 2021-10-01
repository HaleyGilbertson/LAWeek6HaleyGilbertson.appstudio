Let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

Let names = ""

btnSubmit.onclick=Function(){
  names = inptName.value
  If (members.includes(names)) {
  lblName.value = names + ", you are already a member."
} Else { 
  members.push(names)
  lblName.value = names + ", you have been added to the membership roster."
  }
}


btnCalc.onclick=Function(){
  ChangeForm(Calculator)
}

