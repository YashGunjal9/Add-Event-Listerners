// ---- Mouse Event ----

// ---- Single Click Event ----
function addEvent() {
  console.log("Click event is called");
  
}
document.getElementById("clickButton").onclick = function ClickHandler() {
  //  console.log("Click event is called");
};

// ---- Double Click Event ----
document.getElementById("doubleClickButton").ondblclick =
  function dbClickHandler() {
    // console.log("dbClickHandler event is called");
  };

// ---- On Mouse Over ----
document.getElementById("hoverDiv").onmouseover =
  function onMouseOverHandler() {
    // console.log("onMouseOverHandler event is called");
  };

// ---- On Mouse Out ----
document.getElementById("hoverDiv").onmouseout = function onMouseOverHandler() {
  // console.log("onMouseOverHandler event is called");
};

// ---- Keyboard Event ----

// ---- On key Down ----
document.getElementById("keyInput").onkeydown = function onkeydownHandler() {
  console.log("onkeydownHandler event is called");
};

// ---- On key Up ----
document.getElementById("keyInput").onkeyup = function onkeyupHandler() {
  // console.log("onkeyupHandler event is called");
};

// ---- On key press ----
document.getElementById("keyInput").onkeypress = function onkeypressHandler() {
  // console.log("onkeypressHandler event is called");
};

// ---- Form Events ----

document.getElementById("myForm").onsubmit = function onsubmitHandler() {
  // console.log("onsubmitHandler event is called");
};

document.getElementById("formInput").addEventListener("blur", function () {
  console.log("onfocusHandler event is called");
})
  


document.getElementById("formInput").onblur = function onblurHandler() {
  // console.log("onblurHandler event is called");
};

// document.getElementById("formInput").onblur = function onblurHandler() {
//   console.log("onblurHandler event is called");
// }; 