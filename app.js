const api = "https://api.imgflip.com/get_memes";
async function getData() {
  const rwq = await fetch(api);
  const data = await rwq.json();
let get_data= data.data.memes;
get_data.forEach(element => {
    let body = document.querySelector(".grid");
    body.innerHTML +=`
    <div class="box">
    <img src="${element.url}" alt="${element.id}" >
        <p class="text" >${element.name}</p>
      </div>
    ` 
});
//Download
}

getData();



