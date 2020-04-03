document.getElementById('fileUpload').addEventListener('change', event => {
    sendFileUpload(event);
})

function sendFileUpload(e) {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('path', e.target.dataset.path);

    uploadFile(formData).then(function (res) {
        if (res.status === 200) {
            location.reload();
        }
    })
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