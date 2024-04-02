let totalScore = 0;

function validateForm() {
        var nameInput = document.getElementById("name");

        if (nameInput.value.trim() === "") 
		{
            alert("Please enter your name.");
			return;
        }
		else
		{
			document.querySelector(".Starter-Page").style.display = 'none';
			document.querySelector(".question-1").style.display = 'block';
		}
		
}


function validateAnswer1() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.id === "correct-1") {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
    document.querySelector(".question-1").style.display = 'none';
	document.querySelector(".question-2").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer2() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.id === "correct-2") {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-2").style.display = 'none';
	document.querySelector(".question-3").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer3() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.id === "correct-3") {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-3").style.display = 'none';
	document.querySelector(".question-4").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer4() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.id === "correct-4") {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-4").style.display = 'none';
	document.querySelector(".question-5").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer5() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.id === "correct-5") {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-5").style.display = 'none';
	document.querySelector(".question-6").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer6() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.id === "correct-6") {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-6").style.display = 'none';
	document.querySelector(".question-7").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer7() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.id === "correct-7") {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-7").style.display = 'none';
	document.querySelector(".question-8").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer8() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.id === "correct-8") {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-8").style.display = 'none';
	document.querySelector(".question-9").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer9() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.id === "correct-9") {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-9").style.display = 'none';
	document.querySelector(".question-10").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer10() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.id === "correct-10") {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-10").style.display = 'none';
	document.querySelector(".summary").style.display = 'block';
	document.getElementById('final-results').textContent = "You got " + totalScore + " correct!";
}






/*let totalScore = 0;
function nextQuestion() {
  document.querySelector(".question1").style.display = 'none';
  document.querySelector(".question2").style.display = 'block';
  document.querySelector(".button").style.display = 'none';
  document.querySelector(".button2").style.display = 'block';

  document.querySelectorAll(".question1, .button").forEach(element => {
  element.style.display = 'none';
	});

  document.querySelectorAll(".question2, .button2").forEach(element => {
  element.style.display = 'block';
	});

const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    
    if (selectedValue === "a2") {
      totalScore += 1;
      
    } 
  } else {
    console.log("No option selected.");
  }

}

function nextQuestion2() {
  document.querySelector(".question2").style.display = 'none';
  document.querySelector(".question3").style.display = 'block';
  document.querySelector(".button2").style.display = 'none';
  document.querySelector(".button3").style.display = 'block';
  
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a5") {

      totalScore += 1;
      
    } 
  } else {
    console.log("No option selected.");
  }
  
}
function nextQuestion3() {
  document.querySelector(".question3").style.display = 'none';
  document.querySelector(".question4").style.display = 'block';
  document.querySelector(".button3").style.display = 'none';
  document.querySelector(".button4").style.display = 'block';
  
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a11") {
      totalScore += 1;
      
    } 
  } 
}
function nextQuestion4() {
  document.querySelector(".question4").style.display = 'none';
  document.querySelector(".question5").style.display = 'block';
  document.querySelector(".button4").style.display = 'none';
  document.querySelector(".button5").style.display = 'block';
  
const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a16") {

      totalScore += 1;
      
    } 
  }
  }
function nextQuestion5() {
  document.querySelector(".question5").style.display = 'none';
  document.querySelector(".question6").style.display = 'block';
  document.querySelector(".button5").style.display = 'none';
  document.querySelector(".button6").style.display = 'block';
  
const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a19") {

      totalScore += 1;
      
    } 
  } 
}
function nextQuestion6() {
  document.querySelector(".question6").style.display = 'none';
  document.querySelector(".question7").style.display = 'block';
  document.querySelector(".button6").style.display = 'none';
  document.querySelector(".button7").style.display = 'block';
  
const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a24") {

      totalScore += 1;
      
    } 
  }
}
function nextQuestion7() {
  document.querySelector(".question7").style.display = 'none';
  document.querySelector(".question8").style.display = 'block';
  document.querySelector(".button7").style.display = 'none';
  document.querySelector(".button8").style.display = 'block';
 
const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a25") {

      totalScore += 1;
      
    }
  } 
}
function nextQuestion8() {
  document.querySelector(".question8").style.display = 'none';
  document.querySelector(".question9").style.display = 'block';
  document.querySelector(".button8").style.display = 'none';
  document.querySelector(".button9").style.display = 'block';

const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a30") {

      totalScore += 1;
    }
    }
}
function nextQuestion9() {
  document.querySelector(".question9").style.display = 'none';
  document.querySelector(".question10").style.display = 'block';
  document.querySelector(".button9").style.display = 'none';
  document.querySelector(".button10").style.display = 'block';
  
const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a34") {
      totalScore += 1;
    }
  } 
}
function submit() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const selectedValue = selectedOption.value;

    if (selectedValue === "a39") {
      
      totalScore += 1;
    } 
  }

  
  document.querySelector(".question10").style.display = 'none';
  document.querySelector(".finalResults").style.display = "block";
  document.querySelector(".button10").style.display = 'none';

  
  const totalQuestion = document.querySelectorAll('.question').length;
  document.getElementById('totalQuestions').textContent = "Total Score: " + totalScore;
  document.getElementById('totalScore').textContent = "Total Score: " + totalScore;
}*/

