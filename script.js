const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove old total row if it already exists
  const oldRow = document.getElementById("total-row");
  if (oldRow) {
    oldRow.remove();
  }

  // Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Add all prices
  prices.forEach((item) => {
    total += Number(item.textContent);
  });

  // Create new row
  const row = document.createElement("tr");
  row.id = "total-row";

  // Create new cell
  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.innerText = total;

  // Add cell to row
  row.appendChild(cell);

  // Add row to table
  document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);