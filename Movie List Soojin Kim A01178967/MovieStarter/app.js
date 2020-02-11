// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var movieArray = [];
var movieTable = document.createElement("TABLE");
document.getElementById("movieHistoryCard").appendChild(movieTable);
var table = document.querySelector('table');
var header = table.insertRow();
var header1 = header.insertCell(0);
var header2 = header.insertCell(1);
header1.innerHTML = 'Movie Name'
header2.innerHTML = 'Count'

// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}
function clearTable() {    
    movieTable.innerHTML = '';       
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
    clearTable();
}

function movieExists(movieName){

    if(movieArray.some(movies => movies.name === movieName)){
        return true;
    }
   
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // if (movieTable.hasChildNodes()){
    //     clearTable()
    // }    
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    var textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);


    // Step 6: Call the clearInput function to clear the input field
    clearInput();

    if (movieExists(userTypedText) == true){
        for (i = 0; i < movieArray.length; i++){
            if (userTypedText == movieArray[i].name){
                movieArray[i].count+=1;
                table.rows[i+1].cells[1].innerHTML = movieArray[i].count;
            }

        }
    }
    
    else{
        let newMovie={name:userTypedText, count:1};
        movieArray.push(newMovie);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        
        cell1.innerHTML = newMovie.name;
        cell2.innerHTML = newMovie.count;
        
    }

}

