function AddMessage() {
    let targetMail = document.getElementById('Email').innerText;
    let targetMessage = document.getElementById('Text').innerText;

    let message = document.createElement('div');
    message.innerHTML = `
                        <p>${targetMail}</p><br>
                        <p>${targetMessage}</p>`

    document.getElementById('MessageField').append(message);
    document.getElementById('Text').innerText = '';
}

document.getElementById('Send').addEventListener('click', AddMessage);