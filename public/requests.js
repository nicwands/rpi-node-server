function getToken(email, password) {
    return fetch("http://localhost:3000/token", {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(email + ":" + password)
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.error(err);
        })
}