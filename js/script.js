// Create the 'showPage' function
// This function will create and insert/append the elements needed to display a "page" of nine students

function showPage(list, page) {
   const itemsPerPage = 9
   const startIndex = (page * itemsPerPage) - itemsPerPage
   const endIndex = (page * itemsPerPage)
   const studentList = document.querySelector('.student-list')
   studentList.innerHTML = ''

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {

      }
   }
}

showPage(data, 1)


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
