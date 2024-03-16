"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");
  const button = document.querySelector(".btn");
  const result = document.querySelector(".result");
  const reset = document.getElementById("reset");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    const resDiscriminant = b ** 2 - 4 * a * c;
    const resX1 = (-b + Math.sqrt(resDiscriminant)) / (2 * a);
    const resX2 = (-b - Math.sqrt(resDiscriminant)) / (2 * a);

    console.log("click");
    typeText(
      result,
      `
D = b² - 4 * a * c

D = ${b}² - 4 * (${a}) * (${c})

D = ${b ** 2} - ${4 * a * c}

D = ${resDiscriminant.toFixed(2)}

==========================

x1 = -b + √D / 2 * a

x1 = ${-b.toFixed(2)} + √${resDiscriminant.toFixed(2)} / 2 * (${a})

x1 = ${-b.toFixed(2) + Math.sqrt(resDiscriminant).toFixed(2)} / (${2 * a})

x1 = ${resX1.toFixed(2)}

==========================

x2 = -b - √D / 2 * a

x2 = ${-b.toFixed(2)} - √${resDiscriminant} / 2 * (${a})

x2 = ${-b.toFixed(2) - Math.sqrt(resDiscriminant)} / (${2 * a})

x2 = ${resX2.toFixed(2)}
`
    );
  });

  reset.addEventListener("click", () => {
    // Очистка полей ввода
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";

    // Очистка результата
    result.innerHTML = "";
  });

  function typeText(element, text) {
    let lines = text.split("\n");
    let index = 0;

    function type() {
      element.innerHTML += lines[index];
      index++;
      if (index < lines.length) {
        setTimeout(() => {
          element.innerHTML += "<br>";
          type();
        }, 150);
      }
    }

    type();
  }
});
