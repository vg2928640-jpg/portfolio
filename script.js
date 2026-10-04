const menu = document.getElementById("menu");
const nav = document.getElementById("nav");


// Mobile menu

menu.onclick = function () {

    nav.classList.toggle("open");

};


// Menu click karne ke baad close

nav.querySelectorAll("a").forEach(function (link) {

    link.onclick = function () {

        nav.classList.remove("open");

    };

});


// Contact form

function sendMail(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            "Portfolio Contact from " + name
        );


    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" +
            message
        );


    window.location.href =
        "mailto:vg2928640@gmail.com" +
        "?subject=" +
        subject +
        "&body=" +
        body;
}