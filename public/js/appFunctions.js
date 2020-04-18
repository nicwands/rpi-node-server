document.getElementById('fileUpload').addEventListener('change', event => {
    sendFileUpload(event);
});

function showUploadProgress(p) {
    const bar = document.getElementById('progress');
    bar.style.width = p + "%";
}

function sendFileUpload(e) {
    console.log("files: ", e.target.files);
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append(`file_${i}`, files[i]);
    }
    // formData.append('file', files);
    formData.append('path', e.target.dataset.path);
    formData.append('count', files.length.toString());

    uploadFile('/file/upload', 'POST', formData)
        .then(function (res) {
            if (res.status === 200) {
                location.reload();
            }
        })
        .catch(function (error) {
            console.log('Something went wrong', error);
        });
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