function getValue(id) {
  const element = document.getElementById(id);
  return element ? +element.value : 0;
}

function formatPrice(value) {
  return "₹" + value;
}

function normalizeQuantity(qty) {
  if (!qty || qty < 100) return 100;
  return qty;
}

function calculate() {
  const product = getValue("product");
  const material = getValue("material");
  const layer = getValue("layer");
  const effect = getValue("effect");
  const printSide = getValue("printSide");

  const qtyInput = document.getElementById("qty");
  let qty = qtyInput ? +qtyInput.value : 100;
  qty = normalizeQuantity(qty);

  if (qtyInput && +qtyInput.value < 100) {
    qtyInput.value = qty;
  }

  const unitTotal = product + material + layer + effect + printSide;
  const subTotal = unitTotal * qty;

  // GST Calculation
const sgst = subTotal * 0.09;
const cgst = subTotal * 0.09;
const finalTotal = subTotal + sgst + cgst;

  // Breakdown UI
  document.getElementById("basePrice").innerText = formatPrice(product);
  document.getElementById("materialPrice").innerText = formatPrice(material);
  document.getElementById("layerPrice").innerText = formatPrice(layer);
  document.getElementById("effectPrice").innerText = formatPrice(effect);
  document.getElementById("sidePrice").innerText = formatPrice(printSide);

  // GST UI
  document.getElementById("subTotal").innerText = formatPrice(subTotal);
document.getElementById("cgst").innerText = formatPrice(Math.round(cgst));
document.getElementById("sgst").innerText = formatPrice(Math.round(sgst));
document.getElementById("finalTotal").innerText = formatPrice(Math.round(finalTotal));
}

function setMinimumDeliveryDate() {
  const deliveryInput = document.getElementById("delivery");
  if (!deliveryInput) return;

  const date = new Date();
  date.setDate(date.getDate() + 7);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;
  deliveryInput.min = minDate;
  deliveryInput.value = minDate;
}

function handleFileNameUpdate(event) {
  const file = event.target.files[0];
  const job = document.getElementById("jobName");

  if (!job) return;

  if ((!job.value || job.value === "Job Name") && file) {
    job.value = file.name;
  }
}

function bindEvents() {
  document.querySelectorAll("select, input").forEach((el) => {
    el.addEventListener("change", calculate);
    el.addEventListener("input", calculate);
  });

  const fileInput = document.getElementById("file");
  if (fileInput) {
    fileInput.addEventListener("change", handleFileNameUpdate);
  }
}

function pay() {
  alert("Razorpay will be connected here next.");
}

bindEvents();
setMinimumDeliveryDate();
calculate();