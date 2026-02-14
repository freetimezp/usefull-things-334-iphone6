document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.querySelector(".home");
    const screen = document.querySelector(".screen");
    const mobile = document.querySelector(".mobile");
    const apps = document.querySelectorAll(".app");
    const appsDiv = document.querySelector(".apps");
    const sidebar = document.querySelector(".sidebar");
    const sidebarContent = document.querySelector(".sidebar-content");

    let isOn = false;

    homeBtn.addEventListener("click", () => {
        isOn = !isOn;

        if (isOn) {
            screen.classList.add("active");
            mobile.classList.add("powered");
        } else {
            screen.classList.remove("active");
            mobile.classList.remove("powered");
            sidebar.classList.remove("active");
        }
    });

    apps.forEach((app) => {
        app.addEventListener("click", () => {
            const appType = app.dataset.app;

            appsDiv.classList.toggle("active");
            sidebar.classList.toggle("active");

            sidebarContent.innerHTML = getAppContent(appType);
        });
    });

    function getAppContent(type) {
        switch (type) {
            case "weather":
                return `
                    <h2>Weather</h2>
                    <p>💦 22°C</p>
                    <p>Sunny with light breeze</p>
                `;
            case "music":
                return `
                    <h2>Now Playing</h2>
                    <p>🎵 Ambient Flow</p>
                    <p>Artist: UI Dreams</p>
                `;
            case "gallery":
                return `
                    <h2>Gallery</h2>
                    <p>💌 128 Photos</p>
                `;
            case "settings":
                return `
                    <h2>Settings</h2>
                    <p>💢 Dark Mode: On</p>
                `;
            default:
                return `<p>App not found</p>`;
        }
    }

    // Tilt effect
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;
        mobile.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${y}deg)`;
    });
});
