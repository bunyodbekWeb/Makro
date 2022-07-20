



const users = JSON.parse(localStorage.getItem("users"));
const user = JSON.parse(localStorage.getItem("name"));

function login() {
  if( JSON.parse(localStorage.getItem("users"))){
  const username = document.getElementById("username").value;
  const password = document.getElementById("psw").value;
  const para = document.querySelector(".error-message");
  if (username === "admin" && password == 7777) {
    window.location.href = "./Admin/test.html";
  } else {
    const login1 = users.find((user) => {
      return username === user.user && password === user.passw;
    });
    if (login1) {
      sessionStorage.setItem("ism", login1.ism);
  
      localStorage.setItem("foydalanuchi", JSON.stringify(user));
      window.location.href = "./makro-1.html";
    } else {
      display = "block";
      // window.location.href = "registration.html"
      document.querySelector(".error-message").style.display = "block";
    }
  }
}else{
  document.querySelector(".error-message").style.display = "block";
}
  
}


document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
