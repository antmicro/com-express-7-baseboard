selector_to_html = {"a[href=\"pinouts.html\"]": "<h1 class=\"tippy-header\" id=\"pinouts\" style=\"margin-top: 0;\">Pinouts<a class=\"headerlink\" href=\"#pinouts\" title=\"Link to this heading\">\u00b6</a></h1>", "a[href=\"getting_started.html\"]": "<h1 class=\"tippy-header\" id=\"getting-started-guide\" style=\"margin-top: 0;\">Getting started guide<a class=\"headerlink\" href=\"#getting-started-guide\" title=\"Link to this heading\">\u00b6</a></h1><p>This manual will guide you through the initial setup of the open hardware <code class=\"docutils literal notranslate\"><span class=\"pre\">COM</span> <span class=\"pre\">Express</span> <span class=\"pre\">7</span> <span class=\"pre\">Baseboard</span></code>. It describes the basic steps required to assemble the board with required peripheral accessories, write a compiled Board Support Package (BSP) to the processing module and get it booted. If you want to learn more about the <code class=\"docutils literal notranslate\"><span class=\"pre\">COM</span> <span class=\"pre\">Express</span> <span class=\"pre\">7</span> <span class=\"pre\">Baseboard</span></code> itself, go to the <a class=\"reference internal\" href=\"introduction.html\"><span class=\"std std-doc\">Introduction</span></a> section. That section also includes an I/O map that may come in handy when locating interface connectors mentioned in this guide.</p>", "a[href=\"power_supply.html\"]": "<h1 class=\"tippy-header\" id=\"power-supply\" style=\"margin-top: 0;\">Power supply<a class=\"headerlink\" href=\"#power-supply\" title=\"Link to this heading\">\u00b6</a></h1><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">COM</span> <span class=\"pre\">Express</span> <span class=\"pre\">7</span> <span class=\"pre\">Baseboard</span></code> supports two power supply scenarios:</p>", "a[href=\"peripherals.html\"]": "<h1 class=\"tippy-header\" id=\"peripherals\" style=\"margin-top: 0;\">Peripherals<a class=\"headerlink\" href=\"#peripherals\" title=\"Link to this heading\">\u00b6</a></h1><p>Jumpers positions for normal operation are shown on the render bellow.</p>", "a[href=\"introduction.html\"]": "<h1 class=\"tippy-header\" id=\"introduction\" style=\"margin-top: 0;\">Introduction<a class=\"headerlink\" href=\"#introduction\" title=\"Link to this heading\">\u00b6</a></h1><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">Baseboard</span></code> supports COM Express <code class=\"docutils literal notranslate\"><span class=\"pre\">Type</span> <span class=\"pre\">7</span></code> modules. The board breaks out major communications and peripheral interfaces as defined by the COM Express standard. It features front panel connectors for cable interfaces and a backplane edge connector designed for integrating the board into larger systems.</p><p>One of the supported COM Express Type 7 modules is the <code class=\"docutils literal notranslate\"><span class=\"pre\">SolidRun</span> <span class=\"pre\">LX2160A</span></code>. It features 16 Arm Cortex-A72 processors, 4 x 10GbE and 18x PCIe Gen 3.0 lanes and is fully supported by Linux.</p>"}
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
