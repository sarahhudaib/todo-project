'use strict';

var username = prompt("What is your name?");

var gender = prompt('What is your gender?');

if (gender.toLocaleLowerCase()=='male') {
    alert('THANKS, his gender is male');

}else if (gender.toLocaleLowerCase()=='female'){
    alert('THANKS, her gender is female');

}else{
    alert('ERROR');
    var gender = prompt('What is your gender? MALE/FEMALE');
};

var age = prompt('What is your age?');

if (age<=0) {
    alert('ERROR');
    var gender = prompt('your age should be > 0');
}else 
alert('THANKS, his/her age is: '+age);

var welcoming = prompt("Do you want to skip the welcoming message?");
if (welcoming=='yes') {
    var result = confirm('are you Sure');
console.log('Confirm result is : ', result);

}else if (gender=='male'){
  var x='Hello Mr. ' + username + ' ! How are you today?';
  alert(x)
}else if (gender=='female'){
    var x='Hello Ms. ' + username + ' ! How are you today?';
    alert(x)
}else {var x='Hello' + username + ' ! How are you today?';
alert(x)
}


var hungry = prompt("are you hungry?");
if (hungry=='yes') {
console.log('ramen time');
}else if (hungry=='no'){
    var thursty = confirm('are you thursty?');
    if (thursty==yes){
    console.log('pepsi time');
}else if (thursty=='no'){
    alert('buy?');
    
}else if (result==' '){
    alert('INVALID?');

}
}

var data = [hungry,thursty];
console.log(data)
