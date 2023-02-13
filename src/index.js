const alert_menu = document.getElementById("alert_menu");
const open_in_new_tab = document.getElementById("alert_openInNewTab");
const alert_iframe = document.getElementById("alert_iframe");
const hide_alert_menu_button = document.getElementById("hide_alert_menu");
const search_bar = document.getElementById("search-navbar");
const search_bar_mobile = document.getElementById("search-navbar-mobile");
const alert_showInNewTab = document.getElementById("alert_openInNewTab");
const alert_showInFullscreen = document.getElementById(
  "alert_openInFullscreen"
);

function show_alert_menu(alert) {
  // change alert_iframe src to the alert's url; ./alerts/{alert}.html
  alert_iframe.src = `./alerts/${alert}.html`;
  alert_showInNewTab.onclick = () => {
    window.open(`./alerts/${alert}.html`, "_blank");
  };
  alert_showInFullscreen.onclick = () => {
    window.location.href = `./alerts/${alert}.html`;
  };
}

function cleanInput(input) {
  // remove script, html, css, and other dangerous tags; and make lowercase
  return input
    .replace(/<script[^>]*?>.*?<\/script>/gi, "")
    .replace(/<[\/\!]*?[^<>]*?>/gi, "")
    .replace(/<style[^>]*?>.*?<\/style>/gi, "")
    .replace(/<![\s\S]*?--[ \t\n\r]*>/gi, "")
    .toLowerCase();
}

function find_alerts(query) {
  // find the element which contains the query via xpath
  const alert_button = document.evaluate(
    `//button[contains(., '${cleanInput(query)}')]`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  // if the button exists, scroll to it
  if (alert_button) {
    alert_button.scrollIntoView();
    alert_button.focus();
  }
  // if the button doesn't exist, alert the user
  else {
    alert("No alerts found that match: " + cleanInput(query) + "");
  }
}

// event listener for search-navbar if the enter key or search key on ios is pressed
search_bar.addEventListener("keyup", function (e) {
  if (e.key === "Enter" || e.key === "Search") {
    find_alerts(cleanInput(e.target.value));
    search_bar.value = "";
  }
});

// event listener for search-navbar-mobile if the enter key or search key on ios is pressed
search_bar_mobile.addEventListener("keyup", function (e) {
  if (e.key === "Enter" || e.key === "Search") {
    find_alerts(cleanInput(e.target.value));
    search_bar_mobile.value = "";
  }
});

// check if get parameter search exists, if so execute find_alerts
if (window.location.search.includes("search=")) {
  find_alerts(
    window.location.search.replace("?search=", "").replace("%20", " ")
  );
  // remove the search parameter from the url
  window.history.replaceState({}, document.title, "/");
}

window.show_alert_menu = show_alert_menu;
window.find_alerts = find_alerts;
window.cleanInput = cleanInput;
