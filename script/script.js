var usersData = [
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Active",
    "role": "User",
    "lastLogin": "2d ago",
    "permission": "Valid"
  },
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Active",
    "role": "Administrator",
    "lastLogin": "5d ago",
    "permission": "Valid"
  },
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Active",
    "role": "User",
    "lastLogin": "2d ago",
    "permission": "Valid"
  },
  {
    "name": "vox",
    "email": "fox@company.com",
    "status": "Inactive",
    "role": "User",
    "lastLogin": "1d ago",
    "permission": "Valid"
  },
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Active",
    "role": "User",
    "lastLogin": "-",
    "permission": "Invalid"
  },
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Active",
    "role": "User",
    "lastLogin": "10d ago",
    "permission": "Valid"
  },
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Inctive",
    "role": "User",
    "lastLogin": "-",
    "permission": "Valid"
  },
  {
    "name": "christina woods",
    "email": "wood@company.com",
    "status": "Active",
    "role": "Administrator",
    "lastLogin": "5d ago",
    "permission": "Valid"
  }
]
let table = document.getElementById('userTable');
function createTable(data) {
  for (let user of data) {
    var row = document.createElement('tr');
    let nameCell = document.createElement('td');
    var userIcon = document.createElement('img');
    userIcon.src = "image/person.svg";
    userIcon.className = "table-icon";
    nameCell.append(userIcon, user["name"]);
    row.appendChild(nameCell);

    let emailCell = document.createElement('td');
    emailCell.appendChild(document.createTextNode(user["email"]))
    row.appendChild(emailCell);

    let statusCell = document.createElement('td');
    var statusButton = document.createElement('button');
    if (user["status"] === "Active") {
      statusButton.className = "active-status-button"
      statusButton.textContent = "Active";
    } else {
      statusButton.className = "inactive-status-button"
      statusButton.textContent = "Inactive";
    }
    statusCell.appendChild(statusButton)
    row.appendChild(statusCell);

    let roleCell = document.createElement('td');
    roleCell.appendChild(document.createTextNode(user["role"]))
    row.appendChild(roleCell);

    let lastLoginCell = document.createElement('td');
    lastLoginCell.appendChild(document.createTextNode(user["lastLogin"]))
    row.appendChild(lastLoginCell);

    let permissionCell = document.createElement('td');
    if (user["permission"] === "Valid") {
      var strong = document.createElement('strong');
      strong.textContent = "valid";
      permissionCell.appendChild(strong);
    } else {
      permissionCell.appendChild(document.createTextNode(user["permission"]))
    }
    row.appendChild(permissionCell);

    var optionButton = document.createElement('button');
    optionButton.className = "option-button";
    optionButton.textContent = "...";
    let optionCell = document.createElement('td');
    optionCell.appendChild(optionButton);
    row.appendChild(optionCell);
    table.appendChild(row);
  }
}
createTable(usersData);
var userSize = document.getElementById("usersSize");
userSize.textContent = "Users(" + usersData.length + ")";