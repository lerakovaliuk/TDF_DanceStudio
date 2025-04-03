// Функція "Діалог з користувачем"
function dialogWithUser() {
    alert("Вітаємо у танцювальній студії!");

    let userName = "";
    while (!userName) {
        userName = prompt("Як вас звати?");
        if (!userName) {
            alert("Будь ласка, введіть ваше ім'я.");
        }
    }

    let experience = prompt("Чи маєте ви досвід у танцях? (так/ні)").toLowerCase();
    
    while (experience !== "так" && experience !== "ні") {
        experience = prompt("Будь ласка, введіть 'так' або 'ні'.");
    }

    let styleChoice = prompt("Який стиль ви хочете обрати? (Хіп-хоп, Хілс, Денсхол, Контемп, Джаз-фанк)").toLowerCase();

    switch (styleChoice) {
        case "хіп-хоп":
        case "хілс":
        case "денсхол":
        case "джаз-фанк":
        case "контемп":
            alert(`Дякуємо, ${userName}! Ви обрали стиль: ${styleChoice}. Чекаємо вас у студії!`);
            break;
        default:
            alert("На жаль, вибраного стилю немає у нашому списку, побачимося на інших заняттях!");
    }
}
// dialogWithUser();


// Функція виводу інформації про розробника
function developerInfo(lastName, firstName, position = "Frontend Developer") {
    alert(`Розробник сторінки: ${lastName} ${firstName}, посада: ${position}`);
}
// developerInfo("Ковалюк", "Валерія");


// Функція порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert(`Більший рядок: ${str1}`);
    } else if (str1 < str2) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки рівні.");
    }
}
// compareStrings("танці", "балет");
// compareStrings("Cальса", "cальса");
// compareStrings("джаз", "джаз");


// Функція для зміни фону на 30 секунд
function changeBackground() {
    document.body.style.background = 'red';
    setTimeout(() => document.body.style.background = '', 30000);
}
// changeBackground();


// Функція для перенаправлення браузера на іншу сторінку
function goToAnother(url) {
    if (confirm("Ви хочете перейти на нашу іншу сторінку?")) {
        location.href = url; 
    }
}
// goToAnother("https://www.dnadancestudio.lviv.ua/");


// Функція з використанням getElementById
function changeTitle() {
    let titleElement = document.getElementById("title");
    titleElement.textContent = "Вітаємо у нашій танцювальній студії!";
}
// changeTitle();


// Функція з використанням querySelectorAll
function highlightParagraphs() {
    let paragraphs = document.querySelectorAll(".text");
    paragraphs.forEach(par => {
        par.style.color = "violet";
    });
}
// highlightParagraphs();


