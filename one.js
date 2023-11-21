const fs = require('fs')


const projects = JSON.parse(fs.readFileSync("_workspace.json")).projects

for (let p of Object.keys(projects)) {
  const projectJson = JSON.parse(fs.readFileSync(projects[p] + '/project.json'))
  projectJson.targets.test = {}
  projectJson.targets.lint = {}
  projectJson.targets.e2e = {}
  fs.writeFileSync(projects[p] + '/project.json', JSON.stringify(projectJson, null, 2))
}
