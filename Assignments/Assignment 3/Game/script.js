data = [ {"word":"అమ్మ ","syllable":1} ,{"word":"వావ్","syllable":2 },{"word":"సహాయం","syllable": 2},{"word":"గుడ్డు" ,"syllable":2},{"word":"ముఖం" ,"syllable":2},{"word":"ఆలయం","syllable":3},{"word":"నడిచి ","syllable":3},{"word":"ఫలితం","syllable":3},{"word":"సమాధానం","syllable":4},{"word":"సంతోషంగా","syllable":4},{"word":"మార్చు","syllable":2},{"word":"తెలుగు","syllable":3},{"word":"ప్రేమ","syllable":2},{"word":"సినిమా","syllable":3},{"word":"నవ్వు","syllable":2},{"word":"స్నేహితుడు","syllable":4},{"word":"ఏమీ","syllable":2},{"word":"వచ్చిన","syllable":3}];
random_number = -1
function generaterandom()
{
     num = Math.floor(Math.random()*(data).length);
     console.log(num);
     document.getElementById("demo").innerHTML = data[num].word;
     random_number = num;
}

score =0;
function Check(value)
{
   if(data[random_number].syllable == value )
  {
    console.log("You got a point");
    document.getElementById("Result").innerHTML = "హుర్రే   ఒక  పాయింట్";
    score=score+1;
    document.getElementById("Points").innerHTML ="వినియోగదారు   స్కోరు"+":"+ score;
  }
   else
  {
    console.log("Ooops!!!");
    document.getElementById("Result").innerHTML = "ఓరి  దేవుడా !";
  }
}



