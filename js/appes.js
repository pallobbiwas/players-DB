const buttonClick = () =>{
    const inputSearch = document.getElementById('search-input');
    const inputValue = inputSearch.value;
    searchApi(inputValue)
    inputSearch.value = ''; 
}
const searchApi = (inputValues) =>{
    const url = (`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValues}`)
    fetch(url)
    .then(res => res.json())
    .then(data => loopAllData(data))
}
const loopAllData = (players) =>{
    for(const player of players){
        
    }
}