class Navigation extends HTMLElement {
    constructor() {
      	super();
    }
  
    connectedCallback() {
		this.innerHTML = `
        <div class="footer-body">
            <div class="footer">
                <div class="dashboard-container" onclick="pageRouting('dashboard.html')"  ${window.location.href.includes("dashboard")? 'style="background-color: lightgrey"': 'null'}>
                    <div class="icon-lol">
                        <i class="fa-solid fa-table-columns"></i>
                    </div>
                    <div class="text-lol">
                        <span>Dashboard</span>
                    </div>
                </div>

                <div class="sos-container" onclick="pageRouting('sos.html')" ${window.location.href.includes("sos")? 'style="background-color: lightgrey"': 'null'}>
                    <div class="icon-lol">
                        <i class="fa-solid fa-hand-holding-medical"></i>
                    </div>
                    <div class="text-lol">
                        <span>Emergency</span>
                    </div>
                </div>

                <div class="profile-container" onclick="pageRouting('profile.html')" ${window.location.href.includes("profile")? 'style="background-color: lightgrey"': 'null'}>
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