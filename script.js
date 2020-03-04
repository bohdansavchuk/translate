window.addEventListener("DOMContentLoaded", function() {
    'use strict';

    const btn = document.getElementById("btn"),
        txt = document.getElementById("en"),
        ru = document.getElementById("ru"),
        rus = document.getElementById("rus"),
        eng = document.getElementById("eng"),
        key = 'trnsl.1.1.20200304T155807Z.e7c3ca3f5348c8eb.f1443d577ef11f63561183bb0f6fddbe47601250';

        let lang = 'en-ru';

        rus.addEventListener('click', () => {
            lang = 'ru-en';
        });

        eng.addEventListener('click', () => {
            lang = 'en-ru';
        });


    btn.addEventListener('click', function() {
        event.preventDefault();
        let text = encodeURIComponent(txt.value);
        
        postData(text)
            .then(response => response.json())
            .then(data => ru.value = data.text)
            .catch((error) => {
                console.error(error);
            });

    });

    const postData = (text) => {
        return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${lang};&key=${key}&text=${text}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },            
        });
    };
    
});
    