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

function createFolder(folderName, folderParent) {
    return fetch(`/folder/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            folderName,
            folderParent
        })
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}

function deleteFolder(id) {
    return fetch(`/folder/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            id
        })
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}