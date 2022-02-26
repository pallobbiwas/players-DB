const buttonClick = () => {
  block();
  const playerContainer = document.getElementById("playr-container");
  playerContainer.textContent = "";
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
    div.innerHTML = `
        
            <div class = "hide">
                <div class="card mb-3">
                    <img src="${
                      player.strThumb
                    }" class="card-img-top" alt="image">
                    <div class="card-body">
                            <h5 class="card-title">${player.strPlayer}</h5>
                            <p class="card-text">${player.strDescriptionEN.slice(
                              0,
                              100
                            )}</p>
                    </div>
                </div>
                <div id="all-button" class="d-flex justify-content-around mb-5">
                        <button class="btn-delete btn btn-danger px-5">delete</button>
                        <button onclick = "details(${
                          player.idPlayer
                        })" class="btn btn-success px-5">details</button>
                </div>
            </div>
        `;
    playerContainer.appendChild(div);
    const deleteButton = document.getElementsByClassName('btn-delete');
    // console.log(deleteButton);
    for (const myButon of deleteButton){
        // console.log(myButon);
        myButon.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.display = "none";
        })
    }
    none();
  }
};

const details = (playerId) => {
  block();
  const details = document.getElementById("detailes-part");
  details.textContent = "";
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detailsLoad(data.players[0]));
};
const detailsLoad = (dataId) => {
  const details = document.getElementById("detailes-part");
  const secondiv = document.createElement("div");
  secondiv.innerHTML = `
        <div class ="w-75 ms-auto">
            <img class = " w- 50 img-fluid" src="${dataId.strThumb}" alt="">
            <h2>${dataId.strPlayer}</h2>
            <h3>${dataId.strNationality}</h3>
            <h4>${dataId.dateBorn}</h4>
            <p>${dataId.strPosition}</p>
        </div>  
    `;
  details.appendChild(secondiv);
  none();
};


const block = () => {
  const loadingButton = document.getElementById("loading");
  loadingButton.classList.remove("d-none");
};
// loading()
const none = () => {
  const loadingButton = document.getElementById("loading");
  loadingButton.classList.add("d-none");
};
