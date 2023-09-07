function submitData(name, email) {
    const userData = {
        name: name,
        email: email,
    };

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    return fetch('http://localhost:3000/users', config)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            appendIdToDOM(data.id);
        })
        .catch((error) => {
            appendErrorToDOM(error.message);
        });
}

function appendIdToDOM(id) {
    const idElement = document.createElement('p');
    idElement.textContent = id;
    document.body.appendChild(idElement);
}

function appendErrorToDOM(errorMessage) {
    const errorElement = document.createElement('p');
    errorElement.textContent = errorMessage;
    document.body.appendChild(errorElement);
}