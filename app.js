const randomNumberFeedback = document.querySelector('#randomNumber');
const generateRandomBtn = document.querySelector('#generateRandomBtn');

generateRandomBtn.addEventListener('click', () => {


//const randomNumber = Math.floor(Math.random() * (11 - 1) + 1 );

const randomNumber = Math.floor(Math.random() * 10 ) + 1;



const feedbackmessage = `Random Number: ${randomNumber}` ;

console.log(feedbackmessage)


randomNumberFeedback.innerHTML = feedbackmessage;

}); 
    

