// Start NavBar Actions
$(".dropdown-toggle").on("click", function () {
  if ($(".dropdown-menu").hasClass("show")) {
    $(".dropdown-menu").removeClass("show");
  } else {
    $(".dropdown-menu").addClass("show");
  }
});

let mainLinks = document.querySelectorAll(".navbar-nav .nav-item a:not(.last)");
let secLinks = document.querySelectorAll(".dropdown-menu a");
mainLinks.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    let target = `#${e.target.getAttribute("data-scroll")}`;
    let section = document.querySelector(`${target}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

secLinks.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    let target = `#${e.target.getAttribute("data-scroll")}`;
    let section = document.querySelector(`${target}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});
// End NavBar Actions

// Start Skills Section Actions
let start = false;
let skills = document.querySelector(".skills");
function animateMe() {
  var divs = document.querySelectorAll(".skills .div");
  let num = document.querySelectorAll(".skills span");
  var windowHeight = window.innerHeight;
  var elementTop = skills.getBoundingClientRect().top;
  var elementVisible = 150;
  if (elementTop < windowHeight - elementVisible) {
    divs.forEach((e) => {
      e.classList.add("animate");
      let numb1 = 0;
      let numb2 = 0;
      let numb3 = 0;
      let numb4 = 0;
      const intervalId1 = setInterval(() => {
        numb1++;
        if (numb1 === 80) {
          clearInterval(intervalId1);
        }
        num[0].innerHTML = `${numb1}%`;
      }, 10);
      const intervalId2 = setInterval(() => {
        numb2++;
        if (numb2 === 85) {
          clearInterval(intervalId2);
        }
        num[1].innerHTML = `${numb2}%`;
      }, 10);
      const intervalId3 = setInterval(() => {
        numb3++;
        if (numb3 === 70) {
          clearInterval(intervalId3);
        }
        num[2].innerHTML = `${numb3}%`;
      }, 10);
      const intervalId4 = setInterval(() => {
        numb4++;
        if (numb4 === 75) {
          clearInterval(intervalId4);
        }
        num[3].innerHTML = `${numb4}%`;
      }, 10);
    });
  } else {
    divs.forEach((e) => {
      e.classList.remove("animate");
    });
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY > skills.offsetTop) {
    if (!start) {
      animateMe();
    }
    start = true;
  }
});
// End Skills Section Actions

// Start Events Section Actions
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = new Date("Dec 31, 2023 23:59:59").getTime();
let dateDown = setInterval(() => {
  let dateNow = new Date().getTime();
  let diffrance = date - dateNow;
  days.textContent =
    Math.floor(diffrance / (1000 * 60 * 60 * 24)) < 100
      ? `0${Math.floor(diffrance / (1000 * 60 * 60 * 24))}`
      : Math.floor(diffrance / (1000 * 60 * 60 * 24));

  hours.textContent =
    Math.floor((diffrance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10
      ? `0${Math.floor((diffrance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
      : Math.floor((diffrance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  minutes.textContent =
    Math.floor((diffrance % (1000 * 60 * 60)) / (1000 * 60)) < 10
      ? `0${Math.floor((diffrance % (1000 * 60 * 60)) / (1000 * 60))}`
      : Math.floor((diffrance % (1000 * 60 * 60)) / (1000 * 60));

  seconds.textContent =
    Math.floor((diffrance % (1000 * 60)) / 1000) < 10
      ? `0${Math.floor((diffrance % (1000 * 60)) / 1000)}`
      : Math.floor((diffrance % (1000 * 60)) / 1000);
  if (diffrance === 0) {
    clearInterval(dateDown);
  }
}, 1000);
// End Events Section Actions

// Start Videos Gallery
let linkList = document.querySelectorAll(".videos a");

let liParent = document.querySelectorAll(".videos li");

let videos = document.querySelectorAll(".vedio img");

let title = document.querySelector(".vedio .discrib p");

let listParent = document.querySelector(".videos .list");

let shList = document.querySelector("[data-down=show-list]");

function addActive(ele) {
  ele.classList.add("active");
}

function removeActive(ele) {
  ele.classList.remove("active");
}

function checkActiveClass(ele) {
  if (!ele.target.classList.contains("active")) {
    liParent.forEach((e) => {
      removeActive(e);
    });
    addActive(ele.currentTarget);
  }
}

function getData(ele) {
  let dataChose = ele.target.getAttribute("data-chose");
  return `g-${dataChose}`;
}

function addChosenClass(ele) {
  ele.classList.add("chosen");
}

function removeChosenClass(ele) {
  ele.classList.remove("chosen");
}

function checkChosenClass(ele) {
  if (!ele.classList.contains("chosen")) {
    videos.forEach((e) => {
      removeChosenClass(e);
    });
    addChosenClass(ele);
  }
}

function getChosenClass(ele) {
  let chosenVid = document.querySelector(`[data-chosen=${getData(ele)}]`);
  checkChosenClass(chosenVid);
}

linkList.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    liParent.forEach((ele) => {
      ele.addEventListener("click", (eles) => {
        checkActiveClass(eles);
      });
    });
    getChosenClass(e);
    title.innerText = e.target.innerText;
  });
});

shList.addEventListener("click", () => {
  if (shList.classList.contains("down")) {
    shList.classList.remove("down");
    listParent.classList.remove("show-list");
  } else {
    shList.classList.add("down");
    listParent.classList.add("show-list");
  }
});
// End Videos Gallery

// Start Stats Actions
let stats = document.querySelector(".stats");
let clients = document.querySelector(".stats .cl");
let projects = document.querySelector(".stats .pr");
let countries = document.querySelector(".stats .co");
let money = document.querySelector(".stats .mn");
function count() {
  let windowHeight = window.innerHeight;
  let elementTop = stats.getBoundingClientRect().top;
  let elementVisible = 700;
  if (elementTop < windowHeight - elementVisible) {
    let numb1 = 0;
    let numb2 = 0;
    let numb3 = 0;
    let numb4 = 0;
    const intervalId1 = setInterval(() => {
      numb1++;
      if (numb1 === 150) {
        clearInterval(intervalId1);
      }
      clients.innerHTML = numb1;
    }, 15);
    const intervalId2 = setInterval(() => {
      numb2++;
      if (numb2 === 135) {
        clearInterval(intervalId2);
      }
      projects.innerHTML = numb2;
    }, 20);
    const intervalId3 = setInterval(() => {
      numb3++;
      if (numb3 === 50) {
        clearInterval(intervalId3);
      }
      countries.innerHTML = numb3;
    }, 50);
    const intervalId4 = setInterval(() => {
      numb4++;
      if (numb4 === 500) {
        clearInterval(intervalId4);
      }
      money.innerHTML = numb4;
    }, 5);
    window.removeEventListener("scroll", count);
  }
}
window.addEventListener("scroll", count);
// End Stats Actions
