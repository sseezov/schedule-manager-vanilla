export default function Modal(classname) {
  return `
    <div class="modal-overlay hidden ${classname}">
      <div class="modal">
        Содержимое модалки
      </div>
    </div>
  `
}
