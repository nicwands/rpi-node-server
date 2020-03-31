function openFolderModal() {
    let modal = document.getElementById('folderModal');
    let input = document.getElementById('folderName');
    modal.style.display = 'block';
    input.focus();
}

let addFolderIcon = document.getElementById('addFolderIcon');
addFolderIcon.addEventListener('click', openFolderModal);

function closeFolderModal() {
    let modal = document.getElementById('folderModal');
    modal.style.display = 'none';
}

let closeFolderIcon = document.getElementById('modalClose');
closeFolderIcon.addEventListener('click', closeFolderModal);