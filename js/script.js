const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});


const boxes = document.querySelectorAll('.feature-box');
const section = document.querySelector('.features');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // لما العنصر يدخل الشاشة
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, 500);
    }
  });
}, { threshold: 0.2 });

// راقب كل الفيتشر بوكس
boxes.forEach(box => observer.observe(box));

// تابع خروج وعودة السكشن كله
window.addEventListener('scroll', () => {
  const sectionRect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // لو السكشن كله فوق أو تحت الشاشة
  if (sectionRect.bottom < 0 || sectionRect.top > windowHeight) {
    boxes.forEach(box => box.classList.remove('show'));
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text-content");
  const image = document.querySelector(".image-content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.5 // العنصر يظهر لما 30% منه يكون ظاهر في الشاشة
  });

  observer.observe(text);
  observer.observe(image);
});





const tabButtons4 = document.querySelectorAll(".section-4-tab-btn");
const tabItems4 = document.querySelectorAll(".section-4-tab-item");
const section4Left = document.querySelector(".section-4-left");
const section4Right = document.querySelector(".section-4-right");

// ======== إزالة أي active من الزرار عند البداية ========
tabButtons4.forEach(btn => btn.classList.remove("active"));
tabItems4.forEach(item => item.classList.remove("active"));

// ======== متغير لمعرفة لو حصل scroll ========
let hasScrolled = false;
window.addEventListener("scroll", () => {
  hasScrolled = true;
});

// ======== Intersection Observer للجزء الأيسر والأيمن ========
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!hasScrolled) return; // لو ما حصلش scroll ما نعملش حاجة
    if(entry.isIntersecting && entry.intersectionRatio > 0.5) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.5 });

if(section4Left) sectionObserver.observe(section4Left);
if(section4Right) sectionObserver.observe(section4Right);

// ======== Intersection Observer للـ Tab Items ========
const tabObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!hasScrolled) return; // نفس الشيء
    if(entry.isIntersecting && entry.intersectionRatio > 0.5) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.5 });

tabItems4.forEach(item => tabObserver.observe(item));

// ======== تفعيل الزرار عند الضغط ========
tabButtons4.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons4.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    tabItems4.forEach(item => {
      if(item.id === target) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});





// Animation on scroll
const observer_4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

document.querySelectorAll('.section-4-left, .section-4-right').forEach(el => {
  observer_4.observe(el);
});

 


const cards = document.querySelectorAll('.card');
const container = document.querySelector('.cards-container');

// لما تعمل هوفر على كارد
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// لما تسيب الماوس من السكشن كله، يرجع أول كارد (اليمين) مفتوح
container.addEventListener('mouseleave', () => {
  cards.forEach(c => c.classList.remove('active'));
  document.getElementById('card1').classList.add('active');
});


