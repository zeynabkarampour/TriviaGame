var number = 30;
var intervalId;
var correctanswer = 0;
var incorrectanswer = 0;
var unanswered;
var userpicked;
var answer1 = "Rajah";
var answer2 = "Left Hand";
var answer3 = "Pride Rock";
var answer4 = "Dinah";
var answer5 = "5 Dozen";




//  When the resume button gets clicked, execute the run function.
$(document).ready(function () {

    $("#startbutton").on("click", function (event) {
        $("#thirdpart").hide();
        $("#questionnaire").show();
        $("#startbutton").hide();
        $("#submitbutton").show();

    })

    $(".radioBtn").on('click', function (event) {
        // console.log('event clicked', event);
        if (event.target.name === 'optradio1') {
            userpicked = event.target.value;
            if (userpicked === answer1) {
                correctanswer++;
                console.log('correctanswer', correctanswer);
            } else {
                incorrectanswer++;
                console.log('incorrectanswer', incorrectanswer);
            }
        }

        if (event.target.name === 'optradio2') {
            userpicked = event.target.value;
            if (userpicked === answer2) {
                correctanswer++;
                console.log('correctanswer', correctanswer);
            } else {
                incorrectanswer++;
                console.log('incorrectanswer', incorrectanswer);
            }
        }

        if (event.target.name === 'optradio3') {
            userpicked = event.target.value;
            if (userpicked === answer2) {
                correctanswer++;
                console.log('correctanswer', correctanswer);
            } else {
                incorrectanswer++;
                console.log('incorrectanswer', incorrectanswer);
            }
        }

        if (event.target.name === 'optradio4') {
            userpicked = event.target.value;
            if (userpicked === answer2) {
                correctanswer++;
                console.log('correctanswer', correctanswer);
            } else {
                incorrectanswer++;
                console.log('incorrectanswer', incorrectanswer);
            }
        }

        if (event.target.name === 'optradio5') {
            userpicked = event.target.value;
            if (userpicked === answer2) {
                correctanswer++;
                console.log('correctanswer', correctanswer);
            } else {
                incorrectanswer++;
                console.log('incorrectanswer', incorrectanswer);
            }
        }
        console.log('RADIO BUTTON ELEMENT', $('.radioBtn'))
    })
    // function myFunction(optradio1) {
    //     console.log('optradio1', optradio1);
    //     $("result1").value = optradio1;
    // };
    $('#submitbutton').click(function () {
        console.log("test");
        $("#questionnaire").hide();
        $("#startbutton").hide();
        $("#submitbutton").hide();
        $("#thirdpart").show();
        clearInterval(intervalId);



    });
});


//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log('intervalId', intervalId);
}




//  The decrement function.
function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#timeout").text(number);
    //  Once number hits zero...
    if (number === 0) {
        $("#questionnaire").hide();
        $("#startbutton").hide();
        var radioArray = $('.radioBtn')
        var count = 0;
        radioArray.each((index, val) => {
            if (val.checked === true) {
                count++;
            }
        })
        $("#submitbutton").hide();
        $("#thirdpart").show();
        var uncheckedvalue = 5 - count;
        if (uncheckedvalue > 0) {
            $("#result3").html(uncheckedvalue);
        }

        $("#result1").html(correctanswer);
        $("#result2").html(incorrectanswer);
    }
}

run();
//myFunction()