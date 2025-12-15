const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.getElementById("mobileMenu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "auto";
}

dropdownToggle.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation(); 
  dropdownMenu.classList.toggle("show");
});

dropdownMenu.addEventListener("click", function(e) {
  e.stopPropagation();
});

document.addEventListener("click", function() {
  dropdownMenu.classList.remove("show");
});

// Mobile menu events
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    toggleMobileMenu();
  }
});



// Parallax effect
document.addEventListener("mousemove", (e) => {
  const videos = document.querySelectorAll(".video-box");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  videos.forEach((video, index) => {
    const speed = (index + 1) * 15;
    const xMove = (x - 0.5) * speed;
    const yMove = (y - 0.5) * speed;
    video.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });
});

const swiper = new Swiper('.marquee-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 80,
  loop: true,
  loopedSlides: 15,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false
  },
  speed: 8000, 
  freeMode: true,
  allowTouchMove: false, 
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 80
    }
  }
});

 // Sticky Cards
const stickyElements = document.querySelectorAll('.sticky-is-enabled > .sticky-top');
stickyElements?.forEach(element => {
    const observer = new IntersectionObserver(([entry]) => {
        element.classList.toggle('sticky-card-active', entry.intersectionRatio === 1);
    }, { threshold: [1] });

    observer.observe(element);
});
setTimeout(() => {
  document.querySelector('.img4').classList.add('show');
}, 600);

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const tagsContainer = document.getElementById("tags");
  const descriptionEl = document.getElementById("description");
  const titleEl = document.getElementById("title");

  const projects = [
    {
      img: "assets/images/img11.png",
      tags: ["تجاري", "22°"],
      description: "مجموعة مصممة بدقة",
      title: "كل مشروع مصمم لغرض محدد بنسبة %100"
    },
    {
      img: "assets/images/img16.png",
      tags: ["فني", "18°"],
      description: "إبداع وتصميم مميز",
      title: "كل مشروع مصمم لغرض محدد بنسبة %100"
    },
    {
      img: "assets/images/img17.png",
      tags: ["تعليمي", "25°"],
      description: "تصميم مخصص للتعليم",
      title: "كل مشروع مصمم لغرض محدد بنسبة %100"
    }
  ];

  let index = 0;
  const totalSlides = projects.length;

  function updateCard() {
    // tags update
    tagsContainer.innerHTML = "";
    projects[index].tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "px-3 py-1 bg-white/10 rounded-full text-sm";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    descriptionEl.textContent = projects[index].description;
    titleEl.textContent = projects[index].title;

    slider.innerHTML = `<img src="${projects[index].img}" class="w-full h-44 object-cover rounded-xl">`;
  }

  window.nextSlide = function () {
    index = (index + 1) % totalSlides;
    updateCard();
  };

  window.prevSlide = function () {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCard();
  };

  updateCard();
});
const loginBtn = document.getElementById("loginBtn");
  const loginDropdown = document.getElementById("loginDropdown");

  loginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    loginDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    loginDropdown.classList.add("hidden");
  });
function toggleSanadFeatures() {
  const moreFeatures = document.getElementById('sanadMoreFeatures');
  const toggleText = document.getElementById('sanadToggleText');
  const toggleIcon = document.getElementById('sanadToggleIcon');
  
  if (moreFeatures.classList.contains('hidden')) {
    moreFeatures.classList.remove('hidden');
    toggleText.textContent = 'عرض أقل';
    toggleIcon.classList.remove('fa-chevron-down');
    toggleIcon.classList.add('fa-chevron-up');
  } else {
    moreFeatures.classList.add('hidden');
    toggleText.textContent = 'عرض المزيد';
    toggleIcon.classList.remove('fa-chevron-up');
    toggleIcon.classList.add('fa-chevron-down');
  }
}

function toggleProFeatures() {
  const moreFeatures = document.getElementById('proMoreFeatures');
  const toggleText = document.getElementById('proToggleText');
  const toggleIcon = document.getElementById('proToggleIcon');
  
  if (moreFeatures.classList.contains('hidden')) {
    moreFeatures.classList.remove('hidden');
    toggleText.textContent = 'عرض أقل';
    toggleIcon.classList.remove('fa-chevron-down');
    toggleIcon.classList.add('fa-chevron-up');
  } else {
    moreFeatures.classList.add('hidden');
    toggleText.textContent = 'عرض المزيد';
    toggleIcon.classList.remove('fa-chevron-up');
    toggleIcon.classList.add('fa-chevron-down');
  }
}

function toggleAhdFeatures() {
  const moreFeatures = document.getElementById('ahdMoreFeatures');
  const toggleText = document.getElementById('ahdToggleText');
  const toggleIcon = document.getElementById('ahdToggleIcon');
  
  if (moreFeatures.classList.contains('hidden')) {
    moreFeatures.classList.remove('hidden');
    toggleText.textContent = 'عرض أقل';
    toggleIcon.classList.remove('fa-chevron-down');
    toggleIcon.classList.add('fa-chevron-up');
  } else {
    moreFeatures.classList.add('hidden');
    toggleText.textContent = 'عرض المزيد';
    toggleIcon.classList.remove('fa-chevron-up');
    toggleIcon.classList.add('fa-chevron-down');
  }
}