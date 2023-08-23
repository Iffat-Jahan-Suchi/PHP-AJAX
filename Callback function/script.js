// function display()
//
// {
//     console.log($result);
// }
// function myResult(x,y,callback)
// {
//     $result= x+y;
//     if(callback)
//     {
//         return callback($result)
//     }
//
// }

const paymentSuccess = true;
const progressed = 80;

function enroll(callback) {

    setTimeout(function () {
        if (paymentSuccess) {
            console.log("Course enrolment is processing....")
            callback();
        } else {
            console.log("course enroll is failed");
        }

    }, 5)
}

function progress(callback) {

    setTimeout(function () {
        if (progressed >= 80) {
            console.log("You are progressing");
            callback();
        } else {
            console.log('You are not progress the course');
        }
    }, 7)
}

function getCertificate() {
    console.log("Congress!!You are got a certificate");
}

 enroll(function () {
    progress(getCertificate)
 });



