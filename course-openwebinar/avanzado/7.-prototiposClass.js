let inputHtml = `<!DOCTYPE html>

<head></head>

<body>
    <p> Web de viaje</p>
    <div class="producto">
        <div class="imagen">
            <img src="beach.jpg"/>
        </div>

        <div class="content">
            <p class="title"> Vacaciones en la playa </p>
            <p class="desc"> Para dos personas con pension completa </p>
            <p class="price"> por noche /persona </p>

        </div>
    </div>
</body>

</html>`;

class Extractor {
  #value;

  constructor(html, pattern) {
    this.#value = this.#extract(html, pattern);
  }

  get value() {
    return this.#value;
  }

  #extract(html, pattern) {
    let capture = pattern.exec(html);
    return capture[1];
  }
}

class Product {
  #title;
  #image;

  constructor(title, image) {
    this.#image = image;
    this.#title = title;
  }

  get title() {
    return this.#title;
  }
  get image() {
    return this.#image;
  }
}

let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)"\/>/));
let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));
let product = new Product(title, image);
product: Product;

console.log(image.value);

console.log(title.value);
console.log(product)