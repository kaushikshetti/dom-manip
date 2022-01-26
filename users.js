const showUsers = (users) => {
    let ul = document.getElementById("users-list");
    users.forEach(s => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(s.person_first_name));
    ul.appendChild(li);
    });
   }
fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => { showUsers(data); })
    .catch((error) => { console.error('Error', error); });

    