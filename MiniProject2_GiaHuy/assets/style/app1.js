const form = document.getElementById("form");
const btn = document.getElementById("submitBtn");
const toast = document.getElementById("toast");
const nameInput = document.getElementById("name");

// Validation realtime
nameInput.addEventListener("input", () => {
  nameInput.style.borderColor =
    nameInput.value.length < 3 ? "red" : "green";
});

// Submit
form.addEventListener("submit", e => {
  e.preventDefault();

  btn.classList.add("loading");

  // Lưu localStorage
  localStorage.setItem("name", nameInput.value);

  setTimeout(() => {
    btn.classList.remove("loading");
    toast.style.display = "block";
    setTimeout(()=>toast.style.display="none",2000);
    form.reset();
  }, 2000);
});
