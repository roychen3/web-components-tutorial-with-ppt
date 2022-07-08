const template = document.createElement("template");
template.innerHTML = `
<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin-bottom: 9px;
    padding: 9px;
    font-size: large;
    background-color: cyan;
  }
</style>

<ul>
  <li>text 1</li>
  <li>text 2</li>
  <li>text 3</li>
</ul>
`;

class CustomList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}


window.customElements.define("custom-list", CustomList);
