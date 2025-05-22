selector_to_html = {"a[href=\"references.html#j8\"]": "<img alt=\"_images/J8.png\" id=\"j8\" src=\"_images/J8.png\"/>", "a[href=\"references.html#j5\"]": "<img alt=\"_images/J5.png\" id=\"j5\" src=\"_images/J5.png\"/>", "a[href=\"references.html#j9\"]": "<img alt=\"_images/J9.png\" id=\"j9\" src=\"_images/J9.png\"/>", "a[href=\"references.html#j15\"]": "<img alt=\"_images/J15.png\" id=\"j15\" src=\"_images/J15.png\"/>", "a[href=\"references.html#j6\"]": "<img alt=\"_images/J6.png\" id=\"j6\" src=\"_images/J6.png\"/>", "a[href=\"references.html#j11\"]": "<img alt=\"_images/J11.png\" id=\"j11\" src=\"_images/J11.png\"/>", "a[href=\"references.html#j1\"]": "<img alt=\"_images/J1.png\" id=\"j1\" src=\"_images/J1.png\"/>", "a[href=\"power_supply.html\"]": "<h1 class=\"tippy-header\" id=\"power-supply\" style=\"margin-top: 0;\">Power supply<a class=\"headerlink\" href=\"#power-supply\" title=\"Link to this heading\">\u00b6</a></h1><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">COM</span> <span class=\"pre\">Express</span> <span class=\"pre\">7</span> <span class=\"pre\">Baseboard</span></code> supports two power supply scenarios:</p>", "a[href=\"references.html#j2\"]": "<img alt=\"_images/J2.png\" id=\"j2\" src=\"_images/J2.png\"/>", "a[href=\"#id1\"]": "<figure class=\"align-default\" id=\"id1\">\n<img alt=\"\" src=\"_images/io-map.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Figure 1 </span><span class=\"caption-text\"><span class=\"caption-text\">\nCOM Express 7 Baseboard interface map</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">\u00b6</a></span></p></figcaption>\n</figure>", "a[href=\"references.html#sw1\"]": "<img alt=\"_images/SW1.png\" id=\"sw1\" src=\"_images/SW1.png\"/>", "a[href=\"references.html#j100\"]": "<img alt=\"_images/J100.png\" id=\"j100\" src=\"_images/J100.png\"/>", "a[href=\"references.html#j3\"]": "<img alt=\"_images/J3.png\" id=\"j3\" src=\"_images/J3.png\"/>", "a[href=\"references.html#j10\"]": "<img alt=\"_images/J10.png\" id=\"j10\" src=\"_images/J10.png\"/>", "a[href=\"references.html#j16\"]": "<img alt=\"_images/J16.png\" id=\"j16\" src=\"_images/J16.png\"/>", "a[href=\"references.html#j4\"]": "<img alt=\"_images/J4.png\" id=\"j4\" src=\"_images/J4.png\"/>"}
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
