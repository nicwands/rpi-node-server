import fs from 'fs';
import appRoot from 'app-root-path';
import imageThumbnail from 'image-thumbnail';

const createThumbnail = async (buffer, name, size) => {
    const options = {
        percentage: (size > 2000000) ? 10 : 25
    };
    imageThumbnail(buffer, options)
        .then(thumbnail => {
            fs.writeFileSync(appRoot + '/uploads/.thumbnails/THUMB-' + name, thumbnail);
        })
        .catch(err => console.error(err));
    await imageThumbnail
};

export default createThumbnail;
