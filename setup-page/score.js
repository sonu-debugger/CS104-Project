/* function 1 */

/* define a function that takes the input from the player name form and creates a new table entry */
/* if team is full (11 players) switch to next team*/
/* if both teams are full, end. */

document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the name input value
    const name = document.getElementById('name').value;

    // If the name is not empty, add it to the table
    if (name.trim() !== "") {
        const table = document.getElementById('name-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Insert a new cell and add the name into it
        const cell = newRow.insertCell(0);
        cell.textContent = name;

        // Clear the form input
        document.getElementById('name-form').reset();
    } else {
        alert("Please enter a name.");
    }
});


/* function 2 */

/* define a function that lets people chjoose number of overs */
/* by default it is 2*/


/* function 3 */

/* define a function that gives toss */
/* it shoul dbe such that when called, it chooses between 4 phrases : team 1/2 won toss, choose bat/field*/