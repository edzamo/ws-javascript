import ComponentBase from "../router/component_base.mjs";

class Home extends ComponentBase {
  #template = "components/home/home.html";
  execute() {
    return this.fetchFile(this.#template);
  }
}


export {Home}