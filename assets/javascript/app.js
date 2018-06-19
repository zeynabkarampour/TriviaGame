var number = 30;
var intervalId;
var correctanswer;
var incorrectanswer;
var unanswered;
var userpicked;
//  When the resume button gets clicked, execute the run function.
$(document).ready(function() {

    $("#startbutton").on("click", run);
    
    $(".radioBtn").on('click', function(event) {
       // console.log('event clicked', event);
       if (event.target.name === 'optradio1') {
        $("#result1").text(event.target.value);
       }
    })
    // function myFunction(optradio1) {
    //     console.log('optradio1', optradio1);
    //     $("result1").value = optradio1;
    // };
})
    
    
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
        }
    }
    
    run();
    //myFunction()