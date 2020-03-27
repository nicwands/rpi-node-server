const imageThumbnail = require('image-thumbnail');

const createThumbnail = async function(original) {
    // imageThumbnail(original)
    //     .then(thumbnail => { console.log(thumbnail) })
    //     .catch(err => console.error(err));
    try {
        const imageBuffer = fs.readFileSync(original);
        const thumbnail = await imageThumbnail(imageBuffer);
        console.log(thumbnail);

    } catch (err) {
        console.error(err);
    }
};

module.exports = createThumbnail;