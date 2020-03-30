function getToken(email, password) {
    return fetch("http://localhost:3000/login", {
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

function uploadFile(file) {
    return fetch(`http://localhost:3000/file/upload`, {
        method: 'POST',
        credentials: 'include',
        body: file
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}

function deleteFile(fileName) {
    return fetch(`http://localhost:3000/file/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            fileName
        })
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}

function createFolder(folderName) {
    return fetch(`http://localhost:3000/folder/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            folderName
        })
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}

function deleteFolder(folderName) {
    return fetch(`http://localhost:3000/folder/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            folderName
        })
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}