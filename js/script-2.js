var redElement = document.getElementById('redBtn');
    redElement.onclick = function(){
      var divElement = document.getElementById('divOne');
        divElement.style.backgroundColor = 'red';
    };

var greenElement = document.getElementById('greenBtn');
    greenElement.onclick = function(){
        var divElement = document.getElementById('divOne');
            divElement.style.backgroundColor = 'green';
    };
    
var blueElement = document.getElementById('blueBtn');
    blueElement.onclick = function(){
      var  divElement = document.getElementById('divOne');
        divElement.style.backgroundColor = 'blue';
    };

var defaultElement = document.getElementById('defaultBtn');
    defaultElement.onclick = function(){
      var divElement = document.getElementById('divOne');
        //divElement.style.backgroundColor = 'white';
        divElement.className = 'default-class';
    };







var btnElementTwo = document.getElementById('btnTwo');
    btnElementTwo.onclick = function(){
       // alert('test');
      var startingNumberValue = document.getElementById('startingNumber').value;  
      var endingNumberValue = document.getElementById('endingNumber').value; 
      
      var res='';
      for(var x = startingNumberValue; x<=endingNumberValue; x++){
          //document.write(x+' ');
          //document.getElementById('resultTwo').value = x;
            res= res + x;
      }
      document.getElementById('resultTwo').value = res;
    };



