function makeRequest(method, url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.addEventListener("load", () => {
        const resBody = JSON.parse(xhr.responseText);
        cb(resBody);
    });

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.send();
}

makeRequest("GET", "https://jsonplaceholder.typicode.com/users", res => {
    showUsersInfo(res);
});

let divForDetails = document.getElementById("divForDetails");

function showUsersInfo(users) {
    users.forEach(user => {
        const li2 = document.createElement("li");
        li2.classList.add("list-group-item");
        const li3 = document.createElement("li");
        li2.textContent =
            "email :" + " " + user.email + " " + "website :" + user.website;
        li3.textContent = user.name;
        divForDetails.appendChild(li3);
        divForDetails.appendChild(li2);
        li3.onclick = function() {
            li2.classList.toggle("done");
        };
        li2.style.display = "none";
    });
}
let btn = document.getElementById("save");
let form = document.getElementById("form");
let out = document.getElementById("divForDetails3");

function updateResult() {
    out.textContent = new URLSearchParams(Array.from(new FormData(form)));
} // собирает данные с формы и выводит в документ после ввода, но в запросе не отображается

updateResult();
form.addEventListener("input", updateResult);

function makePostRequest(method, url, body, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.addEventListener("load", () => {
        const resBody = JSON.parse(xhr.responseText);
        cb(resBody);
    });

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.send(JSON.stringify(body));
}

makePostRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/users", { name: out.textContent },
    res => {
        console.log(res);
    }
);