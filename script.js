function getValue(id) {
  return +document.getElementById(id).value;
}

function calculate() {
  let product = getValue("product");
  let material = getValue("material");
  let layer = getValue("layer");
  let effect = getValue("effect");
  let printSide = getValue("printSide");
  let qty = +document.getElementById("qty").value;

  if (qty < 100 || !qty) qty = 100;

  const unitTotal = product + material + layer + effect + printSide;
  const total = unitTotal * qty;

  document.getElementById("basePrice").innerText = "₹" + product;
  document.getElementById("materialPrice").innerText = "₹" + material;
  document.getElementById("layerPrice").innerText = "₹" + layer;
  document.getElementById("effectPrice").innerText = "₹" + effect;
  document.getElementById("sidePrice").innerText = "₹" + printSide;
  document.getElementById("price").innerText = "₹" + total;
}

document.querySelectorAll("select, input").forEach((el) => {
  el.addEventListener("change", calculate);
  el.addEventListener("input", calculate);
});

document.getElementById("file").addEventListener("change", function (e) {
  let file = e.target.files[0];
  let job = document.getElementById("jobName");

  if ((!job.value || job.value === "Job Name") && file) {
    job.value = file.name;
  }
});

function pay() {
  alert("Razorpay will be connected here next.");
}

calculate();