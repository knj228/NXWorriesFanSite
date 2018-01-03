var x = document.getElementById("paak");
x.addEventListener("mouseover", mOverP);
x.addEventListener("mouseout", mOutP);
var s = document.getElementById("knx");
s.addEventListener("mouseover", mOverK);
s.addEventListener("mouseout", mOutK);
function mOverP() {
    document.getElementById("paak").src="img/Paak3.png";

}

function mOutP() {
    document.getElementById("paak").src="img/Paak.jpg";

}

function mOverK() {
  document.getElementById("knx").src="img/knx2.png";

}

function mOutK() {
  document.getElementById("knx").src="img/knx.png";

}

document.onkeydown = checkKey;

function checkKey(e) {


    if (e.keyCode == '38') {
      document.body.style.backgroundColor="#ffe6ff";
      document.body.style.color="#fff";

    }
    else if (e.keyCode == '40') {
      document.body.style.backgroundColor="#fff";
      document.body.style.color="#000";
    }
}


var vid = document.querySelector('img');

function loadAlert() {
  console.log('Pictures Loaded.');
}
vid.addEventListener('load', loadAlert, false);
