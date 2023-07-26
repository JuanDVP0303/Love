/*Declarando e inicializando las constantes de las imagenes usadas*/

const foto1 = document.querySelector("#uno")
const foto2 = document.querySelector("#dos")
const foto3 = document.querySelector("#tres")
const foto4 = document.querySelector("#cuatro")
const foto5 = document.querySelector("#cinco")
const titulo = document.querySelector(".titulo")
const titulo2 = document.querySelector(".titulo-contenedor2")
const boton1 = document.querySelector(".boton-primero")
const boton2 = document.querySelector(".boton-segundo")
const boton3 = document.querySelector(".boton-tercero")

const primeraPantalla = document.querySelector(".primera-pantalla")
const containerMasArrecho = document.querySelector(".container-mas-arrecho")
const terceraPantalla = document.querySelector(".tercera-pantalla")
const texto1 = document.querySelector(".uno")
const texto2 = document.querySelector(".dos")
const texto3 = document.querySelector(".tres")
const texto4 = document.querySelector(".cuatro")
const texto6 = document.querySelector(".seis")

const corazon5 = document.querySelector(".cinco")
const coraContainer = document.querySelector(".corazon-container")
	
/*Array de las url de las imagenes*/

let imagenes = [
	'https://i.imgur.com/uZs4XZa.jpg', 'https://i.imgur.com/yQa09NZ.jpg',
	 'https://i.imgur.com/UVkcvuY.jpg', 'https://i.imgur.com/0OlKBL8.jpg',
	 'https://i.imgur.com/6TgSa0R.jpg'
	]


boton1.addEventListener("click", function(){
	primeraPantalla.classList.add("primera-pantalla-faded")
	containerMasArrecho.classList.add("container-mas-arrecho-faded")

})

boton2.addEventListener("click", function() {
	containerMasArrecho.classList.add("container-mas-arrecho-desfaded")
	terceraPantalla.style.transform = "translate(0)"
	terceraPantalla.style.opacity = "1"
	texto1.style.opacity = "1"
	texto1.style.transform = "translate(0)"


})


console.log("Hola")




/*Aplicando un background image a cada uno de los contenedores imagenes*/

foto1.style.backgroundImage = `url(${imagenes[0]})`
foto2.style.backgroundImage = `url(${imagenes[1]})`
foto3.style.backgroundImage = `url(${imagenes[2]})`
foto4.style.backgroundImage = `url(${imagenes[3]})`
// foto5.style.backgroundImage = `url(${imagenes[3]})`

/*funciones, haciendo que el contenedor de la imagen se agrande al darle click*/


foto1.addEventListener("click", function(){
	foto1.classList.toggle("uno-move")
	foto2.classList.remove("dos-move")
	foto3.classList.remove("tres-move")
	foto4.classList.remove("cuatro-move")

	titulo.innerText ="El inicio de nuestra relacion"

	titulo2.style.display = "none"
})

foto2.addEventListener("click", function(){
	foto2.classList.toggle("dos-move")
	foto3.classList.remove("tres-move")
	foto1.classList.remove("uno-move")
	foto4.classList.remove("cuatro-move")
	titulo.innerText ="Cuando no sabia que tu familia me odiaba"
	titulo2.style.display = "none"

})

foto3.addEventListener("click", function(){
	foto3.classList.toggle("tres-move")
	foto1.classList.remove("uno-move")
	foto2.classList.remove("dos-move")
	foto4.classList.remove("cuatro-move")
	titulo.innerText ="Fotos juntos para un videito que ibas a hacer"
	titulo2.style.display = "none"

})

foto4.addEventListener("click", function(){
	foto4.classList.toggle("cuatro-move")
	foto1.classList.remove("uno-move")
	foto2.classList.remove("dos-move")
	foto3.classList.remove("tres-move")
	titulo.innerText ="Un dia muy lindo junto a ti"

	titulo2.style.display = "none"

})

//Animacion del final del programa

let i = 0;
boton3.addEventListener("click", function() {

i++

	if (i == 1) {
	console.log("click")
	texto2.style.opacity = "1"
	texto2.style.transform = "translate(0)"


	}
if (i == 2) {
	console.log("click")
	texto3.style.opacity = "1"
	texto3.style.transform = "translate(0)"
}

if (i == 3) {
	console.log("click")
	texto4.style.opacity = "1"
	texto4.style.transform = "translate(0)"
}

if (i == 4) {
	console.log("click")
	texto1.style.opacity = "0"
	texto2.style.opacity = "0"
	texto3.style.opacity = "0"
	texto4.style.opacity = "0"
	boton3.style.opacity = "0"
	boton3.style.pointerEvents = "none"
	coraContainer.classList.remove("none")
	corazon5.classList.add("cinco")

	// corazon5.style.transform = "translate(350px, -130px)"

	

}

})




coraContainer.addEventListener("click", () => {
	console.log("cora click")
	corazon5.style.opacity = "0"
	texto6.classList.remove("none")
} )


