const fs = require('fs')


const projects = JSON.parse(fs.readFileSync("_workspace.json")).projects

for (let p of Object.keys(projects)) {
  const projectJson = JSON.parse(fs.readFileSync(projects[p] + '/project.json'))
  if (projectJson.e2e && Object.keys(projectJson.e2e).length == 0) {
    delete projectJson.targets.e2e
  }
  fs.writeFileSync(projects[p] + '/project.json', JSON.stringify(projectJson, null, 2))
}
