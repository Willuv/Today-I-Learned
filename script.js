console.log("Hello World!");

const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

// reveal the form to enter a fact if the button is clicked
// update the button when form is open/closed
btn.addEventListener('click', function() {
    if(form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        btn.textContent = 'Close'
    } else {
        form.classList.add('hidden');
        btn.textContent = 'Share a Post'
    }
});