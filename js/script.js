// Create the 'showPage' function
// This function will create and insert/append the elements needed to display a "page" of nine students

function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
   const itemsPerPage = 9
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

showPage(data, 1)


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
