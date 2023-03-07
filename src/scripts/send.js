let sendButton = document.getElementById('send');
const form = document.getElementById('form');

sendButton.addEventListener('click', function(e){
    e.preventDefault();
    sendButton.value = 'Sending...';
    const serviceID = 'service_cx0lgga';
    const templateID = 'template_i5x62iy';

    emailjs.sendForm(serviceID, templateID, form).then(() => {
        sendButton.value = 'Send Email';
        alert('Sent')
    }, (err) => {
        sendButton.value = 'Send Email'
        alert(JSON.stringify(err));
    });

})
