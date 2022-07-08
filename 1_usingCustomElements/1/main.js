class CutomButton extends HTMLButtonElement {
    constructor() {
        self = super();
        self.style.cssText = `
          font-weight: 700;
          border-radius: 9px;
          background-color: white;
          padding: 9px 18px;
          cursor: pointer;
      `;
    }
}

window.customElements.define("cutom-button", CutomButton, { extends: "button" });
