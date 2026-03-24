function calculate() {
  let product = +document.getElementById("product").value;
  let material = +document.getElementById("material").value;
  let layer = +document.getElementById("layer").value;
  let effect = +document.getElementById("effect").value;
  let qty = +document.getElementById("qty").value;

  if (qty < 100) qty = 100;

  let total = (product + material + layer + effect) * qty;

  document.getElementById("price").innerText = "₹" + total;
}

document.querySelectorAll("select, input").forEach(el => {
  el.addEventListener("change", calculate);
});

document.getElementById("file").addEventListener("change", function(e){
  let file = e.target.files[0];
  let job = document.getElementById("jobName");

  if (!job.value || job.value === "Job Name") {
    job.value = file.name;
  }
});

function pay() {
  alert("Connect Razorpay here");
}