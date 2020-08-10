function calcAdd(a, b) {
  var a = parseInt(document.querySelector("#first").value);
  var b = parseInt(document.querySelector("#second").value);
  var c = a + b;
  var bb = document.querySelector("#third");
  bb.innerHTML = "The sum of the two numbers is : " + c;
  return c;
}
