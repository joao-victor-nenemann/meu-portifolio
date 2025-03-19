class MobileNavbar {
    constructor(MobileMenu) {
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active";
    }

    addClickEvent() {
        this.MobileMenu.addClickEventlLiistener("click", () => console.log("oi"));
    }

    init() {
        if (thais.MobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar
