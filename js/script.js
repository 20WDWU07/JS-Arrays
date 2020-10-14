//***********************************
//Testing my script if it is linked
//***********************************

console.log('js');

// declaring an empty array
var studentsName = [];

$(document).ready(function(){

  //javascript function for click event
  // document.getElementById('push').addEventListener('click', function(){
  //   console.log('pushed');
  // });

  // jQuery function for click event
  $('#push').click(function(){
    console.log('pushed');

    // receiving and storing value in the text box into a variable
    // var studentName = document.getElementById('studentName').value;
    var studentName = $('#studentName').val();
    console.log(studentName);

    // pushing the name received in the text box into the array
    studentsName.push(studentName);
    console.log(studentsName);
    console.log(studentsName.length);

  });

  // sorting
  $('#sort').click(function(){

    var fruits = ['Orange', 'Grapes', 'Cherry', 'Mango'];

    console.log(fruits);
    console.log(fruits.length); //finds the total number of values in the array
    console.log(fruits[3]);
    console.log(fruits.sort());
    console.log(fruits.reverse());


  });

// searching
$('#search').click(function(){
  // search for a programmingLanguage in the array
  var programmingLanguages = ['Javascript', 'PHP', 'Java', 'VisualBasic', 'C++'];
  console.log(programmingLanguages);

  var searchItem = $('#searchItem').val();
  console.log(searchItem);
  console.log(programmingLanguages.includes(searchItem));

// searching for books having less than 500 pages in the array
  var totalPages = [358, 292, 500, 704, 159];
  var selectedArray = [];
  console.log(totalPages); //shows the entire arrays

  var i=0;
  for (i = 0; i < totalPages.length; i++) {

    if (totalPages[i] < 500) {
      console.log(totalPages[i]);
      selectedArray.push(totalPages[i]);
      document.getElementById('result').innerHTML += totalPages[i] + '<br>';
      // document.getElementById('result').innerHTML = selectedArray;

    } //end if
  } //end of for


});


}); //document.ready()
