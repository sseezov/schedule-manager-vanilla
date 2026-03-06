export const handlers = {
  id: 0,
  getId: function () { return this.id++ }

}

export const init = () => document.querySelector('#app').addEventListener('click', (e) => {
  console.log(e.target)
  const { id } = e.target.dataset;
  handlers[id]()
})