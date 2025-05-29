const logo = document.querySelector(".logo");

document.getElementById("lucky").addEventListener("click", function () {
  logo.classList.add("fade-out");

  setTimeout(() => {
    logo.src = "oddity-1.jpeg";
    logo.alt = "Oddity 1";

    logo.classList.remove("fade-out");
    logo.classList.add("fade-in");

    setTimeout(() => {
      logo.classList.remove("fade-in");
    }, 300);
  }, 300); 
});

document.querySelectorAll("button")[0].addEventListener("click", function () {
  logo.classList.add("fade-out");

  setTimeout(() => {
    logo.src = "google.png";
    logo.alt = "Google Logo";
    logo.classList.remove("fade-out");
    logo.classList.add("fade-in");

    setTimeout(() => {
      logo.classList.remove("fade-in");
    }, 300);
  }, 300);
});
