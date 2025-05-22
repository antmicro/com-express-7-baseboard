selector_to_html = {"a[href=\"references.html#j11\"]": "<img alt=\"_images/J11.png\" id=\"j11\" src=\"_images/J11.png\"/>", "a[href=\"references.html#j16\"]": "<img alt=\"_images/J16.png\" id=\"j16\" src=\"_images/J16.png\"/>", "a[href=\"references.html#j9\"]": "<img alt=\"_images/J9.png\" id=\"j9\" src=\"_images/J9.png\"/>", "a[href=\"references.html#j10\"]": "<img alt=\"_images/J10.png\" id=\"j10\" src=\"_images/J10.png\"/>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'top-start', maxWidth: 1200, interactive: false, duration: [200, 100], delay: [200, 500],

            });
        };
    };
    console.log("tippy tips loaded!");
};
