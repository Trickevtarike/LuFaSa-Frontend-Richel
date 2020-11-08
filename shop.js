window.onload = function () {
  document.getElementById("hamburger").onclick = function () {
    toggle();
  };
  checkFocus();
};

function toggle() {
  document.getElementById("hamburger").classList.toggle("navBuCoIn");
  document.getElementById("content-container").classList.toggle("navBuCoIn");
  document.getElementById("nav").classList.toggle("navNavbarIn");
  getNavInView();
}

function getNavInView() {
  var kontakt = document.getElementById("kontakt");
  var rect = kontakt.getBoundingClientRect();
  if (
    !(
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    )
  ) {
    kontakt.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
}

function filterDropDown() {
  var content = document.getElementById("filter-content");
  var btn = document.getElementById("btn_filter");
  var filter_container = document.getElementById("filter");
  var filterDropdownArrow = document.getElementById("filter-dropdown-arrow");
  content.classList.toggle("show");
  filter_container.classList.toggle("dropedDown");
  filterDropdownArrow.classList.toggle("rotate");
}

function showStars(starCount) {
  var stars = document.getElementsByClassName("goldStar");
  for (i = 0; i < stars.length; i++) {
    stars[i].classList.remove("starShow");
  }
  for (i = 0; i < starCount; i++) {
    stars[i].classList.add("starShow");
  }
}

function starClicked(starCount) {
  var stars = document.getElementsByClassName("goldStar");
  for (i = 0; i < stars.length; i++) {
    stars[i].classList.remove("starClicked");
  }
  for (i = 0; i < starCount; i++) {
    stars[i].classList.add("starClicked");
  }
}

function markeChecked(markeCount) {
  var marken = document.getElementsByClassName("checkmark");
  if (markeCount === 0) {
    marken[0].classList.add("checked");
    for (i = 1; i < marken.length; i++) {
      marken[i].classList.remove("checked");
    }
  } else {
    marken[0].classList.remove("checked");
    marken[markeCount].classList.toggle("checked");
  }
  checked = document.getElementsByClassName("checked");
  if (checked.length === 0) {
    marken[0].classList.add("checked");
  }
}

function kategorieDropDown() {
  var content = document.getElementById("kategorie-content");
  var btn = document.getElementById("btn_kategorie");
  var container = document.getElementById("kategorie");
  var icon = document.getElementById("kategorie-dropdown-arrow");
  content.classList.toggle("showKategorie");
  container.classList.toggle("dropedDown");
  icon.classList.toggle("rotate");
}

function chooseCategory(kat) {
  var categories = document.getElementsByClassName("kategorien");
  var label = document.getElementById("btn-kategorie-label");
  for (i = 0; i < categories.length; i++) {
    categories[i].classList.remove("kategorieGewaehlt");
  }
  categories[kat].classList.add("kategorieGewaehlt");
  label.innerHTML = categories[kat].innerHTML;
  kategorieDropDown();
}

function sortierenDropDown() {
  var content = document.getElementById("sortieren-content");
  var btn = document.getElementById("btn_sortieren");
  var container = document.getElementById("sortieren");
  var icon = document.getElementById("sortieren-dropdown-arrow");
  content.classList.toggle("sort-show");
  container.classList.toggle("dropedDown");
  icon.classList.toggle("rotate");
}

function sortChecked(sort) {
  var checkmarks = document.getElementsByClassName("sort-checkmark");
  var itemLabel = document.getElementsByClassName("sort-item-label");
  var sortLabel = document.getElementById("btn-sortieren-label");
  for (i = 0; i < checkmarks.length; i++) {
    checkmarks[i].classList.remove("sort-checked");
  }
  checkmarks[sort].classList.add("sort-checked");
  sortLabel.classList.add("sort-resize");
  sortLabel.innerHTML = "Sortieren nach: <br>" + itemLabel[sort].innerHTML;
  sortierenDropDown();
}

function filterAnwenden() {
  filterDropDown();
}

function searchFocus() {
  var searchbar = document.getElementById("searchbar");
  searchbar.classList.add("searchFocus");
}

function searchBlur() {
  var searchbar = document.getElementById("searchbar");
  searchbar.classList.remove("searchFocus");
}

function filterBlur() {
  var content = document.getElementById("filter-content");
  var btn = document.getElementById("btn_filter");
  var filter_container = document.getElementById("filter");
  var filterDropdownArrow = document.getElementById("filter-dropdown-arrow");
  content.classList.remove("show");
  filter_container.classList.remove("dropedDown");
  filterDropdownArrow.classList.remove("rotate");
}

function kategorieBlur() {
  var content = document.getElementById("kategorie-content");
  var btn = document.getElementById("btn_kategorie");
  var filter_container = document.getElementById("kategorie");
  var filterDropdownArrow = document.getElementById("kategorie-dropdown-arrow");
  content.classList.remove("showKategorie");
  filter_container.classList.remove("dropedDown");
  filterDropdownArrow.classList.remove("rotate");
}

function sortierenBlur() {
  var content = document.getElementById("sortieren-content");
  var btn = document.getElementById("btn_sortieren");
  var filter_container = document.getElementById("sortieren");
  var filterDropdownArrow = document.getElementById("sortieren-dropdown-arrow");
  content.classList.remove("sort-show");
  filter_container.classList.remove("dropedDown");
  filterDropdownArrow.classList.remove("rotate");
}

function checkFocus() {
  var adjustments = document.getElementsByClassName("adjustment");

  document.addEventListener("click", function (event) {
    var inside = null;

    for (i = 0; i < adjustments.length; i++) {
      if (adjustments[i].contains(event.target)) {
        inside = i;
      }
    }

    if (inside === null) {
      inside = adjustments.length;
    }

    switch (inside) {
      case 0:
        // Fokus: Search
        filterBlur();
        kategorieBlur();
        sortierenBlur();
        break;
      case 1:
        // Fokus: Filter
        searchBlur();
        kategorieBlur();
        sortierenBlur();
        break;
      case 2:
        // Fokus: Kategorie
        searchBlur();
        filterBlur();
        sortierenBlur();
        break;
      case 3:
        // Fokus: Sortieren
        searchBlur();
        filterBlur();
        kategorieBlur();
        break;
      default:
        // Fokus: Off
        searchBlur();
        filterBlur();
        kategorieBlur();
        sortierenBlur();
    }
  });
}
