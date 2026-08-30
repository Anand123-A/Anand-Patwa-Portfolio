/* =========================================================
   ANAND PATWA — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. ELEMENT REFERENCES
   ========================================================= */

const siteHeader =
    document.getElementById("siteHeader");

const menuButton =
    document.getElementById("menuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalBackdrop =
    document.querySelector(".project-modal-backdrop");

const projectButtons =
    document.querySelectorAll(
        ".project-details-button"
    );

const projectZoomButtons =
    document.querySelectorAll(
        ".project-zoom"
    );

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );

const desktopNavigationLinks =
    document.querySelectorAll(
        ".desktop-navigation a"
    );

const mobileNavigationLinks =
    document.querySelectorAll(
        ".mobile-navigation a"
    );


/* =========================================================
   2. HEADER SCROLL EFFECT
   ========================================================= */

function updateHeader() {

    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 40) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);

updateHeader();


/* =========================================================
   3. MOBILE MENU
   ========================================================= */

function openMobileMenu() {

    if (!mobileNavigation || !menuButton) {
        return;
    }

    mobileNavigation.classList.add(
        "active"
    );

    menuButton.classList.add(
        "active"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

}


function closeMobileMenu() {

    if (!mobileNavigation || !menuButton) {
        return;
    }

    mobileNavigation.classList.remove(
        "active"
    );

    menuButton.classList.remove(
        "active"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


function toggleMobileMenu() {

    if (!mobileNavigation) {
        return;
    }

    if (
        mobileNavigation.classList.contains(
            "active"
        )
    ) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* =========================================================
   4. MOBILE NAVIGATION LINKS
   ========================================================= */

mobileNavigationLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    }
);


/* =========================================================
   5. SMOOTH SCROLL
   ========================================================= */

navigationLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const targetElement =
                    document.querySelector(
                        targetId
                    );

                if (!targetElement) {
                    return;
                }

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                closeMobileMenu();

            }
        );

    }
);


/* =========================================================
   6. PROJECT FILTERS
   ========================================================= */

filterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    (filter) => {

                        filter.classList.remove(
                            "active"
                        );

                    }
                );

                this.classList.add(
                    "active"
                );

                const selectedFilter =
                    this.dataset.filter;

                projectCards.forEach(
                    (card) => {

                        const categories =
                            card.dataset.category ||
                            "";

                        if (
                            selectedFilter === "all" ||
                            categories
                                .split(" ")
                                .includes(
                                    selectedFilter
                                )
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   7. PROJECT MODAL — OPEN
   ========================================================= */

function openProjectModal() {

    if (!projectModal) {

        console.error(
            "Project modal was not found."
        );

        return;

    }

    projectModal.classList.add(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   8. PROJECT MODAL — CLOSE
   ========================================================= */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   9. ALL PROJECT BUTTONS
   ========================================================= */

const allProjectOpenButtons =
    document.querySelectorAll(
        "[data-open-project]"
    );


allProjectOpenButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            function (event) {

                const projectName =
                    this.dataset.openProject;

                if (
                    projectName === "nepse"
                ) {

                    event.preventDefault();
                    event.stopPropagation();

                    openProjectModal();

                }

            }
        );

    }
);


/* =========================================================
   10. PROJECT MODAL — CLOSE BUTTON
   ========================================================= */

if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =========================================================
   11. PROJECT MODAL — BACKDROP
   ========================================================= */

if (projectModalBackdrop) {

    projectModalBackdrop.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =========================================================
   12. ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProjectModal();

        }

        if (
            event.key === "Escape" &&
            mobileNavigation &&
            mobileNavigation.classList.contains(
                "active"
            )
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   13. CONTACT FORM — OPEN DEFAULT MAIL APPLICATION
   ========================================================= */

/* =========================================================
   13. CONTACT FORM — OPEN DEFAULT MAIL APPLICATION
   ========================================================= */

const contactSubmit =
    document.getElementById("contactSubmit");


if (contactSubmit) {

    contactSubmit.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();


            /* =================================================
               GET FORM FIELDS
            ================================================= */

            const nameInput =
                document.getElementById("contactName");

            const emailInput =
                document.getElementById("contactEmail");

            const messageInput =
                document.getElementById("contactMessage");


            if (
                !nameInput ||
                !emailInput ||
                !messageInput
            ) {

                console.error(
                    "Contact form fields were not found."
                );

                return;

            }


            /* =================================================
               READ USER INPUT
            ================================================= */

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            /* =================================================
               VALIDATION
            ================================================= */

            if (!name) {

                nameInput.focus();

                return;

            }


            if (!email) {

                emailInput.focus();

                return;

            }


            if (!message) {

                messageInput.focus();

                return;

            }


            /* =================================================
               VALIDATE EMAIL
            ================================================= */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                emailInput.focus();

                return;

            }


            /* =================================================
               CREATE SUBJECT
            ================================================= */

            const subject =
                encodeURIComponent(
                    "Portfolio Contact — " +
                    name
                );


            /* =================================================
               CREATE EMAIL BODY
            ================================================= */

            const body =
                encodeURIComponent(
                    "Hello Anand,\n\n" +

                    "Name: " +
                    name +
                    "\n" +

                    "Email: " +
                    email +
                    "\n\n" +

                    "Message:\n" +
                    message
                );


            /* =================================================
               CREATE MAILTO LINK
            ================================================= */

            const mailtoURL =
                "mailto:aanandpatwa2021@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;


            /* =================================================
               CREATE TEMPORARY LINK
               
               This intentionally uses an actual <a> element
               with href="mailto:..." just like the email
               address already present on the page.
            ================================================= */

            const mailLink =
                document.createElement("a");


            mailLink.href =
                mailtoURL;


            mailLink.style.display =
                "none";


            document.body.appendChild(
                mailLink
            );


            /* =================================================
               TRIGGER MAILTO
            ================================================= */

            mailLink.click();


            /* =================================================
               CLEAN UP
            ================================================= */

            setTimeout(
                function () {

                    mailLink.remove();

                },
                100
            );

        }
    );

}

/* =========================================================
   14. REVEAL ANIMATIONS
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".expertise-card, " +
        ".project-card, " +
        ".research-item, " +
        ".timeline-item, " +
        ".contact-box, " +
        ".learning-bar"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   15. ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


if (
    "IntersectionObserver" in window
) {

    const navigationObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const currentSection =
                            entry.target.getAttribute(
                                "id"
                            );


                        desktopNavigationLinks.forEach(
                            (link) => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${currentSection}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        (section) => {

            navigationObserver.observe(
                section
            );

        }
    );

}


/* =========================================================
   16. PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


/* =========================================================
   17. BUTTON HOVER PREPARATION
   ========================================================= */

const interactiveButtons =
    document.querySelectorAll(
        "button, " +
        ".primary-button, " +
        ".secondary-button, " +
        ".nav-contact"
    );


interactiveButtons.forEach(
    (button) => {

        button.addEventListener(
            "mouseenter",
            function () {

                this.style.willChange =
                    "transform";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                this.style.willChange =
                    "auto";

            }
        );

    }
);


/* =========================================================
   18. KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            if (
                event.key === "Tab"
            ) {

                /*
                   Browser handles normal
                   focus behaviour inside
                   the modal.
                */

            }

        }

    }
);


/* =========================================================
   19. PREVENT IMAGE DRAGGING
   ========================================================= */

const projectImages =
    document.querySelectorAll(
        ".project-screenshot, " +
        ".modal-image-card img, " +
        ".profile-photo"
    );


projectImages.forEach(
    (image) => {

        image.addEventListener(
            "dragstart",
            function (event) {

                event.preventDefault();

            }
        );

    }
);


/* =========================================================
   20. PROFILE IMAGE HOVER SUPPORT
   ========================================================= */

const profilePhoto =
    document.querySelector(
        ".profile-photo"
    );


if (profilePhoto) {

    profilePhoto.addEventListener(
        "mouseenter",
        function () {

            this.style.willChange =
                "transform";

        }
    );


    profilePhoto.addEventListener(
        "mouseleave",
        function () {

            this.style.willChange =
                "auto";

        }
    );

}


/* =========================================================
   21. CONSOLE CONFIRMATION
   ========================================================= */

console.log(
    "Anand Patwa Portfolio — JavaScript loaded successfully."
);