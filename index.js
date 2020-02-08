0
// Down below I will write the questions that will be found on my very first quiz 
const myQuestions = [
	{
	 'question':	'Select the correct HTML for creating a hyperlink ?',
	 'answers': ["A - A url = http://www.Fizzbangpop.com>fizzbangpop.com","B - A>http://www.Fizzbangpop.com","C - Questions A + B","D - Ahref=http:\\www.Fizzbangpop.comfizzbangpop"],
	 'correct': 3,
	},

	{
	 'question': 'Select the correct option to create an email link?',
	 'answers': ["A - Mail>xxx@yyy.com/mail", "B - A href=mailto:xxx@yyy.com", "C - A href=xxx@yyy.com", "D - Mail href=fizz@bang.com" ],
   'correct':  1
  },

   {
	 'question': 'Select the correct property used to set the background color of an image?',
	 'answers': ["A - background:color","B - background-color","C - color:background","D - All the above"],
	 'correct':  1
	},
	{
	 'question': 'Select the best option to make a list that contains bullet points?',
	 'answers': ["A - Li","B - Ul","C - Ol","D - D1"],
	 'correct':  1
	},
	
	{
	 'question':"Select the appropriate HTML Tag used for the largest heading?",
	 'answers': ["A - Head", "B - H1", "C - Large-font", "D - H6"],
	 'correct': 1
	},
	{
	 'question':"In CSS, Select the property to set an image in a list instead of a standard bullet point?",
	 'answers': ["A - list-image:","B - image-list:","C - list-style-image:","D - list-image-src:"],
	 'correct':  2
	},
	{
	 'question':"In CSS, what is the correct option to select all the tags on a page?",
	 'answers': ["A - $p {}", "B - p {}", "C - .p {}", "D - #p {}"],
	 'correct': 1  
	},
	{
	 'question': "Select the property used to create space between the elements border and inner content?",
	 'answers': ["A - margin", "B - border", "C - spacing", "D - padding"],
	 'correct': 3
	}

	];

var score = 0;
var current = 0;

$(document).ready(function(){
  // Create an event listener to listen for a click on the Start Quiz button
  $(".start-button").click(function(){
     $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('Current Score: '+score);
    console.log("Start Quiz button clicked");
  });
  
  // Create an event listener to listen for a click on the Next button
  $(".next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('div#display-results').hide()
    $('.next').hide();
    $('.submit').show();
  });
  
  $(".submit-button").click(function(event){
    if($('li.selected').length){
      var answer = $('li.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer to move forward !!');
    }
  });



  
  // Create an event listener to listen for a click on the Retake button and refresh the page
  $(".retake-button").click(function(){
  location.reload();
    console.log("Retake button clicked");
  });
  
  //Click listener when clicking on a list item to change the color of the background
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});

//***************FUNCTIONS**************
function displayQuestion(){
  $('.question-number').text('Question Number: '+(current + 1)+"/8" );
  if(current < myQuestions.length){
    var listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (var i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
    }
  } else {
    // show summary that says how many you got correct
    displayScore();
  }
}

// Checks answer from the array to see if the one chosen is the one that is correct
function checkAnswer(answer){
  var listQuestion = myQuestions[current];
  if(listQuestion.correct == answer){
    score++;
    $('li.selected').addClass('correct');
    $('div#display-results').text('Correct!')
  } else {
    $('li.selected').addClass('incorrect');
    $('listQuestion.correct').addClass('solution');
    $('div#display-results').text('Incorrect!')
  }
  $('.score').text('Current Score: '+score);
  $('div#display-results').show()
  current++;
}
// I want to add the correct answer when marked incorrect ---


// I as well want to add if and else statment if = great job else = Try again

//Display score
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.end-score').text("Your score is: " +score + '/8', "");
  if(score >= 6){
    $('.comment').text('GREAT JOB!');
  }
  else {
    $('.comment').text('Try Again!');
  }
}

function resetStats() {
  // takes user back to start upon click
  $('.retake-button').click(function() {
    location.reload();
  });
}


//Reset and Retake the Code

$(".retake-button").click(function(){
  $('.end-quiz').hide();
  $('.RETAKE QUIZ').hide();
  $('.score').hide();
  $('.start-quiz').show();
 console.log("Retake Quiz button clicked");
 event.preventDefault();
 resetStats();
});


















