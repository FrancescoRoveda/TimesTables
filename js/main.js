window.onload = function () {

    /*Get what tables to ask*/

    $(".tab").on("click", function () {
        $(this).toggleClass("active")
    })


    $("#start").on("click", function () {
        $(".active").each(function () {
            console.log($(this).children().text())
        })
    })

    /* Generate Random Numbers */


    var timetableLimit = 10;
    var a;
    var b;
    var answerString;

    function randomNumber(x) {
        return Math.floor(Math.random() * (x + 1));
    }

    function generateNumbers(x) {
        a = randomNumber(x);
        b = randomNumber(x);
        answerString = a + " x " + b + " = " + (a * b);
    }

    generateNumbers(timetableLimit);

    console.log(a, b);
    $("#multipleA").html(a)
    $("#multipleB").html(b)



    $("#risposta").on("click", function () {
        answer = $("#answer-box").val();
        if (answer) {
            if (answer == a * b) {
                score += 1;
                $("#correct").show();
                console.log('correctAnswer visible');
            } else {
                $("#false").show();
                //self.answerS(answerString);
                console.log('falseAnswer visible');
            }

            setTimeout(function () {
            }, 3500);


            /* Generate new numbers and update score */

            setTimeout(function () {
                generateNumbers(timetableLimit);
                $("#multipleA").html(a)
                $("#multipleB").html(b)
                $("#answer-box").val('')
                $("#correct").hide();
                $("#false").hide();
                questions = questions + 1;
                /*
                self.correctCount(score);
                self.questionCount(questions);
                self.answer('');
                */
               
            }, 1500);

        }
    })
    /*Scores*/

    var score = 0;
    var questions = 0;


    /* View model */


};