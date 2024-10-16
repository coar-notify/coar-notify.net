# COAR Notify

These are the sources for the Notify documentation at [https://coar-notify.net](https://coar-notify.net)
(was previously at [https://notify.coar-repositories.org](https://notify.coar-repositories.org))

This GitHub repository is also intended to be a "one-stop shop" for all Notify-related development discussions, issues, and documentation.

- If you have a question or feature suggestion, or simply want to join the (mostly technical) discussion(s) about COAR Notify then please start with the [discussions](https://github.com/coar-notify/coar-notify.net/discussions)
- If you have a definite issue (e.g. a bug or documentation error) then please [raise an issue](https://github.com/coar-notify/coar-notify.net/issues/new/choose).

We try to serve all technical documentation for COAR Notify on the website at [https://coar-notify.net/](https://coar-notify.net/). This includes:
- COAR Notify Protocol Specification
  - Notification Patterns
  - Vocabulary
- A catalogue of implementation systems & platforms
- Documented workflows using COAR Notify patterns
- Implementation Guide

## About COAR Notify
<img src="notify_logo.png" alt="COAR Notify logo" width="200"/>

The [*COAR Notify Initiative*](https://www.coar-repositories.org/notify/) is developing and accelerating community adoption of a standard, interoperable, and decentralised approach (using Linked Data Notifications) to link research outputs hosted in the distributed network of repositories with resources from external services, such as overlay-journals and open peer review services.

### Funding acknowledgement
<img src="arcadia_logo.jpg" alt="Arcadia logo" width="200"/>

COAR is extremely grateful for the generous funding support from [Arcadia](https://www.arcadiafund.org.uk), a charitable foundation that works to protect nature, preserve cultural heritage and promote open access to knowledge. COAR has been awarded a US$4 million grant from Arcadia, which will go towards the COAR Notify Project. The funded project began on July 1st, 2022 and will last for four years.

## Running this website locally
These sources are designed to be run or compiled with Hugo (**except** for the search index - see below)
See [installing Hugo](https://gohugo.io/getting-started/installing/)

The 'root' of the Hugo sources is the top-level folder `webroot` in this Git repository. All Hugo commands should be run with that as the working directory.

There are two ways to use Hugo to compile the sources into a "static" website:

### Option1: Using built-in web-server to compile & serve the pages in memory
This is the recommended way for general development and testing. No pages are written to disk - it is just compiled and served from memory:

Run this command:
```bash
hugo server -e development --disableFastRender=true --renderToMemory=true
```

The website will now be available at: http://localhost:1313
I recommend `--disableFastRender=true` because the "live update" feature can be occasionally confusing in terms of browser caching etc. Better to make changes and then reload the browser page as you would normally do.

#### Advantages
- Quick and easy
- Ideal for most development

#### Disadvantages
- No support for the Javascript search index operation or the Javascript search function on the site
- No support for HTTPS (but this should not be an issue)

### Option 2: Compiling into HTML files on the local file-system
To do this, you need to use the following command:
```bash
-e production -d <STATIC_WEBSITE_DESTINATION_FOLDER_PATH> --cleanDestinationDir
```

`<STATIC_WEBSITE_DESTINATION_FOLDER_PATH>` should be replaced with the path to a local folder where you want the static HTML pages etc. to be saved. This folder then becomes the 'root' of a compiled website. You can then either access this directly on the file-system or via a separately configured web-server (e.g. Apache).

#### Advantages
- You can inspect the resulting HTML etc. - occasionally useful for debugging/understanding
- You can generate the search index with `pagefind`
- You can use the search function on the website (if serving from a web-server)

#### Disadvantages
- Less convenient than using the built-in web-server.

#### Search index
The compiled website supports a Javascript search engine (using [pagefind](https://pagefind.app)) which generates and makes use of a locally compiled search index. However, this search index is **not** compiled by Hugo, and must be compiled separately, **after** the Hugo compilation has been run. To compile the search index, run this command (assuming you have [installed a compiled binary of pagefind](https://pagefind.app/docs/installation/)):
```bash
pagefind --site <STATIC_WEBSITE_DESTINATION_FOLDER_PATH>
```
This will add a folder: `<STATIC_WEBSITE_DESTINATION_FOLDER_PATH>/pagefind` which contains everything that the search function needs (Javascript, CSS, search index etc.)
