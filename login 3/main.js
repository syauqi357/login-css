function showPwd() {
    var x = document.getElementById("showPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }