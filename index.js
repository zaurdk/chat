var counter = 0;

function AddMessage() {
    let targetMail = document.getElementById('Email').value;
    let targetMessage = document.getElementById('Text').value;



    let message = document.createElement('div');
    message.classList.add('Message');
    message.setAttribute('id', `${counter}`);
    message.innerHTML = `
                        <p>${targetMail}</p><br>
                        <p>${targetMessage}</p>`

    document.getElementById('MessageField').append(message);
    document.getElementById('Text').value = '';

    counter++;
    window.stop();
}

document.getElementById('Send').addEventListener('click', ()=>{setTimeout(AddMessage, 1000)});