const buttonClick = () => {
  const inputSearch = document.getElementById("search-input");
  const inputValue = inputSearch.value;
  searchApi(inputValue);
  inputSearch.value = "";
};
const searchApi = (inputValues) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValues}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loopAllData(data.player));
};
const loopAllData = (players) => {
  const playerContainer = document.getElementById("playr-container");
  for (const player of players) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        
            <div>
                <div class="card">
                    <img src="${player.strThumb}" class="card-img-top" alt="image">
                    <div class="card-body">
                            <h5 class="card-title">${player.strPlayer}</h5>
                            <p class="card-text">${player.strDescriptionEN.slice(0, 100)}</p>
                    </div>
                </div>
                <div id="all-button" class="d-flex justify-content-around mt-3">
                        <button class="btn btn-danger px-5">delete</button><button
                            class="btn btn-success px-5">details</button>
                </div>
            </div>
        `;
    playerContainer.appendChild(div);
  }
};
