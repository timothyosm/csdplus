document.querySelector("#submit").addEventListener("click", setData);

function highlight(div) {
  if (
    document.querySelector(div).value == "" ||
    document.querySelector(div).value == null
  ) {
    document.documentElement.scrollTop = 0;
    document.querySelector(div).style.background = "#FF6961";
  } else {
    document.documentElement.scrollTop = 0;
    document.querySelector(div).style.background = "white";
  }
}

function setData() {
  let CONV = document.querySelector("#cOn").value;
  let ANV = document.querySelector("#aN").value;
  let RDV = document.querySelector("#rD").value;
  let SVV = document.querySelector("#Version").value;
  let OSVV = document.querySelector("#VersionOther").value;
  let LUPV = document.querySelector("#lUP").value;
  let MUIV = document.querySelector("#uI").value;
  let LINKV = document.querySelector("#link").value;
  let ENVV = document.querySelector("#env").value;
  let YESV = document.querySelector("#y").value;
  let NOV = document.querySelector("#n").value;
  let QAVSV = document.querySelector("#qVS").value;
  let TITLEV = document.querySelector("#Title").value;
  let DESCV = document.querySelector("#Description").value;
  let SINFOV = document.querySelector("#SystemInfo").value;
  let EOV = document.querySelector("#expected").value;
  let AOV = document.querySelector("#actual").value;

  highlight("#cOn");
  highlight("#aN");
  highlight("#rD");
  highlight("#Version");
  highlight("#lUP");
  highlight("#uI");
  highlight("#link");
  highlight("#env");
  highlight("#qVS");
  highlight("#Title");
  highlight("#Description");
  highlight("#SystemInfo");
  highlight("#expected");
  highlight("#actual");

  document.querySelector("#CONL").innerHTML = CONV;
  document.querySelector("#ANL").innerHTML = ANV;
  document.querySelector("#RDL").innerHTML = RDV;
  document.querySelector("#SVL").innerHTML = SVV;
  document.querySelector("#OSVL").innerHTML = OSVV;
  document.querySelector("#LUPL").innerHTML = LUPV;
  document.querySelector("#MUIL").innerHTML = MUIV;
  document.querySelector("#LINKL").innerHTML = LINKV;
  document.querySelector("#ENVL").innerHTML = ENVV;
  document.querySelector("#YESL").innerHTML = YESV;
  document.querySelector("#NOL").innerHTML = NOV;
  document.querySelector("#QAVSL").innerHTML = QAVSV;
  document.querySelector("#TITLEL").innerHTML = TITLEV;
  document.querySelector("#DESCL").innerHTML = DESCV;
  document.querySelector("#SINFOL").innerHTML = SINFOV;
  document.querySelector("#EOL").innerHTML = EOV;
  document.querySelector("#AOL").innerHTML = AOV;
}