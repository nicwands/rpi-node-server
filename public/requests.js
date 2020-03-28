function getToken(email, password) {
    return fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(email + ":" + password)
        },
        credentials: 'include'
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
}