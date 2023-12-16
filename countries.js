let countries = [];

let elli = document.querySelector(".ul");
let inp = document.querySelector(".inp")

function render(data){
  elli.innerHTML = ""
  
  data.forEach(function (country){
    let elcountries = document.createElement("li");
    elcountries.setAttribute("class", "ger");
  
    let img = document.createElement("img");
  
    img.setAttribute("src", country.flags.png);
  
    let title = document.createElement("h3");
    title.setAttribute("class", "title");
    title.textContent = country.name.common;
  
    let data = document.createElement("dl");
    data.setAttribute("class", "data");
  
    let dt = document.createElement("dt");
    dt.setAttribute("class", "data__dt");
    dt.textContent = "Population:";
  
    let datadd = document.createElement("dd");
    datadd.setAttribute("class", "data__dd");
    datadd.textContent = country.population;
  
    let datareg = document.createElement("dt");
    datareg.setAttribute("class", "data__reg");
    datareg.textContent = "Region:";
  
    let datalist = document.createElement("dd");
    datalist.setAttribute("class", "data__lists");
    datalist.textContent = country.region;
  
    let dataCapital = document.createElement("dt");
    dataCapital.setAttribute("class", "data__capital");
    dataCapital.textContent = "Capital:";
    let capital = document.createElement("dd");
    capital.setAttribute("class", "capital");
    capital.textContent = country.capital;
  
    elcountries.appendChild(img);
    elcountries.appendChild(title);
    data.appendChild(dt);
    data.appendChild(datadd);
    data.appendChild(datareg);
    data.appendChild(datalist);
    data.appendChild(dataCapital);
    data.appendChild(capital);
    elcountries.appendChild(data);
    elli.appendChild(elcountries);
  
  })
}

render(countries)


fetch("https://restcountries.com/v3.1/all").then((response)=>{
 return response.json()
}).then((data)=>{
  render(data)
  inp.addEventListener("input", function() {
    let rr = []
    data.forEach(function(country) {
      if(country.name.common.toLowerCase().trim().includes(inp.value.toLowerCase().trim())){
        rr.push(country) 
      }
    })
    render(rr)
  })
})




// let elUl = document.querySelector(".ul")
// let input = document.querySelector(".inp")

// function ren(data){
//   elUl.innerHTML = ""
// data.forEach(function(country) {
//   let elLi = document.createElement("li")
//   elLi.setAttribute("class", "ger")
  
//   let elImg = document.createElement("img")
//   elImg.setAttribute("src",  country.flags.png)

//   let eltitle = document.createElement("h3")
//   eltitle.setAttribute("class", "title")
//   eltitle.textContent = country.name.common
//   elLi.appendChild(elImg)
//   elLi.appendChild(eltitle)
//   elUl.appendChild(elLi)

// })
// }

// input.addEventListener("input", function(){
//   let arr = []
//   countries.forEach(function(country){
//     if(country.name.common.toLowerCase().includes(input.value.toLowerCase())){
//       arr.push(country) 
//     } 
//   })
//   ren(arr)
// })
  

// ren(countries)




// let elUl = document.querySelector(".ul")
// let eltamplete = document.querySelector(".template").content
// let elfragment = document.createDocumentFragment()

// countries.forEach(function(country){
//   let eltemp = eltamplete.cloneNode(true)
//   eltemp.querySelector(".ger__img").src = country.flags.png
//   eltemp.querySelector(".title").textContent = country.name.common
//   eltemp.querySelector(".data__dd").textContent = country.population
//   eltemp.querySelector(".data__lists").textContent = country.region
//   eltemp.querySelector(".data__capital-text").textContent = country.capital
//   elfragment.appendChild(eltemp)
// })

// elUl.appendChild(elfragment)