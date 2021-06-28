// Create the 'showPage' function
// This function will create and insert/append the elements needed to display a "page" of nine students

const itemsPerPage = 9

function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
   const startIndex = (page * itemsPerPage) - itemsPerPage
   const endIndex = (page * itemsPerPage)
    // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector('.student-list')
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = ''

   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++) {
      // inside the loop create a conditional to display the proper students
      if (i >= startIndex && i < endIndex) {
         // create the elements needed to display the student information
         const studentItem = document.createElement('li')
         // insert the above elements
         studentList.appendChild(studentItem)
         studentItem.innerHTML = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `
      }
   }
}

// Call functions
showPage(data, 1)


// Create the `addPagination` function
// This function will create and insert/append the elements needed for the pagination buttons

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / itemsPerPage)
   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list')
    // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = ''

   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      // create the elements needed to display the pagination button
      const li = document.createElement('li')
      // insert the above elements
      linkList.appendChild(li)
      li.innerHTML = `
         <li>
            <button type="button">${[i]}</button>
         </li>
      `
      // give the first pagination button a class of "active"
      const firstButton = document.querySelector('button')
      firstButton.className = 'active'

      // create an event listener on the `link-list` element
      linkList.addEventListener('click', (e) => {
         // if the click target is a button:
         if (e.target.tagName === 'BUTTON') {
            // remove the "active" class from the previous button
            const inactiveButton = document.querySelector('.active')
            inactiveButton.className = ''
            // add the active class to the clicked button
            e.target.className = 'active'
            // call the showPage function passing the `list` parameter and page to display as arguments
            showPage(list, e.target.textContent)
         }
      })
   }
}

// Call functions
addPagination(data)



