const btn = document.getElementById("button")

btn.addEventListener("click", function(){
    let colorValue  = document.getElementById("color-selec").value
    let mode = document.getElementById("mode-selec").value
    let hexValue = colorValue.slice(1)

    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {

            document.getElementById("container").innerHTML = ""
            const colorsArr = data.colors
            const schemeValues = colorsArr.map(newColor => {
                let showColor = newColor.hex.value
                
                document.getElementById("container").innerHTML += `
                    <div id="colors-display" style="background-color: ${showColor}"><p id="color-tag">${showColor}<p></div>                 
                `
            })
            
    })  
})




