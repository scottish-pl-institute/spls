// Captures the console of the browser.
let browser = window.console;

/* Lazily loads an embedded instance of Google Maps. */
function displayWhenReady(mapId, spinnerId) {
    // Remove the spinner.
    let spinner = document.getElementById(spinnerId);
    if (spinner == void 0) {
        browser.error("error: cannot locate spinner #" + spinnerId);
        return;
    }
    spinner.remove();

    // Render the iframe.
    let map = document.getElementById(mapId);
    if (map == void 0) {
        browser.error("error: cannot locate map instance #" + mapId);
        return;
    }
    map.style = "display: block;";
}
