let menu_box = document.querySelector('.menu-box')
let icon_menu = document.querySelector('.icon')
let menu_hide_box = document.querySelector('.menu-hide-box')
let menu = document.querySelector('.menu')
const sub = document.querySelectorAll('.subject')
let x = 0

menu_box.addEventListener('click', () =>
{
    if(x == 0)
    {
        x++
        icon_menu.classList.add('icon-cancel')
        icon_menu.classList.remove('icon-menu')
        menu_hide_box.classList.add('seek')
        setTimeout(function() {menu.style.display = 'flex'},1000)

    }
    else
    {
        x = 0
        icon_menu.classList.remove('icon-cancel')
        icon_menu.classList.add('icon-menu')
        menu_hide_box.classList.remove('seek')
        menu.style.display = 'none'
    }
})

addEventListener('load', (e) =>
{
    let el_count = sub.length;
    for(var i = 0; i < el_count; i++)
    {
        if(window.localStorage.getItem('kolor_id' + i) == null){window.localStorage.setItem('kolor_id' + i, 'green')}
        sub[i].children[2].classList.add(window.localStorage.getItem('kolor_id' + i))
    }
})

addEventListener('keydown', (e) =>
{
    if(e.keyCode == 69)
    {
        window.localStorage.clear();
        console.log('czyscze cookie');
        window.location.reload();
    }
})

function changecolor()
{
    let index = 0;
    let count = 0;

    sub.forEach(element =>
        {
        if(element.children[2] == this) {index = count}
        count++;
    })

    if(this.classList.contains('green'))
    {
        this.classList.replace('green','red')
        window.localStorage.setItem('kolor_id' + index, 'red')
    }
    else
    {
        this.classList.replace('red','green')
        window.localStorage.setItem('kolor_id' + index, 'green');
    }
}

for (let i = 0; i < sub.length; i++) {sub[i].children[2].addEventListener('click', function() {changecolor.call(this)})}