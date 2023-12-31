const filterItems = document.querySelectorAll(".filter-btn");
let carsData = JSON.parse(localStorage.getItem("carsData"));

function renderGridCard(value, key) {
  const card = document.createElement("div");
  card.className = "card col-md-3 col-lg-4 w-100";
  card.innerHTML = `
    <div class="col-md-3 col-lg-4 w-100">
      <img class="card-img-top" src="${value.image}" alt="Image">
      <div class="card-body">
        <h5 class="card-title">${value.name}</h5>
        <p class="card-text">${value.description}</p>
        <div class="details d-flex align-items-center justify-content-between">
          <p class="card-price bold m-0 m-0">${value.price} DH</p>
          <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderListCard(value, key) {
  const card = document.createElement("div");
  card.className = "carda flex-column d-flex gap-4 px-5";
  card.innerHTML = `
    <div class="d-flex gap-3 shadow bg-white rounded">
      <img src="${value.image}" class="w-25 card-img-top" alt="Image" style="border-radius: 7%; height: 12rem;">
      <div class="card-body">
        <h5 class="card-title">${value.name}</h5>
        <p class="card-text w-50">${value.description}</p>
        <div class="details d-flex align-items-center justify-content-between">
          <p class="card-price bold m-0">${value.price} DH</p>
          <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderCards(data, view = "grid") {
  cardsContainer.innerHTML = "";
  data.forEach((value, key) => {
    const card = view === "grid" ? renderGridCard(value, key) : renderListCard(value, key);
    cardsContainer.appendChild(card);
  });
}

// Rest of your code remains unchanged...


filterItems.forEach(item => {
  item.addEventListener("click", function () {
    const dataFilter = this.getAttribute("data-filter").toLowerCase();
    const filteredData = carsData.filter(car => {
      const cardCategory = car.category.toLowerCase();
      return dataFilter === "all" || dataFilter === cardCategory;
    });
    renderCards(filteredData);
  });
});

gridButtons.addEventListener("click", function() {
  renderCards(carsData, "grid");
});

listButtons.addEventListener("click", function() {
  renderCards(carsData, "list");
});

// Initial rendering
renderCards(carsData);
