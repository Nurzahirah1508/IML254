// ===== TYPEWRITER EFFECT =====
const elements = document.querySelectorAll(".typing");
elements.forEach((el, index) => {
const text = el.textContent;
el.textContent = "";
let i = 0;
function typeWriter() {
if (i < text.length) {
el.textContent += text.charAt(i);
i++;
setTimeout(typeWriter, 80);
} else {
setTimeout(() => {
el.textContent = "";
i = 0;
typeWriter();
}, 2000);
}
}
setTimeout(typeWriter, index * 200);
});

// ===== SLIDER =====
const slides = document.getElementById('slides');
slides.innerHTML += slides.innerHTML;
let position = 0;
const speed = 2;
function loop() {
position -= speed;
if (Math.abs(position) >= slides.scrollWidth / 2) {
position = 0;
}

slides.style.transform = `translateX(${position}px)`;
requestAnimationFrame(loop);
}
loop();

