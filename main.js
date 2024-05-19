
const url = 'https://jsonplaceholder.typicode.com/users';
const ul = document.createElement('ul');

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
        const li1 = document.createElement('li');
        li1.textContent = "Name: " + user.name;

        const li2 = document.createElement('li');
        li2.textContent = "Phone: " + user.phone;

        const li3 = document.createElement('li');
        const company = user.company; 
        const dataCompany = Object.entries(company);
        dataCompany.forEach(([key, value]) => {
            li3.textContent += ` ${key}: ${value},`;
        });


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
    });
    
    document.body.appendChild(ul); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
