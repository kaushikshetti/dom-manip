fetch('http://localhost:3000/skills')
  .then(response => response.json())
  .then(data => {
    console.log('success', data)
    updateSkills(data)
  })
  .catch((error) => {
    console.error('error', error)
  })
function updateSkills(skills) {
  let ul = document.getElementById("skills-list")
  skills.forEach(s => {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(s.name))
    ul.appendChild(li)
  })
}