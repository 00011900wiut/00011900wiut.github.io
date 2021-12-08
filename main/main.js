const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const joinButton = document.querySelector('.join_us');
const logInForm = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const signInButton = document.querySelector('.sign_in');
const signInForm = document.querySelector('.modal2');
const closeButton2 = document.querySelector('.close2');
let h5 = document.getElementById('h5');
let p = document.getElementById('p');
let passwordInput = document.getElementById('passwordInput');
let countWord = document.getElementById('word_count');
let passwordInputSignIn = document.getElementById('passwordInputSignIn');
let countWordSignIn = document.getElementById('word_count_signIn');
let btnLeft = document.getElementById('btn_left');
let btnRight = document.getElementById('btn_right');
let contentAnswer = document.getElementById('contentAnswer');
let contentAnswer2 = document.getElementById('contentAnswer2');
let contentWriter = document.getElementById('contentWriter');
let contentWriter2 = document.getElementById('contentWriter2');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email_');
let mobileNumber = document.getElementById('mobileNumber');
let msg = document.getElementById('msg');
let form = document.getElementById('form');
let goUp = document.getElementById('goUp');
let kkAcademy = document.getElementById('kkAcademy');

// region "about"
var j = 0;
//list with text and name of a user
var answerList = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "22Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "33Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "44Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]
var writerList = ["Anthony Walker", "2Anthony Walker", "3Anthony Walker", "4Anthony Walker"]
btnRight.addEventListener('click', function(){
    if(j < answerList.length - 1){
            j++;
        } else {
            j=0;
        }
    contentAnswer.textContent = answerList[j];
    contentWriter.textContent = writerList[j];
    contentAnswer2.textContent = answerList[j];
    contentWriter2.textContent = writerList[j];
});

btnLeft.addEventListener('click', function(){
    if(j < 1){
            j = answerList.length - 1;
        } else {
            j--;
        }
    contentAnswer.textContent = answerList[j];
    contentWriter.textContent = writerList[j];
    contentAnswer2.textContent = answerList[j];
    contentWriter2.textContent = writerList[j];

});
//getting values from form and showing them in the about section
form.addEventListener('submit', function(event){
    event.preventDefault();
    const itemMessage = {
        name: firstName.value,
        surname: lastName.value,
        message: msg.value
    }
    console.log(itemMessage)
    fullName = `${itemMessage.name} ${itemMessage.surname}`

    writerList[answerList.length] = fullName;
    answerList[answerList.length] = itemMessage.message;
    

});
//loop for slider
var i=0;
    var images = ["main/images/course_populars.jpg", "main/images/course_populars2.jpg"];
    var h2s = ["How to Learn: Strategies for Starting, Practicing & Mastering the Skills You’ve Always Wanted", "Productivity for Creatives: Build a System That Brings Out Your Best"];
    var ps = ["Mike Boyd", "Thomas Frank"];
    var time = 3000;

    function img_slider(){
        document.sliding.src = images[i];
        h5.textContent = h2s[i];
        p.textContent = ps[i];
        if(i < images.length - 1){
            i++;
        } else {
            i=0;
        }

        setTimeout("img_slider()", time);
    }
    window.onload = img_slider;

//showing and hiding menu toggle
menuToggle.addEventListener("click", function(){
	menuToggle.classList.toggle('active');
	showcase.classList.toggle('active');
});

// login form
joinButton.addEventListener('click', function(){
	logInForm.classList.toggle('active');
});

closeButton.addEventListener('click', function(){
	logInForm.classList.toggle('active');
});

//sign in form
signInButton.addEventListener('click', function(){
	signInForm.classList.toggle('active');
});

closeButton2.addEventListener('click', function(){
	signInForm.classList.toggle('active');
});

//cheking if password has 8 characters
passwordInput.addEventListener("input", function () {
    let num = passwordInput.value.trim().length;
    if (num >= 8){
        countWord.textContent = "Good"
    }else{
        countWord.textContent = (8 - num) + " more";
    }
});

passwordInputSignIn.addEventListener("input", function () {
    let num = passwordInputSignIn.value.trim().length;
    if (num >= 8){
        countWordSignIn.textContent = "Good"
    }else{
        countWordSignIn.textContent = (8 - num) + " more";
    }
});

//loading animation
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
