// function handleClickAttr() {
//     alert("Напишіть нам у приватні повідомлення в інстаграм! (через атрибут у HTML (onclick))");
// }

// let button = document.getElementById("danceBtn");
  
// button.onclick = function () {
//     alert("Напишіть нам у приватні повідомлення в інстаграм! (через властивість: button.onclick)");
// };

// function firstHandler() {
//     alert("Напишіть нам у приватні повідомлення в інстаграм! (через addEventListener, ПЕРШИЙ обробник)");
// }
  
// function secondHandler() {
//     alert("Напишіть нам у приватні повідомлення в інстаграм! (через addEventListener, ДРУГИЙ обробник)");
// }
  
// button.addEventListener("click", firstHandler);
// button.addEventListener("click", secondHandler);
  
// let objectHandler = {
//     handleEvent(event) {
//         alert("Напишіть нам у приватні повідомлення в інстаграм! (через обробник-об'єкт)");
//         alert(`Елемент, на якому спрацював обробник: ${event.currentTarget}`);
//     }
// };
// button.addEventListener("click", objectHandler);
  
// setTimeout(() => {
//     button.removeEventListener("click", firstHandler);
//     alert("Третє повідомлення було видалено через 10 секунд");
// }, 10000);



let selectedLi;
let list = document.getElementById("styleList");

list.onclick = function(event) {
    let target = event.target.closest('li');

    if (!target) return;
    if (!list.contains(target)) return; 

    highlight(target);
};

function highlight(li) {
    if (selectedLi) {
        selectedLi.classList.remove("highlight");
    }

    selectedLi = li;
    selectedLi.classList.add("highlight");
}



class DanceMenu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }
  
    location() {
        alert("Наша адреса: вул. Грушевського, 1, м. Житомир");
    }
  
    schedule() {
        alert("Студія працює з Пн по Пт з 14:00 до 21:00");
    }
  
    contacts() {
        alert("Телефон студії: +380971112233");
    }
  
    onClick(event) {
      let action = event.target.dataset.action;
      if (action && typeof this[action] === "function") {
        this[action]();
      }
    }
}
new DanceMenu(document.getElementById("danceMenu"));



document.addEventListener('click', function(event) {
  // поведінка "лічильник"
  if (event.target.dataset.counter !== undefined) {
    event.target.value++;
  }

  // поведінка "перемикач"
  const toggleId = event.target.dataset.toggleId;
  if (toggleId) {
    const elem = document.getElementById(toggleId);
    if (elem) {
      elem.hidden = !elem.hidden;
    }
  }
});