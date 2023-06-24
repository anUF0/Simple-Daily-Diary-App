// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//TODO Call of the the IDs

  //TODO: Change to Sv Icon
  const svBtnEl =$('.saveBtn');
  const descriptionEl =$('.texteara');
  const timeblockEl =$('.time-block');
  const hourEl =$('.hour');


$(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function svHandler(event) {
    var selectedTextArea= $(event.target).parent('.time-block').children('.description');
    var selectedHour = $(event.target).parent('.time-block').children('.hour');


    localStorage.setItem(selectedHour.text(), selectedTextArea.val().trim());
  };  

  console.log(localStorage.getItem('9AM'));
  

  svBtnEl.on('click', svHandler);



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  if(hourEl.id){
    timeblockEl.addClass('future');
  }

  for (let i = 9; i<=12; i++){
$('#hour-' + [i]).children('.description').text(localStorage.getItem([i] + 'AM'))
}
for (let i = 1 ;i <=5; i++){
  $('#hour-' + [i]).children('.description').text(localStorage.getItem([i] + 'PM'))
  }

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});


//Initialise
//init()