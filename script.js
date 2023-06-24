// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//TODO Call of the the IDs

  //TODO: Change to Sv Icon
  const svBtnEl =$('.saveBtn');
  const timeblockEl =$('.time-block');
  const hourEl =$('.hour');
  var now = dayjs();


$(function init() {
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
  
  svBtnEl.on('click', svHandler);

  for(let i=0; i<=24; i++){
    var currentHourEl = $('#hour-' + [i])
    var currentHour = +now.format('H');
  
  if(currentHour > [i]){
  currentHourEl.children('.description').addClass('past')}
  else if(currentHour == [i]){
    currentHourEl.children('.description').addClass('present')}
    else if(currentHour  < [i]){
    currentHourEl.children('.description').addClass('future')
   }
  }

//Series of For statments 
for (let i = 0; i<=11; i++){
$('#hour-' + [i]).children('.description').text(localStorage.getItem([i] + 'AM'));
}
//Syntax required '12PM' get its own slot
$('#hour-12').children('.description').text(localStorage.getItem('12PM'));

for (let i = 13 ;i <=24; i++){
  $('#hour-' + [i]).children('.description').text(localStorage.getItem([i-12] + 'PM'));
}
  
//Current Day Display
  $('#currentDay').text(now.format('MMM D, YYYY h:mmA'));
});


//Initialise
//init()