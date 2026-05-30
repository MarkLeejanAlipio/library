# Library
First project in JavaScript 

# Preview
![Project Image](/image.png)

# Pseudocode
1. CREATE an array that will store all book objects
2. CREATE functions to manage book objects:
    1. CREATE a function constructor for creating a book object
    2. CREATE a function takes argument, create a book object from those arg, and push the book obj to the array
        - GENERATE unique id for each book obb using `crypto.randomUUID()`
3. CREATE a function that loops through the array and display each book on the page.
    - SELECT the main element in the html
    - CREATE container for each book
    - CREATE element for each data
    - APPEND each element to container
    - APPEND container to the main element
4. CREATE a form through `dialog` that allows users to input details for a new book.
    - SELECT the `New Book`, close, cancel, form, and input elements
    - OPEN the dialog when the `New Book` button is clicked
    - CLOSE the dialog when the close or cancel button is clicked
    - LISTEN for the form `submit` event
    - PREVENT the default form submit behavior
    - GET the input values using `.value`
    - GET the read status using `.checked`
    - ADD the new book to the library array
    - DISPLAY the updated library
    - RESET the form and close the dialog
5. ADD remove button on each book
    - FIND the index of the selected book using `findIndex()`
    - DELETE the book from the library array using `splice(index, 1)`
6. ADD toggle status button
    - CREATE a `Book` prototype method that toggles the book's `readStatus`
    - WHEN `readStatusBtn` is clicked, call `book.toggleReadStatus()`
    - RUN a function that updates the button text and class depending on `readStatus`
