doccument.addeventlistner("DOMcontentloaded",() => {
  const calculatebutton = document.getElementById("calculateBtn");
  const inputfields = document.getElementById("inputFields");
  const calculatorcontainer = document.getElementById("calculator-container");
  const result = document.getElementById("result");
 
  const shapes = {
    rectangle: {
        inputs: ["Length", "Width"],
        calculate: (values) => values[0] * values[1],
    },
    circle: {
        inputs: ["radius"],
        calculate: (values) => Math.PI * Math.pow(values[0],2),
    },
    square: {
        inputs: ["side"],
        calculate: (values) => Math.pow(values[0],2),
    },
    triangle: {
        inputs: ["base", "hight"],
        calculate: (values) => values[0] * values[1] * 0.5,
    },
    pararellogram: {
        inputs: ["base", "hight"],
        calculate: (values) => values[0] * values[1],
    },
    elipsoidal: {
        inputs: ["Major Axis (a)", "Minor Axis (b)"],
        calculate: (values) => Math.PI * values[0] * values[1],
    },
    rectangle: {
        inputs: ["Length", "Width"],
        calculate: (values) => values[0] * values[1],
    },
  }

  function updateinputs(){
    result.textContent = ("Area: 00.00")
    const seclectedshape = calculatorcontainer.values

    if(!seclectedshape){
        inputfields.innerHTML = ""
        return;
    }
    
  }
})
 