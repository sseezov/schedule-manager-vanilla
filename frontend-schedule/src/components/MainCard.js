export default function MainCard({ name, description, href }) {
  return `
    <a href=${href}
      <h1>${name}</h1>
      <h2>${description}</h2>  
    </a>
  `
}
