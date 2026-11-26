
/* ===================================
   MOBILE NAVIGATION
=================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ===================================
   HERO CHART
=================================== */

const heroCanvas = document.getElementById("heroChart");

new Chart(heroCanvas, {

    type: "bar",

    data: {
        labels: [
            "Notebook",
            "Pen",
            "Bag",
            "Pencil"
        ],

        datasets: [{
            label: "Sales (₹)",

            data: [
                1000,
                700,
                2500,
                400
            ],

            backgroundColor: [
                "#7dd3fc",
                "#60a5fa",
                "#34d399",
                "#c4b5fd"
            ],

            borderRadius: 7,

            borderSkipped: false
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return "Sales: ₹" + context.raw.toLocaleString("en-IN");
                    }
                }
            }
        },

        scales: {

            x: {
                ticks: {
                    color: "#dbeafe"
                },

                grid: {
                    display: false
                },

                border: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,

                ticks: {
                    color: "#dbeafe",

                    callback: function(value) {
                        return "₹" + value;
                    }
                },

                grid: {
                    color: "rgba(255,255,255,0.12)"
                },

                border: {
                    display: false
                }
            }
        }
    }

});


/* ===================================
   SALES COMPARISON CHART
=================================== */

const salesCanvas = document.getElementById("salesChart");

new Chart(salesCanvas, {

    type: "bar",

    data: {

        labels: [
            "Notebook",
            "Pen",
            "School Bag",
            "Pencil"
        ],

        datasets: [{

            label: "Sales Amount",

            data: [
                1000,
                700,
                2500,
                400
            ],

            backgroundColor: [
                "#60a5fa",
                "#a78bfa",
                "#34d399",
                "#fbbf24"
            ],

            borderRadius: 9,

            maxBarThickness: 55
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        animation: {
            duration: 1600,
            easing: "easeOutQuart"
        },

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                backgroundColor: "#10243a",

                padding: 12,

                callbacks: {
                    label: function(context) {
                        return "Sales: ₹" + context.raw.toLocaleString("en-IN");
                    }
                }
            }
        },

        scales: {

            x: {
                grid: {
                    display: false
                }
            },

            y: {
                beginAtZero: true,

                ticks: {
                    callback: function(value) {
                        return "₹" + value;
                    }
                }
            }
        }
    }

});


/* ===================================
   FAQ ACCORDION
=================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});


/* ===================================
   FOOTER YEAR
=================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();
