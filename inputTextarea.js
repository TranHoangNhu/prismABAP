function inputPrismABAP() {
  let txtArea = document.querySelector("#txtHtmlStr").value;
  return `
    <pre class="line-numbers"><code class="language-ABAP">${txtArea}</code>
    </pre>
    `;
}

document.getElementById("btn-swap").onclick = function renderPrismABAP() {
  document.getElementById("outABAP_code").innerHTML = inputPrismABAP();
};
