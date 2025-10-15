const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const menuLinks = mobileMenu.querySelectorAll('a'); 


hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});







//-------------------------ثاني سكشن----------------------//
const boxes = document.querySelectorAll('.feature-box');
const section = document.querySelector('.features');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, 500);
    }
  });
}, { threshold: 0.2 });
boxes.forEach(box => observer.observe(box));
window.addEventListener('scroll', () => {
  const sectionRect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (sectionRect.bottom < 0 || sectionRect.top > windowHeight) {
    boxes.forEach(box => box.classList.remove('show'));
  }
});
//---------------------------------------------------------//





//-------------------------ثالث سكشن----------------------//
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
    threshold: 0.5
  });

  observer.observe(text);
  observer.observe(image);
});
//---------------------------------------------------------//





//-----------------------------رابع سكشن-------------------------//
const tabButtons4 = document.querySelectorAll(".section-4-tab-btn");
const tabItems4 = document.querySelectorAll(".section-4-tab-item");
const section4Left = document.querySelector(".section-4-left");
const section4Right = document.querySelector(".section-4-right");

tabButtons4.forEach(btn => btn.classList.remove("active"));
tabItems4.forEach(item => item.classList.remove("active", "show"));

function createObserver(element) {
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.intersectionRatio > 0.5) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.5 });

  observer.observe(element);
}

// إنشاء Observers
[section4Left, section4Right, ...tabItems4].forEach(createObserver);

// تفعيل التبويبات
tabButtons4.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons4.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    tabItems4.forEach(item => item.classList.toggle("active", item.id === target));
  });
});

//-------------------------------------------------------------------//





//-----------------------------خامس سكشن-------------------------//
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
//----------------------------------------------------------------//






//-----------------------------سادس سكشن-------------------------//
const section6Boxes = document.querySelectorAll('.section6-feature-box');
let section6StartIndex = 0;
let section6VisibleCount = 3; 
function updateSection6VisibleCount() {
  const screenWidth = window.innerWidth;
  
  if (screenWidth >= 1200) {
    section6VisibleCount = 3;
  } else if (screenWidth >= 900) {
    section6VisibleCount = 2;
  } else {
    section6VisibleCount = 1;
  }
}
function section6UpdateVisibility() {
  updateSection6VisibleCount();
  section6Boxes.forEach((box, i) => {
    box.style.display = (i >= section6StartIndex && i < section6StartIndex + section6VisibleCount) ? 'block' : 'none';
  });
  const section6PrevBtn = document.getElementById('prev');
  const section6NextBtn = document.getElementById('next');
  section6PrevBtn.style.pointerEvents = (section6StartIndex <= 0) ? 'none' : 'auto';
  section6PrevBtn.style.opacity = (section6StartIndex <= 0) ? '0.5' : '1';
  section6NextBtn.style.pointerEvents = (section6StartIndex + section6VisibleCount >= section6Boxes.length) ? 'none' : 'auto';
  section6NextBtn.style.opacity = (section6StartIndex + section6VisibleCount >= section6Boxes.length) ? '0.5' : '1';
}
document.getElementById('next').addEventListener('click', (e) => {
  e.preventDefault();
  if (section6StartIndex + section6VisibleCount < section6Boxes.length) section6StartIndex++;
  section6UpdateVisibility();
});
document.getElementById('prev').addEventListener('click', (e) => {
  e.preventDefault();
  if (section6StartIndex > 0) section6StartIndex--;
  section6UpdateVisibility();
});
window.addEventListener('resize', () => {
  section6UpdateVisibility();
});
section6UpdateVisibility();
//---------------------------------------------------------------//



//--------------------------links fun---------------------------//

function toggleSectionsAndChangeH1(
  sectionsToHide = [], 
  sectionToShowClass = '', 
  newH1Text = '', 
  innerDivsToHide = []
) {

  const allSections = document.querySelectorAll(
    '.first-section, .features, .about-section, .section-4, .fifth-section, .section6-features, .big-text-section'
  );
  allSections.forEach(section => section.style.display = '');


  innerDivsToHide.forEach(selector => {
    const divs = document.querySelectorAll(selector);
    divs.forEach(div => div.style.display = '');
  });


  sectionsToHide.forEach(className => {
    const sections = document.querySelectorAll(`.${className}`);
    sections.forEach(section => section.style.display = 'none');
  });


  innerDivsToHide.forEach(selector => {
    const divs = document.querySelectorAll(selector);
    divs.forEach(div => div.style.display = 'none');
  });

  if(sectionToShowClass) {
    const sectionToShow = document.querySelector(`.${sectionToShowClass}`);
    if(sectionToShow) {
      sectionToShow.style.display = 'block';

      if(newH1Text) {
        const h1 = sectionToShow.querySelector('h1');
        if(h1) h1.textContent = newH1Text;
      }
    }
  }
}




function services() {
  toggleSectionsAndChangeH1(
    ['first-section','features','about-section','section-4','section6-features'],
    'big-text-section',
    'خدماتنا',
    ['.section-header']
  );
}

function aboutus() {
  toggleSectionsAndChangeH1(
    ['first-section','features','fifth-section','section6-features'],
    'big-text-section',
    'من نحن'
  );
}



function adv() {
  toggleSectionsAndChangeH1(
    ['first-section','features','about-section','section-4','fifth-section'],
    'big-text-section',
    'ما يميزنا',
    ['.section6-title']
  );
}

function ourjobs() {
 
  toggleSectionsAndChangeH1(
    ['first-section','features','about-section','section-4','fifth-section','section6-features'],
    'big-text-section',
    'معرض الأعمال',
    ['.section6-title']
  );

  const extraSection = document.querySelector('.full-section ');
  if(extraSection) {
    extraSection.style.display = 'block';
  }
}



function clients() {

  toggleSectionsAndChangeH1(
    ['first-section','features','about-section','section-4','fifth-section','section6-features'],
    'big-text-section',
    'عملاؤنا',
    ['.section6-title']
  );


  const extraSection = document.querySelector('.full-section');
  if(extraSection) {
    extraSection.style.display = 'block';
  }
}

function ourblog() {

  toggleSectionsAndChangeH1(
    ['first-section','features','about-section','section-4','fifth-section','section6-features'],
    'big-text-section',
    'مدونتنا',
    ['.section6-title']
  );
  const extraSection = document.querySelector('.full-section');
  if(extraSection) {
    extraSection.style.display = 'block';
  }
}