const nav = document.getElementById('navbar');
const navList = document.createElement('ul');
const navItems = {
    "Soundboard": "index.html",
    "Text Input": "text-input.html",
    "Decoder": "decoder.html",
    "Github": "https://github.com/code-johnny-code/morse"
};

for (let item in navItems) {
    let li = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.innerHTML = item;
    anchor.setAttribute("href", navItems[item]);
    li.appendChild(anchor);
    navList.appendChild(li)
}

nav.appendChild(navList);
