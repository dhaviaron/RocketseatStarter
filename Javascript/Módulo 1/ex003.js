var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
  var resultado =  skills.indexOf('Javascript');

  if (resultado >= 0){
      return true;
  } else {
        return false;
  } 
}

console.log(temHabilidade(skills)); 