selector_to_html = {"a[href=\"references.html#j6\"]": "<img alt=\"_images/J6.png\" id=\"j6\" src=\"_images/J6.png\"/>", "a[href=\"pinouts.html\"]": "<h1 class=\"tippy-header\" id=\"pinouts\" style=\"margin-top: 0;\">Pinouts<a class=\"headerlink\" href=\"#pinouts\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"references.html#sw1\"]": "<img alt=\"_images/SW1.png\" id=\"sw1\" src=\"_images/SW1.png\"/>", "a[href=\"references.html#j16\"]": "<img alt=\"_images/J16.png\" id=\"j16\" src=\"_images/J16.png\"/>", "a[href=\"references.html#j7\"]": "<img alt=\"_images/J7.png\" id=\"j7\" src=\"_images/J7.png\"/>", "a[href=\"#id2\"]": "<figure class=\"align-default\" id=\"id2\">\n<img alt=\"\" src=\"_images/power-indicator-LEDs.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 6 </span><span class=\"caption-text\"><span class=\"caption-text\">\nCOM Express 7 Baseboard power indicator LEDs.</span><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#j12\"]": "<img alt=\"_images/J12.png\" id=\"j12\" src=\"_images/J12.png\"/>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<img alt=\"\" src=\"_images/ce7-power-connection.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 5 </span><span class=\"caption-text\"><span class=\"caption-text\">\nCOM Express 7 Baseboard DC power connection with polarity marking (red: VCC, black: GND).</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>"}
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
