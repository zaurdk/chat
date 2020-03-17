function AddMessage() {
    let targetMail = document.getElementById('Email').value;
    let targetMessage = document.getElementById('Text').value;



    let message = document.createElement('div');
    message.innerHTML = `
                        <p>${targetMail}</p><br>
                        <p>${targetMessage}</p>`

    document.getElementById('MessageField').append(message);
    document.getElementById('Text').value = '';
}

document.getElementById('Send').addEventListener('click', AddMessage);