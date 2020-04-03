document.getElementById('fileUpload').addEventListener('change', event => {
    console.log("/// fired event: ", event);
    sendFileUpload(event);
});

function sendFileUpload(e) {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('directory', e.target.dataset.directory);

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
    const folderParent = document.getElementById('folderName').dataset.parent;
    createFolder(folderName, folderParent).then(function (res) {
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

function sendDeleteFolder(id) {
    deleteFolder(id).then(function (res) {
        if (res.status === 200) {
            location.reload();
        }
    })
}