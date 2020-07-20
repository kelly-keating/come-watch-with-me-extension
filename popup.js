
const attachListeners = () => {
  document.getElementById('btn').addEventListener('click', myAlert)
  document.getElementById('answers-header').addEventListener('click', myAlert)
}

const myAlert = () => {
  alert('hello')
}

// Starter Function
document.addEventListener('DOMContentLoaded', attachListeners)
