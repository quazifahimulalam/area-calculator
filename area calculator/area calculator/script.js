document.addEventListener("DOMContentLoaded", ()=>{
    const shapeSelector = document.getElementById("shapeSelector");
    const inputFields = document.getElementById("inputFields");
    const calculateBtn = document.getElementById("calculateBtn");
    const result = document.getElementById("result");
    const shapes = {
        rectangle: {
            inputs: ["Length", "Width"],
            calculate: (values) => values[0] * values[1],
        },
        circle: {
            inputs: ["Radius"],
            calculate: (values) => Math.PI * Math.pow(values[0], 2),
        },
        triangle: {
            inputs: ["Base", "Height"],
            calculate: (values) => 0.5 * values[0] * values[1],
        },
        square: {
            inputs: ["Side"],
            calculate: (values) => Math.pow(values[0], 2),
        },
        parallelogram: {
            inputs: ["Base", "Height"],
            calculate: (values) => values[0] * values[1],
        },
        ellipse: {
            inputs: ["Major Axis (a)", "Minor Axis (b)"],
            calculate: (values) => Math.PI * values[0] * values[1],
        },
    };
    function updateInputs() {
        result.textContent = "Area: 00.00";
        const selectedShape = shapeSelector.value;
        if(!selectedShape){
            inputFields.innerHTML = "";
            return
        }
        const shape = shapes[shapeSelector.value];
        inputFields.innerHTML = shape.inputs
            .map((label, index) => `<input type="number" placeholder="${label}" id="input${index}" required>`)
            .join("");
    }
    shapeSelector.addEventListener("change", updateInputs);
    calculateBtn.addEventListener('click', ()=> {
        const selectedShape =  shapeSelector.value;
        if(!selectedShape){
            result.textContent = "Please select a shape."
            return;
        }
        const shape = shapes[selectedShape];
        const values = shape.inputs.map((_, index)=>parseFloat(document.getElementById(`input${index}`).value))
        if(values.some(isNaN)){
             result.textContent = "Please enter a valid number."
        }
        else{
            const area = shape.calculate(values);
            result.textContent = `Area: ${area.toFixed(2)}`;
        }
    })
    updateInputs();
})
 