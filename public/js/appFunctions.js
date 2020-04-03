document.getElementById('fileUpload').addEventListener('change', event => {
    sendFileUpload(event);
});

function showUploadProgress(p) {
    const bar = document.getElementById('progress');
    bar.style.width = p + "%";
}

function sendFileUpload(e) {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('path', e.target.dataset.path);

    let makeRequest = function (url, method) {

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
            request.send(formData);

        });
    };

    makeRequest('/file/upload', 'POST')
        .then(function (res) {
            if (res.status === 200) {
                location.reload();
            }
        })
        .catch(function (error) {
            console.log('Something went wrong', error);
        });

    // uploadFile(formData).then(function (res) {
    //     if (res.status === 200) {
    //         location.reload();
    //     }
    // })
}

function sendDeleteFile(fileName) {
    deleteFile(fileName).then(function (res) {
        if (res.status === 200) {
            location.reload();
        }
    })
}

function sendNewFolder() {
    const folder = document.getElementById('folderName');
    const folderName = folder.value;
    const path = folder.dataset.path;

    createFolder(folderName, path).then(function (res) {
        if (res.status === 200) {
            location.reload();
        }
    })
}

function enterSubmit(e) {
    if (e.key === "Enter") {
        sendNewFolder()
    }
}

let folderNameInput = document.getElementById('folderName');
folderNameInput.addEventListener('keypress', enterSubmit);

function sendDeleteFolder(folderName) {
    deleteFolder(folderName).then(function (res) {
        if (res.status === 200) {
            location.reload();
        }
    })
}