import Teachers from "../pages/Teachers";

export default function MainCard({ name, description, href, component }) {
  
  return `
  <a href=${href}
  <h1>${name}</h1>
  <h2>${description}</h2>  
  </a>
  `
}