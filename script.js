
document.getElementById("leaveForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const leaveType = document.getElementById("leaveType").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const table = document.getElementById("leaveTable");
  const row = table.insertRow();
  row.innerHTML = `<td>${name}</td><td>${leaveType}</td><td>${startDate}</td><td>${endDate}</td>`;

  // Clear form
  document.getElementById("leaveForm").reset();
});
