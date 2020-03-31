document.getElementById('fileUpload').addEventListener('change', event => {
    sendFileUpload(event);
})

function sendFileUpload(e) {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);

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
    // const current = document.getElementById('current').value;
    const folderName = document.getElementById('folderName').value;
    createFolder(folderName).then(function (res) {
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