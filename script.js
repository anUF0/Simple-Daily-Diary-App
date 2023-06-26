
  const svBtnEl =$('.saveBtn');
  var now = dayjs();


$(function init() {

  //Save Button Handler
  function svHandler(event) {

    console.log(event.target)

    var selectedTextArea= $(event.target).parents('.time-block').children('.description');
    var selectedHour = $(event.target).parents('.time-block').children('.hour');
    console.log(selectedTextArea.val());
    localStorage.setItem(selectedHour.text(), selectedTextArea.val().trim());
  };  
  
  //Runs the above function upon click
  svBtnEl.on('click', svHandler);


  //Runs through the different ids, comparing them against the current hour
  for(let i=0; i<=24; i++){
    var currentHour = +now.format('H');
    var currentHourEl =  $('#hour-' + [i]);

  if(currentHour > [i]){
  currentHourEl.children('.description').addClass('past')}
  else if(currentHour == [i]){
    currentHourEl.children('.description').addClass('present')}
    else if(currentHour  < [i]){
    currentHourEl.children('.description').addClass('future')
   }
  }

//Series of For statments that cycle through the local storge. AM and PM had to be separate
for (let i = 0; i<=11; i++){
$('#hour-' + [i]).children('.description').text(localStorage.getItem([i] + 'AM'));
}
//Syntax required '12PM' get its own slot
$('#hour-12').children('.description').text(localStorage.getItem('12PM'));

for (let i = 13 ;i <=24; i++){
  $('#hour-' + [i]).children('.description').text(localStorage.getItem([i-12] + 'PM'));
}

//Current Day Display
$('#currentDay').text(now.format('MMM D, YYYY'));
}
);
