class Navigation extends HTMLElement {
    constructor() {
      	super();
    }
  
    connectedCallback() {
		this.innerHTML = `
        <div class="footer-body">
            <div class="footer">
                <div class="dashboard-container" onclick="pageRouting('dashboard.html')" style="background-color: lightgrey;">
                    <div class="icon-lol">
                        <i class="fa-solid fa-table-columns"></i>
                    </div>
                    <div class="text-lol">
                        <span>Dashboard</span>
                    </div>
                </div>

                <div class="sos-container" onclick="pageRouting('sos.html')">
                    <div class="icon-lol">
                        <i class="fa-solid fa-hand-holding-medical"></i>
                    </div>
                    <div class="text-lol">
                        <span>SOS</span>
                    </div>
                </div>

                <div class="profile-container" onclick="pageRouting('profile.html')">
                    <div class="icon-lol">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="text-lol">
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </div>
		`;
    }
}

customElements.define('navigation-component', Navigation);