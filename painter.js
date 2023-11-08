// tab section
function hideAllTabs() {
    const tabs = document.querySelectorAll(".sidebar-menu");
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
}

function showTab(tabId) {
    hideAllTabs();
    const tab = document.getElementById(`${tabId}-tab`);
    tab.classList.add("active");
    setActiveButton(tabId);
}

const sidebar = document.querySelector(".sidebar-menu");
const sidebarDropDownButtons = document.querySelectorAll(".menu-item");
let activeDropdown = null; // To keep track of the active dropdown container

sidebarDropDownButtons.forEach((btn) => {
    let dropDownContainer = btn.parentElement;

    btn.addEventListener("click", toggleDropdown);

    function toggleDropdown() {
        if (activeDropdown && activeDropdown !== dropDownContainer) {
            // Close the previously active dropdown
            activeDropdown.classList.remove("active");
            countDropDownContainerHeight(activeDropdown);
        }

        // Toggle the clicked dropdown
        dropDownContainer.classList.toggle("active");
        countDropDownContainerHeight(dropDownContainer);

        // Update the active dropdown
        activeDropdown = dropDownContainer;
    }
});

function countDropDownContainerHeight(dropDownContainer) {
    const dropDownBody = dropDownContainer.querySelector(".sub-menu");
    const dropDownItems = dropDownBody.children;
    let height = 0;

    for (let i = 0; i < dropDownItems.length; i++) {
        height += 32;
    }

    if (dropDownContainer.classList.contains("active")) {
        dropDownBody.style.height = height + "px";
    } else {
        dropDownBody.style.height = 0;
    }
}

function setActiveButton(tabId) {
    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });
    const button = document.getElementById(`${tabId}-btn`);
    button.classList.add("active");
}

// sidebar menu content tab section
function hideAllMenuContents() {
    const menuContents = document.querySelectorAll(".menu-content");
    menuContents.forEach((menuContent) => {
        menuContent.classList.remove("active");
    });
}

function showMenuContent(menuContentId) {
    hideAllMenuContents();
    const menuContent = document.getElementById(
        `${menuContentId}-menu-content`
    );
    menuContent.classList.add("active");
    setActiveSubMenuItem(menuContentId);
}

function setActiveSubMenuItem(menuContentId) {
    const subMenuItems = document.querySelectorAll(".sub-menu-item");
    subMenuItems.forEach((item) => {
        item.classList.remove("active");
        item.parentElement.parentElement.classList.remove("active");
    });
    const subMenuItem = document.getElementById(`${menuContentId}-btn`);
    subMenuItem.classList.add("active");
    subMenuItem.parentElement.parentElement.classList.add("active");
}

// Show tab and menu by default
showTab("interior");
const activeMenuButtonByDefault = document.querySelector(".active-menu-btn");
activeMenuButtonByDefault.click();

// Show popup on page load
window.onload = function () {
    console.log("page loaded");
    initiate_popup({
        target: "#hourly-rate-popup",
        overlay_color: "rgba(0,0,0,0.65)",
        popup_position: "centered",
    });
};
