const PASSWORD = "23/06/26";


function controllaPassword() {

    const inserita =
        document.getElementById("password").value;

    const errore =
        document.getElementById("errore");


    if (inserita === PASSWORD) {

        document.getElementById("login").style.display =
            "none";

        document.getElementById("pagina").style.display =
            "block";

        creaCuori();

    } else {

        errore.innerHTML =
            "La password non è corretta ❤️";

    }
}


/* Premere INVIO funziona */

document
    .getElementById("password")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            controllaPassword();

        }

    });


/* =========================
   CUORI
========================= */

function creaCuore() {

    const cuore =
        document.createElement("div");

    cuore.innerHTML = "❤️";

    cuore.style.position = "fixed";

    cuore.style.bottom = "-30px";

    cuore.style.left =
        Math.random() * 100 + "vw";

    cuore.style.fontSize =
        (15 + Math.random() * 25) + "px";

    cuore.style.zIndex = "2000";

    cuore.style.pointerEvents = "none";

    cuore.style.animation =
        "salita 5s linear forwards";

    document.body.appendChild(cuore);


    setTimeout(() => {

        cuore.remove();

    }, 5000);

}


function creaCuori() {

    setInterval(creaCuore, 600);

}
