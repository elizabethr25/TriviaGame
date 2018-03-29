$(document).ready(function () {

    // $(".maincontainer").load(function () {
    //     console.log("hidden");
    // });

    // $("#start").click(function () {
    //     console.log("started");
    // });

    var timer = 10;
    var intervalId;

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#time").html("<p> Time Remaining: " + timer + "</p>");

        if (timer === 0) {
            stop();
            alert("Time's Up!");
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    run();

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var questionsArr = [
        {
            name: "birthday",
            question: "1. What is HP's bday?",
            choices: ["June 22", "July 4", "July 31"],
            answer: ["July 31"]
        },
        {
            name: "potions",
            question: "2. Who was HP's potions teacher is year 1?",
            choices: ["Slughorn", "Snape", "Dumbledore"],
            answer: ["Snape"]
        },
        {
            name: "venom",
            question: "3. What is the only antidote to Basilisk venom?",
            choices: ["Phoenix Tears", "Draught of Living Death", "Pumpkin Juice"],
            answer: ["Phoenix Tears"]
        },
    ];

    //grab our form 
    var $form = $("#myForm");

    questionsArr.forEach(function (item) {
        var $div = $("<div>");
        var $p = $("<p>" + item.question + "</p>");
        $div.append($p);
        item.choices.forEach(function (choice) {
            var $input = $(`<input value=${choice} name="${item.name}" type="radio">`);
            var $label = $("<label>").text(choice);
            $div.append($input).append($label);
        });
        $form.append($div);
    });



    $form.append($('<button type="submit" id="submit"> Submit! </button>'));

    $form.on("submit", function (e) {
        e.preventDefault();
        stop();
        var $questions = $(this).children("div");
        $questions.each(function (index, elm) {
            var value = $(elm).children("input:checked").val();
            if (questionsArr[index].answer == value) {
                correct++;
            } else if (questionsArr[index].answer !== value) {
                incorrect++;
            } 
        });
        score();
    });

    function score() {
        console.log("number correct:" + correct);
        console.log("number incorrect: " + incorrect);
        document.getElementById("#resultsdiv").innerHTML = "You got " + correct + " out of 3 correct!";
        document.getElementById("#resultsdiv").innerHTML = "You got " + incorrect + " incorrect!";
    }





});



    // //when submit button is pushed, time is stopped
    // $("#submit").on("click", function(){
    //     clearInterval(intervalId);
    //     console.log("clicked");

    // })

    // $("form").each(function (i, e) {
    //     console.log($(e).children("input:checked"))

    // ;

    // //checked answers are compared to correct answers
    // //if the correct answer is checked, add one to correct
    // //if the correct answer is not checked, add one to wrong
    // //display correct score 



    //     var questionsArr = [
    //         {
    //             question: "birthday",
    //             choices: ["june22", "july4", "july31"],
    //             correctChoice: 2,
    //         },
    //         {
    //             question: "potions",
    //             choices: ["slughorn", "snape", "hagrid"],
    //             correctChoice: 1,
    //         }
    //     ]

    //     var arr = [];
    //     //ask for all inputs in the forms 
    //     var $inputs = $("form").children("input");
    //     //loop through each input of each form 
    //     console.log($inputs);
    //     $inputs.each(function (index, item) {
    //         var answers = {};
    //         answers[item.name] = item.value;
    //         arr.push(answers);
    //     });
    //     console.log(arr);






    // })


//(var).each
