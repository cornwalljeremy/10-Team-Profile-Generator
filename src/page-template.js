function generateEmployee(data) {
    let emoteField = "";
    let borderField = "";
    let varField = "";
    let gitLink =  `<a href="https://github.com/">`;

  if (data.getRole() === "Manager") {
    varField = "Office: " + data.office;
    borderField = 'border-danger';
    emoteField = '🧀'
  } else if (data.getRole() === "Engineer") {
    varField = "Github: " + gitLink + data.github;
   
    borderField = 'border-warning';
    emoteField = '👽'

  } else {
    varField = "School: " + data.school;
    borderField = 'border-info';
    emoteField = '🍼'

  }
  return `
  
  <div class="col mb-4">
    <div class="card h-100 ${borderField}">
      <div class="card-header">
        ${data.name}
          <p class="title">${emoteField} - ${data.getRole()}</p>
      </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${data.getId()}</li>
            <li class="list-group-item">Email:
              <a href="mailto:${data.getEmail()}" class="card-link">${data.getEmail()}</a> 
            </li>
            <li class="list-group-item">${varField}</li>
          </ul>
        </div>
    </div>
  </div>
     
   `;
}

function generateHTML(employeeArray) {
  let cards = "";
  for (let i = 0; i < employeeArray.length; i++) {
    cards = cards + generateEmployee(employeeArray[i]);
  }
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Cards</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
    <div class="card">
      <div class="card-body" id="header">My Team</div>
    </div>
    <section class="hero">
  <div class="row row-cols- row-cols-md-3">
  
     ${cards}
    
     </div>
    </section> 
  
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
}

module.exports = generateHTML;
