function removeElem() {
  var elem = document.getElementById("jsbox");
  elem.parentNode.removeChild(elem);

}



function highlightDash() {
  console.log("clicked dash!");
  var dash = document.getElementById("dash");
  console.log(dash);
  var wal = document.getElementById("wallet");
    console.log(wal);
  dash.classList.add("highlight");
  wal.classList.remove("highlight");
}

function highlightWallet() {
  var dashboard = document.getElementById("dash");
  console.log("hey!");
  var wallet = document.getElementById("wallet");
  dashboard.classList.remove("highlight");
  wallet.classList.add("highlight");
}


function changeContentToDash() {
  console.log("change content");
  var dash = document.getElementById("container2");
  if (dash.style.display === "none") {
    dash.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function changeContentToWallet() {
  console.log("change content2");
  var wallet = document.getElementById("container1");
  console.log(wallet);
  if (wallet.style.display == "none"){
    wallet.style.display = "block";
  } else {
    wallet.style.display = "none";
  }
}
// function changeContentWallet() {
//   console.log("change content 2");
//     console.log(document.getElementById("container1").innerHTML);
//   document.getElementById("container1").innerHTML = document.getElementById("container2");
// }
// document.getElementById("wallet").addEventListener("click", changeContentDash())

// document.getElementById("dash").addEventListener("click", changeContentWallet())
// document.getElementById("dash").addEventListener("click", highlightDash())
