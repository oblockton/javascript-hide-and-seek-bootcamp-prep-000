function getFirstSelector(selector) {
  const list = document.querySelector(selector)
  return list
}

function nestedTarget() {
  const result = document.querySelector(`#nested .target`)
  return result
}