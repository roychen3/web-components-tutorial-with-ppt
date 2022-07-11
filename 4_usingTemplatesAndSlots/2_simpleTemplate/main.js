const template = document.createElement("template");
template.innerHTML = `
<style>
  p {
    color: white;
    background-color: #666;
    padding: 5px;
  }
</style>

<p><slot name="my-text">My default text</slot></p>
`;

class MyParagraph extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("my-paragraph", MyParagraph);


