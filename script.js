const friendlyAliens = new Array(10).fill('👾').map(function(Alien) {
  return `<div class="box">${Alien}</div>`
}).join("")

document.getElementById('aliens').innerHTML = friendlyAliens
