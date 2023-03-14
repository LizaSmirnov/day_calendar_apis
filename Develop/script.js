const saveBtn = $('.saveBtn') 
saveBtn.on('click',function(event){
  event.preventDefault();
  //this refers to .saveBtn
  var text= $(this).siblings('.description').val();
  var time =$(this).parent().attr('id');
  //save content written to local storage
  localStorage.setItem(time, text);
  //read time show text
});

//dont use moment.js due to fails to work with tree-shaking leading to vast bundle sizes and performance issues.

let idClass = $('#currentDay');

//set up the day to current date
$(function () {
  const currentDate = dayjs().format('MMMM/DD/YYYY');
  
  const currentDay = $('#currentDay')
   
  currentDay.text(currentDate)

})

//set up time to current time 
$(function (){
  const currentTime = dayjs().format('hh:mm:ss a')
  const timeElement = $('<h4>');
  timeElement.text(currentTime);
  timeElement.attr('class','time');
  idClass.append(timeElement);
});

//save the keys in text box once written; loaded from local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


//create a const to compare the scheudle time to current time
 const currentHour = parseInt(dayjs().format('H'));
 console.log(currentHour);
 $('.time-block').each(function (){
  var numberBlock = parseInt($(this).attr("id").split('hour')[1]);
  
   finalVar= Math.abs(numberBlock);
   //console.log(finalVar)
 //if statement changes the class of '.time-block' when the finalVar for each div is compared
  if (finalVar < currentHour){
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
  } else if (arrayNumbers === currentHour){
    $(this).removeClass('past');
    $(this).addClass('present');
    $(this).removeClass('future');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  } 
return;
 });
//apply past --> for class grey color

//apply present -- >red color for class

//apply future --> green color for class


