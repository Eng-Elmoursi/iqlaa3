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
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, 500); 
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

boxes.forEach(box => {
  observer.observe(box);
});


document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text-content");
  const image = document.querySelector(".image-content");
  const section = document.querySelector(".about-section");

  let isVisible = false; // متغير تحكم

  function checkScroll() {
    const rect = section.getBoundingClientRect();

    // لما السكشن يدخل في الشاشة
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      if (!isVisible) { // عشان ميتكررش
        isVisible = true;

        // شيل الكلاسات الأول
        text.classList.remove("show");
        image.classList.remove("show");

        // ضيفهم بعد تأخير بسيط
        setTimeout(() => {
          text.classList.add("show");
          image.classList.add("show");
        }, 100);
      }
    } else {
      if (isVisible) {
        isVisible = false;
        text.classList.remove("show");
        image.classList.remove("show");
      }
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});




const tabButtons4 = document.querySelectorAll(".section-4-tab-btn");
const tabItems4 = document.querySelectorAll(".section-4-tab-item");

tabButtons4.forEach((btn) => {
  btn.addEventListener("click", () => {
    // إزالة التحديد من كل الأزرار
    tabButtons4.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // عرض المحتوى المناسب مع أنيميشن من اليسار
    const target = btn.dataset.target;
    tabItems4.forEach((item) => {
      item.classList.remove("active");
      if (item.id === target) {
        item.classList.add("active");
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


