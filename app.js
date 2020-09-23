document.querySelector("#inputDate").valueAsDate = new Date();
const scriptURL = "https://script.google.com/macros/s/AKfycbzWq_KTTME1hQsmaL7SnOG14BSAiaVMliNc4PSojFcMCgurANo/exec" 
const form = document.forms['#googleSheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})

