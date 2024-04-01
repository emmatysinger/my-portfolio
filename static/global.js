console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

document.addEventListener('DOMContentLoaded', () => {
    // Detect if we're on the home page
    const ARE_WE_HOME = document.documentElement.classList.contains("home");

    // Create and prepend the nav
    let nav = document.createElement("nav");
    document.body.prepend(nav);

    // Pages array
    let pages = [
        {url: ".", title: "Home"},
        {url: "project", title: "Projects"},
        {url: "CV", title: "Resume"},
        {url: "contacts", title: "Contact"},
        {url: "https://github.com/emmatysinger", title: "My GitHub"},
        // Add more pages if necessary
    ];

    // Loop over pages to create nav links
    for (let p of pages) {
        let a = document.createElement("a");
        a.href = p.url;
        a.textContent = p.title;
        nav.appendChild(a);
    }

    // Find and mark the current link
    let navLinks = $$('nav a');
    let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
    currentLink?.classList.add("current");

    // Insert the color scheme selector
    document.body.insertAdjacentHTML("afterbegin", `
        <label class="color-scheme">
            Theme:
            <select id="colorSchemeSelector">
                <option value="light dark">Automatic</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </label>
    `);

    // Add event listener to color scheme selector
    const selector = document.getElementById('colorSchemeSelector');
    selector.addEventListener('change', (event) => {
        document.documentElement.style.colorScheme = event.target.value;
    });
});
