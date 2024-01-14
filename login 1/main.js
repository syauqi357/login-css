function showPass() {
    var x = document.getElementById("passowrdSet");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }