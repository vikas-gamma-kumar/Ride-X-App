
const menuBtn = document.querySelector('.menu-btn');
const options = document.querySelector('.options');

menuBtn.addEventListener('click', () => {
  options.classList.toggle('active');
  menuBtn.classList.toggle('open');
});


  // Optional JavaScript if you want to handle the click programmatically
  document.getElementById('about-link').addEventListener('click', (e) => {
      console.log("Navigating to About Us page...");
  });

  window.addEventListener("scroll", () => {
    const section2 = document.getElementById("section2");
    if (!section2.style.display) {
        section2.style.display = "block";
    }
});


function toggleAnswer(element) {
  let answer = element.querySelector('.faq-answer');
  let icon = element.querySelector('h3 span');
  if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "▼";
  } else {
      answer.style.display = "block";
      icon.textContent = "▲";
  }
}