var userData = [
    ["christina woods", "wood@company.com","Active","User","2d ago","Valid"],
    ["fox", "fox@company.com","Active","User","1d ago","Valid"]
  ]
  let table = document.getElementById('userTable');
  for (let row of userData) {
    table.insertRow();
    for (let cell of row) {
      let newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = cell;
    }
  }