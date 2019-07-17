var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bar-ice.jpg') {
      myImage.setAttribute ('src','images/bar-glass.jpg');
    } else {
      myImage.setAttribute ('src','images/bar-ice.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcom to bar, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcom to bar, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
