const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Calculate total
  prices.forEach((item) => {
    total += Number(item.textContent);
  });

  // Create new row
  const row = document.createElement("tr");

  // Create new cell
  const cell = document.createElement("td");

  // Span across both columns
  cell.colSpan = 2;

  // Add total text
  cell.textContent = total;

  // Append cell to row
  row.appendChild(cell);

  // Append row to table
  document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);