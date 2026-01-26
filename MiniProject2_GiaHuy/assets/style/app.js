// AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Parallax
  window.addEventListener("scroll", () => {
    const p = document.querySelector(".parallax");
    if (p) p.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
  
  // Tabs
  function openTab() {
    document.querySelector(".tab").classList.toggle("active");
  }
  
  // FORM
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const btn = document.getElementById("submitBtn");
  const toast = document.getElementById("toast");
  
  nameInput?.addEventListener("input", () => {
    nameInput.style.borderColor =
      nameInput.value.length < 3 ? "#ef4444" : "#22c55e";
  });
  
  form?.addEventListener("submit", e => {
    e.preventDefault();
    btn.innerText = "Loading...";
    btn.disabled = true;
  
    localStorage.setItem("name", nameInput.value);
  
    setTimeout(() => {
      btn.innerText = "Send";
      btn.disabled = false;
      toast.style.display = "block";
      setTimeout(() => toast.style.display = "none", 2000);
      form.reset();
    }, 2000);
  });
  