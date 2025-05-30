# -*- coding: utf-8 -*-
#
# This file is execfile()d with the current directory set to its containing dir.
#
# Note that not all possible configuration values are present in this file.
#
# All configuration values have a default; values that are commented out
# serve to show the default.
#
# Updated documentation of the configuration options is available at
# https://www.sphinx-doc.org/en/master/usage/configuration.html

from datetime import datetime

from antmicro_sphinx_utils.defaults import (
    numfig_format,
    extensions as default_extensions,
    myst_enable_extensions as default_myst_enable_extensions,
    myst_fence_as_directive as default_myst_fence_as_directive,
    antmicro_html,
    antmicro_latex
)

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#sys.path.insert(0, os.path.abspath('.'))

# -- General configuration -----------------------------------------------------

# General information about the project.
project = u'COM Express 7 baseboard'
basic_filename = u'com-express-7-baseboard'
authors = u'Antmicro'
copyright = f'{authors}, {datetime.now().year}'

# The short X.Y version.
version = ''
# The full version, including alpha/beta/rc tags.
release = ''

# This is temporary before the clash between myst-parser and immaterial is fixed
sphinx_immaterial_override_builtin_admonitions = False

numfig = True

# If you need to add extensions just add to those lists
extensions = default_extensions
extensions.append("sphinx_inline_tabs")
myst_enable_extensions = default_myst_enable_extensions
myst_fence_as_directive = default_myst_fence_as_directive
extensions.append("sphinx_tippy")

myst_substitutions = {
    "project": project
}

myst_heading_anchors = 4

today_fmt = '%Y-%m-%d'

todo_include_todos=False

# -- Options for HTML output ---------------------------------------------------

html_static_path = ['_static']

html_theme = 'sphinx_immaterial'

html_last_updated_fmt = today_fmt

html_show_sphinx = False

(
    html_logo,
    html_theme_options,
    html_context
) = antmicro_html(pdf_url=f"{basic_filename}.pdf")

html_title = project

(
    latex_elements,
    latex_documents,
    latex_logo,
    latex_additional_files
) = antmicro_latex(basic_filename, authors, project)


tippy_props = {
    "placement": "top-start",
    "maxWidth": 1200,
    "interactive": False,
    "duration": [200, 100],
    "delay": [200, 500],
}

