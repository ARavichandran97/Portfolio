function activateLink(event) {
    // Remove active class from all links
    const links = document.querySelectorAll('.active');
    links.forEach(link => link.classList.remove('active'));
  
    // Add active class to the clicked link
    event.target.classList.add('active');
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};