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

function uploadFile(url, method, data) {
    // Create the XHR request
    let request = new XMLHttpRequest();
    request.withCredentials = true;

    request.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            let percentage = (e.loaded / e.total) * 100;
            const container = document.getElementById('progressContainer');
            container.style.display = 'block';
            showUploadProgress(percentage);
        }
    };

    // Return it as a Promise
    return new Promise(function (resolve, reject) {

        // Setup our listener to process compeleted requests
        request.onreadystatechange = function () {

            // Only run if the request is complete
            if (request.readyState !== 4) return;

            // Process the response
            if (request.status >= 200 && request.status < 300) {
                // If successful
                resolve(request);
            } else {
                // If failed
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }

        };

        // Setup our HTTP request
        request.open(method || 'GET', url, true);

        // Send the request
        request.send(data);
    });
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