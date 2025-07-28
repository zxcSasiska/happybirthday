function translateText() {
    var forDadElement = document.getElementById("for-dad-text");
    var birthdayElement = document.getElementById("birthday-text");
    var translationElement = document.getElementById("translationButton");

    if(forDadElement.textContent === "父親へ") {
        forDadElement.textContent = "Для моего папы";
    } else {
        forDadElement.textContent = "父親へ";
    }

    if(birthdayElement.textContent === "お誕生日おめでとうございます！") {
        birthdayElement.textContent = "С днём рождения!";
    } else {
        birthdayElement.textContent = "お誕生日おめでとうございます！";
    }

    if(translationElement.textContent === "перевод"){
        translationElement.textContent = "Оригинал";
    } else {
        translationElement.textContent = "перевод";
    }
}

// Переключатель видео
function toggleBackgroundVideo() {
    var videoElement = document.getElementById("background-video");
    var button = document.getElementById("toggleVideoButton");

    if(videoElement.classList.contains("video-hidden")) {
        videoElement.classList.remove("video-hidden");
        button.innerText = "Убрать видео"; // Возвращаем исходный текст кнопки
    } else {
        videoElement.classList.add("video-hidden");
        button.innerText = "Показать видео"; // Меняем текст кнопки на обратный
    }
}