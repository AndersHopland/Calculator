var keys = document.querySelectorAll("#calculator span");
var operators = ["+", "-", "*", "/"];

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector(".window");
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    var decimalAdded = false;
    if (btnVal == "C") {
      input.innerHTML = "";
      decimalAdded = false;
    }
    else if (btnVal == "=") {
      var equation = inputVal;
      input.innerHTML = eval(equation);
    }
    else if(inputVal.length === 1 && inputVal == "+") {
      input.innerHTML = "";
    }
    else if(inputVal.length === 1 && inputVal == "-") {
      input.innerHTML = "";
    }
    else if(inputVal.length === 1 && inputVal == "*") {
      input.innerHTML = "";
    }
    else if(inputVal == undefined && inputVal == "/") {
      input.innerHTML = "";
    }
    else {
      input.innerHTML += btnVal;
    }
  }
}
