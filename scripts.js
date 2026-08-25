const sidebar = document.querySelector(".sidebar");
const botonMenu = document.querySelector(".boton-menu");

const menuItemsDropDown = document.querySelectorAll(".dropdown");


/* BOTON PARA ABRIR Y CERRAR SIDEBAR */

botonMenu.addEventListener("click", () => {

    sidebar.classList.toggle("close");

});


/* SUBMENU */

menuItemsDropDown.forEach((menuItem) => {

    const menuLink = menuItem.querySelector(".menu-link");
    const subMenu = menuItem.querySelector(".sub-menu");

    menuLink.addEventListener("click", (event) => {

        event.preventDefault();

        const isActive = menuItem.classList.toggle("sub-menu-toggle");


        if (isActive) {

            subMenu.style.height = `${subMenu.scrollHeight}px`;

            subMenu.style.padding = "0.2rem 0";

        } else {

            subMenu.style.height = "0";

            subMenu.style.padding = "0";

        }


        /* CERRAR LOS OTROS SUBMENUS */

        menuItemsDropDown.forEach((item) => {

            if (item !== menuItem) {

                const otherSubMenu = item.querySelector(".sub-menu");

                item.classList.remove("sub-menu-toggle");

                otherSubMenu.style.height = "0";

                otherSubMenu.style.padding = "0";

            }

        });

    });

});