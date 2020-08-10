function calc(a, b, d) {
  var a = parseInt(document.querySelector("#first").value);
  var b = parseInt(document.querySelector("#second").value);
  var d = document.querySelector("#operator").value;
  var bb = document.querySelector("#third");

  switch (d) {
    case "+":
      var c = a + b;
      bb.innerHTML = "The sum of the two numbers is : " + c;
      return c;
      break;

    case "-":
      var c = a - b;
      bb.innerHTML = "The difference of the two numbers is : " + c;
      return c;
      break;

    case "/":
      var c = a / b;
      bb.innerHTML = "The division of the two numbers yields : " + c;
      return c;
      break;

    case "*":
      var c = a * b;
      bb.innerHTML = "The multiplication of the two numbers is : " + c;
      return c;
      break;
  }
}
