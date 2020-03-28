function getToken(email, password) {
    return fetch("http://10.0.0.79:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(email + ":" + password)
        },
        credentials: 'include'
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}
