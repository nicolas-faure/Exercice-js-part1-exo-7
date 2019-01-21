function getSee() {
  var shoeSize =document.getElementById("shoeSize").value;
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  var result =((((shoeSize*2)+5)*50)-yearOfBirth)+1766;
    if (isNaN(shoeSize)== false && isNaN(yearOfBirth)==false){
    alert('Resultat :'+result);
  }else {
    alert("QUE DES chiffres BOULET !!");
  }
}
