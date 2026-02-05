export default function Teachers() {
  fetch('/apiv1/teachers')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Work with the JSON data
      console.log(data);
    })
    .catch(error => {
      // Handle network errors or errors thrown in the .then() block
      console.error('There was a problem with the fetch operation:', error);
    });


  // console.log(teachers)
  return '<h1>TEACHERS PAGE</h1>'
}