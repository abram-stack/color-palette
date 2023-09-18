const btnColor = document.getElementById('btnColor')
const colorSelect = document.getElementById('colorSelect')
const colorInput = document.getElementById('colorInput')
const paletteContainer = document.getElementById('paletteContainer')


btnColor.addEventListener('click', function () {
  paletteContainer.innerHTML = ``
    const selectedColor = colorInput.value.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${colorSelect.value}&count=5`)
        .then(res => res.json())
        .then(data =>{
            const colorsArray = data.colors

            colorsArray.forEach((color) => {
                renderColorPalette(color.hex)
            })
        })
})
    
function renderColorPalette(color){
    paletteContainer.innerHTML += `
        <div class="colorPalette">
                <div class="paletteContent" id='paletteContent' style="background-color: ${color.value}" ></div>
                <div class="paletteHex"><p>${color.value}</p></div>
            </div>
    `;  
}

/**
nst colorSelect = document.getElementById('colorSelect')
const colorInput = document.getElementById('colorInput')
const paletteContainer = document.getElementById('paletteContainer')

let htmlStrings = ``

btnColor.addEventListener('click', function(){
    const selectedColor = colorInput.value.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${colorSelect.value}&count=5`)
        .then(res => res.json())
        .then(data =>{
            const colorsArray = data.colors

            colorsArray.forEach((color) => {
                renderColorPalette(color.hex)
            })
        })
})
    
function renderColorPalette(color){
    paletteContainer.innerHTML += `
        <div class="colorPalette">
                <div class="paletteContent" id='paletteContent' style="background-color: ${color.value}"></div>
                <div class="paletteHex"><p>${color.value}</p></div>
            </div>
    `;  
}

/**
 * <div class="paletteContainer" id='paletteContainer'>
            <div class="colorPalette">
                <div class="paletteContent"></div>
                <div class="paletteHex"><p>#F111111</p></div>
            </div>
        </div>
*/