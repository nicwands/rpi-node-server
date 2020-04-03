function getToken(username, password) {
    return fetch("/login", {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(username + ":" + password)
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
    return fetch(`/file/upload`, {
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
    return fetch(`/file/delete`, {
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

function createFolder(folderName, path) {
    return fetch(`/folder/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            folderName,
            path
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
    return fetch(`/folder/delete`, {
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