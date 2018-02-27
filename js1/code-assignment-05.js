let project1 = {
  id: 1,
  title: 'Houston',
  hasThumbnail: true
}
let project2 = {
  id: 2
  title: 'Earthquakes',
  hasThumbnail: true
}
let projects = [
  project1
  project2
]
for (let i = 0; i < projects.length; i++) {
  console.log('Element ' + i + ' title: ' + projects[i].title)
  if (projects[i].hasThumbnail === true) {
  console.log('Screenshot' + projects[i].id + '.png')
  }
