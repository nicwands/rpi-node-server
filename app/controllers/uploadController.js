export const uploadFile = (req, res) => {
    console.dir(req.file);
    // async function createThumbnail() {
    // 	const thumbnail = await thumbnnail(path.join(__dirname, "uploads/", req.file.originalname));
    // }
    // createThumbnail();
    res.redirect('/');
};