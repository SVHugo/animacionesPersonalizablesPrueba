const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

const bloque_uno = document.getElementById("bloque_uno");
const bloque_dos = document.getElementById("bloque_dos");

const container__bloques = document.querySelectorAll(".bloque__estatico > div")

var objetoClassCss = {
    bloque_uno: "bloque_show_left",
    bloque_dos: "bloque_show_right"
}
var objetoClassCssdos = {
    bloque_tres: "bloque_show_left",
    bloque_cuatro: "bloque_show_right"
}
var objetoClassCsstres = {
    bloque_cinco: "bloque_show_left",
    bloque_seis: "bloque_show_right"
}
function removerClassUno() {
    container__bloques.forEach(element => {

        for (let key in objetoClassCss) {

            if (element.id == key) {
                /* box1.classList.toogle(bloque_show_left) */
                element.classList.remove(objetoClassCss[key]);
            }
        }
        if(element.id =="bloque_uno"){
            element.style.animation ="none"
        }
        if(element.id == "bloque_dos"){
            element.style.animation ="none"
        }
    });
    
}
function removerClassDos() {
    container__bloques.forEach(element => {

        for (let key in objetoClassCssdos) {

            if (element.id == key) {
                /* box1.classList.toogle(bloque_show_left) */
                element.classList.remove(objetoClassCssdos[key]);
            }
        }
        if(element.id =="bloque_tres"){
            element.style.animation ="none"
        }
        if(element.id == "bloque_cuatro"){
            element.style.animation ="none"
        }
    });
}
function removerClassTres() {
    container__bloques.forEach(element => {
        
        /* console.log(element.id) */
        for (let key in objetoClassCsstres) {

            if (element.id == key) {
                /* box1.classList.toogle(bloque_show_left) */
                element.classList.remove(objetoClassCsstres[key]);
                
            }
        }
        if(element.id =="bloque_cinco"){
            element.style.animation ="none"
        }
        if(element.id == "bloque_seis"){
            element.style.animation ="none"
        }
    });
}
function cajaUno(e) {
    removerClassDos();
    removerClassTres();
    console.log(e.target)
    setTimeout(() => {
        container__bloques.forEach(element => {
            
            for (let key in objetoClassCss) {
                /* console.log(element.id == key) */
                if (element.id == key) {
                    /* box1.classList.toogle(bloque_show_left) */
                    element.classList.add(objetoClassCss[key])
                    /* element.style.animation ="rotarLeft .5s ease-out forwards" */
                    if(element.id =="bloque_uno"){
                        element.style.animation ="rotarLeft .5s ease-out forwards"
                    }
                    if(element.id == "bloque_dos"){
                        element.style.animation ="rotarRigt .5s ease-out forwards"
                    }
                    console.log(element.id)
                    
                }
            }

        });
    }, 500);
}
function cajaDos(e) {
    removerClassUno();
    removerClassTres();

    setTimeout(() => {
        
        container__bloques.forEach(element => {

            for (let key in objetoClassCssdos) {
                console.log(element.id == key)
                if (element.id == key) {
                    /* box1.classList.toogle(bloque_show_left) */
                    element.classList.add(objetoClassCssdos[key]);
                    if(element.id =="bloque_tres"){
                        element.style.animation ="rotarLeft .5s ease-out forwards"
                    }
                    if(element.id == "bloque_cuatro"){
                        element.style.animation ="rotarRigt .5s ease-out forwards"
                    }
                }
            }

        });
    }, 500);

}
function cajaTres(e) {
    removerClassDos();
    removerClassUno();
    setTimeout(() => {
        container__bloques.forEach(element => {

            for (let key in objetoClassCsstres) {
                console.log(element.id == key)
                if (element.id == key) {
                    /* box1.classList.toogle(bloque_show_left) */
                    element.classList.add(objetoClassCsstres[key]);
                    if(element.id =="bloque_cinco"){
                        element.style.animation ="rotarLeft .5s ease-out forwards"
                    }
                    if(element.id == "bloque_seis"){
                        element.style.animation ="rotarRigt .5s ease-out forwards"
                    }
                }
            }

        });
    }, 500);

}
box1.addEventListener('click', cajaUno)
box2.addEventListener('click', cajaDos)
box3.addEventListener('click', cajaTres)
