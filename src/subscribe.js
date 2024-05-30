/*
const subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener("click", () => {
  fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
});
*/
