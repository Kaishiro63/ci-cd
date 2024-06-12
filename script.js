document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userName = document.getElementById('name').value;
    console.log(userName);
});