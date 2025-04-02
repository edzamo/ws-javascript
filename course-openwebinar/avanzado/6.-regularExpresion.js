let html= "<html><body><h1 class=\"h1 font text\"> Formacion tecnica</h1></body></html>";


let expresion= new RegExp(/<h1.*class="(.*)">.*<\/h1/)

let result= expresion.exec(html)

console.log(result[1])


let phone = new RegExp(/\+34\s?([0-9]+)\s?/)

let isvalid= phone.exec("+34 600u")

console.log(isvalid!== null);