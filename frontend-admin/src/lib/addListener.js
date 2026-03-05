export default function addListener(elementsList, listener) {
  setTimeout(() => {
    const elements = document.querySelectorAll(elementsList)
    elements.forEach((element) => {
      element.addEventListener('click', () => listener(element))
    })
  }, 0)
}