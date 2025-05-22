selector_to_html = {"a[href=\"references.html#j11\"]": "<img alt=\"_images/J11.png\" id=\"j11\" src=\"_images/J11.png\"/>", "a[href=\"references.html#j1\"]": "<img alt=\"_images/J1.png\" id=\"j1\" src=\"_images/J1.png\"/>", "a[href=\"references.html#j16\"]": "<img alt=\"_images/J16.png\" id=\"j16\" src=\"_images/J16.png\"/>", "a[href=\"references.html#j13\"]": "<img alt=\"_images/J13.png\" id=\"j13\" src=\"_images/J13.png\"/>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<img alt=\"\" src=\"_images/temperature-sensors-location.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 8 </span><span class=\"caption-text\"><span class=\"caption-text\">\nCOM Express 7 Baseboard location of temperature sensors.</span><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j9\"]": "<img alt=\"_images/J9.png\" id=\"j9\" src=\"_images/J9.png\"/>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<img alt=\"\" src=\"_images/MAFS-CMOS-jumpers.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 7 </span><span class=\"caption-text\"><span class=\"caption-text\">\nCOM Express 7 Baseboard MAFS and CMOS jumpers default configuration.</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j10\"]": "<img alt=\"_images/J10.png\" id=\"j10\" src=\"_images/J10.png\"/>", "a[href=\"references.html#j14\"]": "<img alt=\"_images/J14.png\" id=\"j14\" src=\"_images/J14.png\"/>"}
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
