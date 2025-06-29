const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let position = 0;
const slideWidth = 310; // image + margin

prevBtn.addEventListener('click', () => {
  position += slideWidth;
  if (position > 0) position = 0;
  track.style.transform = `translateX(${position}px)`;
});

nextBtn.addEventListener('click', () => {
  const maxScroll = -(track.scrollWidth - track.parentElement.offsetWidth);
  position -= slideWidth;
  if (position < maxScroll) position = maxScroll;
  track.style.transform = `translateX(${position}px)`;
});
