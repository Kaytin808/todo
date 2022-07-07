export default function setupTabs() {
    document.querySelectorAll(".tabs_buttons").forEach((button) => {
      button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = document.querySelector(".middle-container");
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelector(
          `.tabs_content[data-tab="${tabNumber}"]`
        );
  
        sideBar.querySelectorAll(".tabs_buttons").forEach((button) => {
          button.classList.remove("tabs_buttons--active");
        });
  
        tabsContainer.querySelectorAll(".tabs_content").forEach((tab) => {
          tab.classList.remove("tabs_content--active");
        });
  
        button.classList.add("tabs_button--active");
        tabToActivate.classList.add("tabs_content--active");
      });
    });
  }