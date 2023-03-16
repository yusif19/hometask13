let linkfetch = "https://restcountries.com/v3.1/all"
let body = document.querySelector("body")
let row = document.querySelector(".row")
let btn = document.querySelector("#button1")
btn.addEventListener("click", function () {
    if (!body.classList.contains(".class1")) {
        body.classList.add(".class1");
    }
    else {
        body.classList.remove(".class1");
    }
})
fetch(linkfetch)
    .then((resp) => resp.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            row.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 mt-5" style="height:100%">
            <div class="card"> 
                <img src=${data[i].flags.svg} class="card-img-top" alt="..." style="height:180px;border:1px solid black">
                <div class="card-body">
                    <p class="card-title fw-bold" style="font-weight:bold">${data[i].name.common}</p><br>
                    <span class="card-text fw-bold">Population: </span><span>${data[i].population}</span><br>
                    <span class="card-text fw-bold">Region: </span><span>${data[i].region}</span><br>
                    <span class="card-text fw-bold">Capital: </span><span>${data[i].capital}</span>
                </div>
            </div>
        </div>
        `
        }
    }
    )
let input = document.querySelector("input");
input.addEventListener("keyup", function () {
    fetch(linkfetch)
        .then((response) => response.json())
        .then(data => {
            row.innerHTML += ""
            for (let i = 0; i < data.length; i++) {
                if (data[i].name.common.toLowerCase().includes(input.value.toLowerCase())) {
                    row.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 mt-5" style="height:100%">
                <div class="card"> 
                    <img src=${data[i].flags.svg} class="card-img-top" alt="..." style="height:180px;border:1px solid black">
                    <div class="card-body">
                        <p class="card-title fw-bold" style="font-weight:bold">${data[i].name.common}</p><br>
                        <span class="card-text fw-bold">Population: </span><span>${data[i].population}</span><br>
                        <span class="card-text fw-bold">Region: </span><span>${data[i].region}</span><br>
                        <span class="card-text fw-bold">Capital: </span><span>${data[i].capital}</span>
                    </div>
                </div>
            </div>
            `

                }
            }
        })


})
//search hissesini yazdim ammma yoxlaya bilmedim isleyir ya yox cunki api address acilmadi error verdi,detail hissesinide eyni sebebden yaza bilmedim