const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson',
]
const defaultColor = 'Silver'
const box = document.getElementById('box')

// your code here...
// add option elements to the select element with id color-select
const select = document.querySelector('#color-select')
for (let i = 0; i < data.length; i++) {
  const option = document.createElement('option')
  option.setAttribute('value', data[i])
  option.innerHTML = data[i]
  select.appendChild(option)
}
// event listener to listen for changes in the dropdown menu since listening for clicks is bad practice
document.getElementById('color-select').addEventListener('change', function () {
  changeColors(this.value)
})

// a promise resolve to wait for set amount of milliseconds
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

// an async func to change color and change it back within 1000ms
async function changeColors(color) {
  if (color === '') {
    return
  }
  box.style.backgroundColor = color
  await delay(1000)
  box.style.backgroundColor = defaultColor
}
