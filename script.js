var output = 0;
function increment() {
  output = output + 1;
  document.getElementById("number").innerText = output;
}
function decrement() {
    "Your current count is:"
  output = output - 1;
  if (output < 0) {
    document.getElementById("error").innerText =
      "Error: Cannot get below 0";
    return;
  }
  document.getElementById("number").innerText = output;
}
function Clear() {
  output = 0;
  document.getElementById("number").innerText = output;
}
