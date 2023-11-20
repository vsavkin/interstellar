const fs = require('fs')


const projects = JSON.parse(fs.readFileSync("workspace.json")).projects

for (let p of Object.keys(projects)) {
  const projectJson = JSON.parse(fs.readFileSync(projects[p] + '/project.json'))
  projectJson.name = p

  fs.writeFileSync(projects[p] + '/project.json', JSON.stringify(projectJson, null, 2))
}
