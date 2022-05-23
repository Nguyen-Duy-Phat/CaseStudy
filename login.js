let LoginData = [{
    username: "admin",
    password: "12345"
}]

function savelocalStorage() {
    localStorage.setItem('Datalogin', JSON.stringify(LoginData))
}

function loadLocalStorage() {
    return JSON.parse(localStorage.getItem('Datalogin'))
}

savelocalStorage();

function Login() {
    let userName = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let data = loadLocalStorage();
    for (let i = 0; i < data.length; i++) {
        if (data[i].username === userName && data[i].password === pass) {
            alert("Welcom");
            window.location.href = "index.html";
            return;
        }
    }
    alert("Import information");
}