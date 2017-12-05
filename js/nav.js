const nav = document.getElementById('navbar');
const navList = document.createElement('ul');
const navItems = {
    "Soundboard": "index.html",
    "Text Input": "text-input.html",
    "Github": "https://github.com/code-johnny-code/morse"
};

for (var item in navItems) {
    var li = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.innerHTML = item;
    anchor.setAttribute("href", navItems[item]);
    li.appendChild(anchor);
    navList.appendChild(li)
}

nav.appendChild(navList);
