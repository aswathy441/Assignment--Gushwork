
let index = 0;
const slides = document.getElementById("slides");
const thumbs = document.querySelectorAll(".thumb");
const totalSlides = thumbs.length;

function updateSlider(){
  slides.style.transform = `translateX(-${index * 100}%)`;
   thumbs.forEach(t => t.classList.remove("active"));
  thumbs[index].classList.add("active");
}

function nextSlide(){
  index = (index + 1) % totalSlides;
  updateSlider();
}

function prevSlide(){
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(i){
  index = i;
  updateSlider();
}

/* ================= FAQ TOGGLE ================= */
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click", function(){
    const item = this.parentElement;
    item.classList.toggle("active");
  });
});

/* ================= CARDS SLIDER ================= */
const track = document.getElementById('slider-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let cardIndex = 0;

function updateCardSlider(){
  const cardWidth = document.querySelector('.card').offsetWidth + 20;
  track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', ()=>{
  if(cardIndex > 0){
    cardIndex--;
    updateCardSlider();
  }
});

nextBtn.addEventListener('click', ()=>{
  if(cardIndex < track.children.length - 3){
    cardIndex++;
    updateCardSlider();
  }
});

window.addEventListener("resize", updateCardSlider);
</script>
<script>
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const prev = document.querySelector(".t-arrow.left");
const next = document.querySelector(".t-arrow.right");

let index = 0;
const cardWidth = cards[0].offsetWidth + 30;

next.addEventListener("click", () => {
  if(index < cards.length - 1){
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

prev.addEventListener("click", () => {
  if(index > 0){
    index--;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});
</script>
