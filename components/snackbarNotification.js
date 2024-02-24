class SnackbarNotification extends HTMLElement {
    constructor() {
      	super();
      	this.snackbarId = ""
    }
  
    connectedCallback() {
		this.snackbarId = this.getAttribute("snackbarId")

		this.innerHTML = `
			<div class="snackbar-container">
				<div id="${this.snackbarId}" class="snackbar">
				${this.innerHTML}
				</div>	
			</div

		`;
    }
}

function showSnackbar(id) {
    const snackbar = document.getElementById(id);
    snackbar.classList.add("show");
    setTimeout(() => { snackbar.classList.remove("show"); }, 3000);
}

customElements.define('snackbar-component', SnackbarNotification);