var a = document.querySelector("#counter");
var b = parseInt(a.innerText);

function timer() {
  interval = setInterval(() => {
    a.innerHTML = b;
    b++;
  }, 1000);
  return interval;
}

function decrement() {
  minus = document.querySelector("#minus");
  minus.addEventListener("click", function () {
    a.innerHTML = b;
    b--;
  });
}

function increment() {
  plus = document.querySelector("#plus");
  plus.addEventListener("click", function () {
    a.innerHTML = b;
    b++;
  });
}

function heart() {
  heartId = document.querySelector("#heart");
  var likes = document.querySelector(".likes");
  obj = {};
  heartId.addEventListener("click", function () {
    obj[a.innerHTML] = obj[a.innerHTML] + 1 || 1;
    if (obj[a.innerHTML] === 1) {
      const li = document.createElement("li");
      li.setAttribute("id", a.innerHTML);
      li.textContent = `${a.innerHTML} has been liked 1 time`;
      likes.appendChild(li);
    } else if (obj[a.innerHTML] !== 1) {
      var id = document.getElementById(a.innerHTML);
      id.textContent = `${a.innerHTML} has been liked ${
        obj[a.innerHTML]
      } times`;
    }
  });
}
var pauseButton = document.querySelector("#pause");

function pause() {
  clearInterval(interval);
  minus.disabled = true;
  plus.disabled = true;
  heartId.disabled = true;
  pauseButton.innerText = "resume";
}

function resume() {
  timer();
  minus.disabled = false;
  plus.disabled = false;
  heartId.disabled = false;
  pauseButton.innerText = "pause";
}

document.addEventListener("click", function (e) {
  var restart = e.target.innerText;
  if (restart === "pause") {
    pause();
  } else if (restart === "resume") {
    resume();
  }
});
function comment() {
  var submit = document.querySelector("#comment-form");
  var list = document.querySelector("#list");
  var input = document.querySelector("#comment-input");
  submit.addEventListener("submit", function (e) {
    e.preventDefault();

    var p = document.createElement("p");
    p.innerText = input.value;
    list.appendChild(p);
    e.target.reset();
  });
}

timer();
decrement();
increment();
heart();
comment();
