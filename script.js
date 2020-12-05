var catalog = document.getElementById("catalog");
var searchName = 'Закуски';


var productes = {
    //Закуски
    'a1': {
        "category": "Закуски",
        "name" : "Сельдь на бородинском хлебе",
        "desk": "С яйцом и огурцом",
        "price": 240,
        "img": "https://deffiartcafe.ru/wp-content/uploads/2019/07/800%D0%B0-copy.jpg"
    },

    'a2': {
        "category": "Закуски",
        "name": "Соленья ассорти",
        "desk": "С редиской и огурцом",
        "price": 320,
        "img": "https://just-eat.by/image/data/shops/29685/49191.jpg"
    },

    'a3': {
        "category": "Закуски",
        "name": "Грибы маринованные",
        "desk": "С грибами и луком",
        "price": 300,
        "img": "https://f8.pmo.ee/CM6l0WWCTnKWO65BqbaSIyvg8Gk=/685x0/smart/nginx/o/2020/08/23/13293524t1h525f.jpg"
    },

    'a4': {
        "category": "Закуски",
        "name": "Сало домашнее с горчицей",
        "desk": "С салом и горчицей",
        "price": 320,
        "img": "https://babushka.kitchen/264-large_default/salo-khleb.jpg"
    },

    'a5': {
        "category": "Закуски",
        "name": "Малосольная семга",
        "desk": "С семгой и лимоном",
        "price": 390,
        "img": "https://foodies.academy/wp-content/uploads/2019/01/140213174431a.jpg"
    },

    'a6': {
        "category": "Закуски",
        "name": "Язык говяжий с хреном",
        "desk": "С говяжим языком и салатом",
        "price": 350,
        "img": "https://na-shashliki.ru/wp-content/uploads/2018/07/IMG-20180704-WA0027-e1531569047763.jpg"
    },

    //Салаты
    'b1': {
        "category": "Салаты",
        "name": "Соленья ассорти",
        "desk": "С редиской и огурцом",
        "price": 320,
        "img": "https://just-eat.by/image/data/shops/29685/49191.jpg"
    },

    'b2': {
        "category": "Салаты",
        "name": "Грибы маринованные",
        "desk": "С грибами и луком",
        "price": 300,
        "img": "https://f8.pmo.ee/CM6l0WWCTnKWO65BqbaSIyvg8Gk=/685x0/smart/nginx/o/2020/08/23/13293524t1h525f.jpg"
    },

    'b3': {
        "category": "Салаты",
        "name": "Сало домашнее с горчицей",
        "desk": "С салом и горчицей",
        "price": 320,
        "img": "https://babushka.kitchen/264-large_default/salo-khleb.jpg"
    },

    //Супы
    'c1': {
        "category": "Супы",
        "name": "Сельдь на бородинском хлебе",
        "desk": "С яйцом и огурцом",
        "price": 240,
        "img": "https://deffiartcafe.ru/wp-content/uploads/2019/07/800%D0%B0-copy.jpg"
    },

    'c2': {
        "category": "Супы",
        "name": "Соленья ассорти",
        "desk": "С редиской и огурцом",
        "price": 320,
        "img": "https://just-eat.by/image/data/shops/29685/49191.jpg"
    },

    'c3': {
        "category": "Супы",
        "name": "Грибы маринованные",
        "desk": "С грибами и луком",
        "price": 300,
        "img": "https://f8.pmo.ee/CM6l0WWCTnKWO65BqbaSIyvg8Gk=/685x0/smart/nginx/o/2020/08/23/13293524t1h525f.jpg"
    },

    'c4': {
        "category": "Супы",
        "name": "Сало домашнее с горчицей",
        "desk": "С салом и горчицей",
        "price": 320,
        "img": "https://babushka.kitchen/264-large_default/salo-khleb.jpg"
    },

    //Горячие блюда
    'd1': {
        "category": "Горячие блюда",
        "name": "Сельдь на бородинском хлебе",
        "desk": "С яйцом и огурцом",
        "price": 240,
        "img": "https://deffiartcafe.ru/wp-content/uploads/2019/07/800%D0%B0-copy.jpg"
    },

    'd2': {
        "category": "Горячие блюда",
        "name": "Соленья ассорти",
        "desk": "С редиской и огурцом",
        "price": 320,
        "img": "https://just-eat.by/image/data/shops/29685/49191.jpg"
    },

    'd3': {
        "category": "Горячие блюда",
        "name": "Грибы маринованные",
        "desk": "С грибами и луком",
        "price": 300,
        "img": "https://f8.pmo.ee/CM6l0WWCTnKWO65BqbaSIyvg8Gk=/685x0/smart/nginx/o/2020/08/23/13293524t1h525f.jpg"
    },

    'd4': {
        "category": "Горячие блюда",
        "name": "Сало домашнее с горчицей",
        "desk": "С салом и горчицей",
        "price": 320,
        "img": "https://babushka.kitchen/264-large_default/salo-khleb.jpg"
    },

    //Гарниры
    'e1': {
        "category": "Гарниры",
        "name": "Сельдь на бородинском хлебе",
        "desk": "С яйцом и огурцом",
        "price": 240,
        "img": "https://deffiartcafe.ru/wp-content/uploads/2019/07/800%D0%B0-copy.jpg"
    },

    'e2': {
        "category": "Гарниры",
        "name": "Соленья ассорти",
        "desk": "С редиской и огурцом",
        "price": 320,
        "img": "https://just-eat.by/image/data/shops/29685/49191.jpg"
    },

    'e3': {
        "category": "Гарниры",
        "name": "Грибы маринованные",
        "desk": "С грибами и луком",
        "price": 300,
        "img": "https://f8.pmo.ee/CM6l0WWCTnKWO65BqbaSIyvg8Gk=/685x0/smart/nginx/o/2020/08/23/13293524t1h525f.jpg"
    },

    'e4': {
        "category": "Гарниры",
        "name": "Сало домашнее с горчицей",
        "desk": "С салом и горчицей",
        "price": 320,
        "img": "https://babushka.kitchen/264-large_default/salo-khleb.jpg"
    },

    //Десерты
    'f1': {
        "category": "Десерты",
        "name": "Сельдь на бородинском хлебе",
        "desk": "С яйцом и огурцом",
        "price": 240,
        "img": "https://deffiartcafe.ru/wp-content/uploads/2019/07/800%D0%B0-copy.jpg"
    },

    'f2': {
        "category": "Десерты",
        "name": "Соленья ассорти",
        "desk": "С редиской и огурцом",
        "price": 320,
        "img": "https://just-eat.by/image/data/shops/29685/49191.jpg"
    },

    'f3': {
        "category": "Десерты",
        "name": "Грибы маринованные",
        "desk": "С грибами и луком",
        "price": 300,
        "img": "https://f8.pmo.ee/CM6l0WWCTnKWO65BqbaSIyvg8Gk=/685x0/smart/nginx/o/2020/08/23/13293524t1h525f.jpg"
    },

    'f4': {
        "category": "Десерты",
        "name": "Сало домашнее с горчицей",
        "desk": "С салом и горчицей",
        "price": 320,
        "img": "https://babushka.kitchen/264-large_default/salo-khleb.jpg"
    },
}


function update() {
    let html = '<div class="container">';
    html += '<h2>' + searchName + '</h2>';
    html += '<hr />';
    html += '<ul>';
    for (var key in productes) {
        if (productes[key]['category'] == searchName) {
            html += '<li>';
            html += '<div>';
            html += '<h3>' + productes[key]['name'] + '</h3>';
            html += '<p>' + productes[key]['desk'] + '</p>';
            html += '<div class="price">' + productes[key]['price'] + ' ₽' + '</div>';
            html += '</div>';
            html += '<img src="' + productes[key]['img'] + '" alt="Alternate Text" />';
            html += '</li>';
        }
    }
    html += '</ul>';
    html += '</div>';
    catalog.innerHTML = html;
}


function a() { searchName = 'Закуски'; }
function b() { searchName = 'Салаты'; }
function c() { searchName = 'Супы'; }
function d() { searchName = 'Горячие блюда'; }
function e() { searchName = 'Гарниры'; }
function f() { searchName = 'Десерты'; }
