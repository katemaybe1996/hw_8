// function a() {
//   console.log('a');
// }

// function b() {
//   console.log('b');
// }

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
//   setTimeout(() => {
//     console.log(4);
//   }, 0);
// }, 0);

// console.log(5);
// a();
// b();

// function makeGetRequest(method, url, cb) {
//     const xhr = new XMLHttpRequest();

//     // GET POST PUT DELETE
//     xhr.open(method, url);

//     xhr.addEventListener('load', () => {
//         const resBody = JSON.parse(xhr.responseText);
//         cb(resBody);
//     });

//     xhr.addEventListener('error', () => {
//         console.log('error');
//     });

//     xhr.send();
// }

// makeGetRequest('GET', 'https://jsonplaceholder.typicode.com/users', res => {
//     renderUsers(res);
// });

// function renderUsers(users) {
//     users.forEach(user => {
//         const div = document.createElement('div');
//         div.textContent = user.name;
//         document.body.appendChild(div);
//     });
// }

// function makePostRequest(method, url, body, cb) {
//     const xhr = new XMLHttpRequest();

//     // GET POST PUT DELETE
//     xhr.open(method, url);

//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.addEventListener('load', () => {
//         const resBody = JSON.parse(xhr.responseText);
//         cb(resBody);
//     });

//     xhr.addEventListener('error', () => {
//         console.log('error');
//     });

//     xhr.send(JSON.stringify(body));
// }

// makePostRequest(
//     'POST',
//     'https://jsonplaceholder.typicode.com/todos', {
//         userId: 99,
//         title: 'My title',
//         completed: false,
//     },
//     res => {
//         console.log(res);
//     },
// );



// function showUsers(users) {
//     users.forEach(user => {
//         let li = body.appendChild(document.createElement('li'));
//         li.innerHTML = users.name;
//     });
// }


// function makeGetRequest(method, url, cb) {
//   const xhr = new XMLHttpRequest();

// GET POST PUT DELETE
// let ul = document.querySelectorAll("ul");

function makeGetRequest(method, url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.addEventListener('load', () => {
        const resBody = JSON.parse(xhr.responseText);
        cb(resBody);
    });

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send();
}

makeGetRequest('GET', 'https://jsonplaceholder.typicode.com/users', res => {
    showUsers(res);
});


let divForLi = document.getElementById("divForLi");

function showUsers(users) {
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        li.classList.add(
            'body_li',
            'list-group-item',
            'd-flex',
            'align-items-center',
            'flex-wrap',
        );


        divForLi.appendChild(li);

    });


}



function makeGetRequest(method, url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.addEventListener('load', () => {
        const resBody = JSON.parse(xhr.responseText);
        cb(resBody);
    });

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send();
}

makeGetRequest('GET', 'https://jsonplaceholder.typicode.com/users', res => {
    showUsersInfo(res);
});



const items = document.getElementById("divForLi");
items.addEventListener('click', showUsersInfo) // не срабатывает по клику (

function showUsersInfo(users) {
    users.forEach(user => {
        const li2 = document.createElement('li');
        li2.textContent = 'email :' + ' ' + user.email + ' ' + 'website :' + user.website;
        document.body.appendChild(li2);

    });
}