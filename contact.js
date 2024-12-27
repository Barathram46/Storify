document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show the submission message
    const submissionMessage = document.getElementById('submission-message');
    submissionMessage.style.display = 'block';

    // Clear the form fields
    this.reset();
});