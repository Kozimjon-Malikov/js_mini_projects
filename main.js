const fname = document.querySelector("form #fname"),
  age = document.querySelector("form #fage"),
  isMerried = document.querySelector("form #isMerried"),
  info = document.querySelector("#info"),
  btnSuccess = document.querySelector(".btn-success"),
  btnAlert = document.querySelector(".btn-alert"),
  message = document.querySelector(".message");

fname.addEventListener("input", (e) => {
  document.querySelector("#name").innerHTML = `🐱‍👤Name: ${e.target.value}`;
});
age.addEventListener("input", (e) => {
  document.querySelector("#age").innerHTML = `🙂Age:${e.target.value}`;
});
isMerried.addEventListener("input", (e) => {
  document.querySelector(
    "#merried"
  ).innerHTML = `💰 IsMerried: ${e.target.value}`;
});
btnSuccess.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.innerText = "✅ Successfully send";
});
btnAlert.addEventListener("click", (e) => {
  fname.value = "";
  age.value = "";
  isMerried.value = "";
  message.innerHTML = "👎 Unsuccessfully attempt,please try again";
});
