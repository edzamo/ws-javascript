let inputName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector(".boton");

buttonSaluda.addEventListener("click", function (event) {
  if (inputName.value !== "") {
    alert("hola" + inputName.value);
  }
});

let name; 
	let surname; 
	
	if (name === undefined) {
		name = "Nombre";
	}
	
	function fullName() {
		let fullname = name + surname;
	}
	
	console.log(fullName());

    let isActive = null;
	
console.log(Boolean(isActive));

let amount = "136.24€";
    let tax = 2;
    let total = amount * tax;
    console.log(typeof total, total);