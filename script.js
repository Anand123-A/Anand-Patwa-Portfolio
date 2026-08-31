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
/* =========================================================
   ANAND'S PORTFOLIO AI ASSISTANT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const aiAssistant = document.getElementById("aiAssistant");
    const aiChatWindow = document.getElementById("aiChatWindow");
    const aiLauncher = document.getElementById("aiLauncher");
    const aiClose = document.getElementById("aiClose");
    const aiChatBody = document.getElementById("aiChatBody");
    const aiChatForm = document.getElementById("aiChatForm");
    const aiChatInput = document.getElementById("aiChatInput");
    const aiQuickQuestions =
        document.querySelectorAll(".ai-quick-questions button");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !aiAssistant ||
        !aiChatWindow ||
        !aiLauncher ||
        !aiClose ||
        !aiChatBody ||
        !aiChatForm ||
        !aiChatInput
    ) {
        return;
    }


    /* =====================================================
       OPEN CHAT
    ===================================================== */

    function openAIChat() {

        aiAssistant.classList.add("ai-open");

        aiLauncher.setAttribute("aria-expanded", "true");

        setTimeout(() => {
            aiChatInput.focus();
        }, 350);
    }


    /* =====================================================
       CLOSE CHAT
    ===================================================== */

    function closeAIChat() {

        aiAssistant.classList.remove("ai-open");

        aiLauncher.setAttribute("aria-expanded", "false");
    }


    /* =====================================================
       AUTOMATICALLY OPEN ON PAGE LOAD
    ===================================================== */

    setTimeout(() => {

        openAIChat();

        aiAssistant.classList.add("ai-attention");

        setTimeout(() => {
            aiAssistant.classList.remove("ai-attention");
        }, 3500);

    }, 500);


    /* =====================================================
       LAUNCHER CLICK
    ===================================================== */

    aiLauncher.addEventListener("click", () => {

        openAIChat();

    });


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    aiClose.addEventListener("click", () => {

        closeAIChat();

    });


    /* =====================================================
       ANSWERS
    ===================================================== */

    const answers = {

        "what-can-anand-do": `
            <p><strong>Anand is a versatile freelancer and problem solver.</strong></p>

            <p>
                He can work across programming, web development,
                data & analysis, and technical problem solving.
                Rather than limiting himself to one particular field,
                Anand focuses on understanding the problem and finding
                a practical solution.
            </p>
        `,


        "programming": `
            <p>
                Anand can work on programming-related tasks including
                writing code, debugging, improving existing code,
                and developing practical software solutions.
            </p>

            <p>
                If you have a programming problem or an idea that needs
                to be turned into working code, Anand can help explore
                and build the solution.
            </p>
        `,


        "web-development": `
            <p>
                Yes. Anand can work on web-development projects,
                including building websites, improving existing
                websites, troubleshooting functionality, and making
                interfaces responsive across devices.
            </p>

            <p>
                Whether you have an idea for a website or need help
                improving an existing one, you can discuss the
                requirement with Anand.
            </p>
        `,


        "data-analysis": `
            <p>
                Anand can work with data-analysis projects involving
                datasets, insights, visualization, dashboards and
                analytical problem solving.
            </p>

            <p>
                His portfolio includes several data-focused projects
                demonstrating his ability to turn data into useful
                information and visual insights.
            </p>
        `,


        "problem-solving": `
            <p>
                <strong>Problem solving is at the heart of Anand's
                approach.</strong>
            </p>

            <p>
                A project doesn't always fit neatly into one category.
                Anand approaches a challenge by understanding what
                needs to be achieved and then finding a practical
                technical solution.
            </p>

            <p>
                Programming, web development, analysis, automation,
                debugging or a custom technical challenge — the first
                step is understanding the problem.
            </p>
        `,


        "projects": `
            <p>
                Anand's portfolio contains projects covering different
                areas of programming, web development, data analysis
                and visualization.
            </p>

            <p>
                Some highlighted projects include NEPSE Data Analysis,
                IPL Dashboard, Blinkit Analysis, Netflix Analysis and
                Facial Recognition.
            </p>

            <p>
                You can explore the <strong>Projects</strong> section
                of the portfolio to see them in more detail.
            </p>
        `,


        "work-with-anand": `
            <p>
                <strong>Have a project or problem in mind?</strong>
            </p>

            <p>
                You can reach out to Anand through the
                <strong>Let's Connect</strong> section of this portfolio.
            </p>

            <p>
                Tell him what you're trying to build or what problem
                you're facing, and you can discuss how he may be able
                to help.
            </p>
        `,


        "default": `
            <p>
                I'm Anand's Portfolio Assistant, so I can help you
                explore Anand's work and capabilities.
            </p>

            <p>
                You can ask about his
                <strong>programming</strong>,
                <strong>web development</strong>,
                <strong>data & analysis</strong>,
                <strong>problem-solving</strong>,
                <strong>projects</strong>,
                or how to <strong>work with Anand</strong>.
            </p>
        `

    };


    /* =====================================================
       ADD USER MESSAGE
    ===================================================== */

    function addUserMessage(message) {

        const wrapper = document.createElement("div");

        wrapper.className = "ai-message ai-message-user";

        wrapper.innerHTML = `
            <div class="ai-message-content">
                <p>${escapeHTML(message)}</p>
            </div>
        `;

        aiChatBody.appendChild(wrapper);

        scrollChatToBottom();
    }


    /* =====================================================
       ADD BOT MESSAGE
    ===================================================== */

    function addBotMessage(answer) {

        const wrapper = document.createElement("div");

        wrapper.className = "ai-message ai-message-bot";

        wrapper.innerHTML = `
            <div class="ai-message-avatar">
                ✦
            </div>

            <div class="ai-message-content">
                ${answer}
            </div>
        `;

        aiChatBody.appendChild(wrapper);

        scrollChatToBottom();
    }


    /* =====================================================
       SCROLL CHAT
    ===================================================== */

    function scrollChatToBottom() {

        aiChatBody.scrollTop = aiChatBody.scrollHeight;

    }


    /* =====================================================
       ESCAPE USER INPUT
       Prevents HTML injection.
    ===================================================== */

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =====================================================
       QUESTION CLASSIFICATION
    ===================================================== */

    function getAnswer(question) {

        const text = question
            .toLowerCase()
            .trim();


        /* PROGRAMMING */

        if (
            text.includes("programming") ||
            text.includes("programmer") ||
            text.includes("coding") ||
            text.includes("code") ||
            text.includes("debug") ||
            text.includes("software")
        ) {

            return answers["programming"];

        }


        /* WEB DEVELOPMENT */

        if (
            text.includes("web development") ||
            text.includes("website") ||
            text.includes("web design") ||
            text.includes("frontend") ||
            text.includes("front end") ||
            text.includes("responsive")
        ) {

            return answers["web-development"];

        }


        /* DATA & ANALYSIS */

        if (
            text.includes("data analysis") ||
            text.includes("data") ||
            text.includes("dataset") ||
            text.includes("dashboard") ||
            text.includes("visualization") ||
            text.includes("analytics")
        ) {

            return answers["data-analysis"];

        }


        /* PROBLEM SOLVING */

        if (
            text.includes("problem") ||
            text.includes("solve") ||
            text.includes("solution") ||
            text.includes("technical challenge") ||
            text.includes("custom project")
        ) {

            return answers["problem-solving"];

        }


        /* PROJECTS */

        if (
            text.includes("project") ||
            text.includes("projects") ||
            text.includes("portfolio") ||
            text.includes("nepse") ||
            text.includes("ipl") ||
            text.includes("blinkit") ||
            text.includes("netflix") ||
            text.includes("facial recognition")
        ) {

            return answers["projects"];

        }


        /* WORK WITH ANAND */

        if (
            text.includes("hire") ||
            text.includes("freelance") ||
            text.includes("freelancer") ||
            text.includes("work with") ||
            text.includes("contact") ||
            text.includes("available") ||
            text.includes("collaborate")
        ) {

            return answers["work-with-anand"];

        }


        /* GENERAL CAPABILITIES */

        if (
            text.includes("what can anand do") ||
            text.includes("what does anand do") ||
            text.includes("what can you do") ||
            text.includes("capabilities") ||
            text.includes("skills") ||
            text.includes("specialize") ||
            text.includes("specialises") ||
            text.includes("specializes")
        ) {

            return answers["what-can-anand-do"];

        }


        return answers["default"];

    }


    /* =====================================================
       QUICK QUESTION CLICK
    ===================================================== */

    aiQuickQuestions.forEach(button => {

        button.addEventListener("click", () => {

            const questionType = button.dataset.question;

            const questionText = button.textContent.trim();

            addUserMessage(questionText);


            /*
             * IMPORTANT:
             * Quick-question buttons are intentionally NOT removed.
             * They remain available so the visitor can continue
             * exploring different topics.
             */


            setTimeout(() => {

                addBotMessage(
                    answers[questionType] || answers.default
                );

            }, 350);

        });

    });


    /* =====================================================
       TEXT INPUT
    ===================================================== */

    aiChatForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const question = aiChatInput.value.trim();


        if (!question) {
            return;
        }


        addUserMessage(question);


        aiChatInput.value = "";


        /*
         * IMPORTANT:
         * Quick-question buttons are intentionally NOT removed
         * after typed questions either.
         */


        setTimeout(() => {

            const answer = getAnswer(question);

            addBotMessage(answer);

        }, 400);

    });


});
/* =========================================================
   PORTFOLIO NAVIGATION — MOBILE + DESKTOP
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId === "#home"
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            /*
               Close mobile menu if it is open
            */
            const mobileNavigation =
                document.getElementById("mobileNavigation");

            const menuButton =
                document.getElementById("menuButton");

            if (mobileNavigation) {
                mobileNavigation.classList.remove("active");
            }

            if (menuButton) {
                menuButton.classList.remove("active");
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }

            /*
               Scroll to the requested section
               Works on mobile and desktop.
            */
            const header =
                document.getElementById("siteHeader");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });

});