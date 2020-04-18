import fs from 'fs';
import appRoot from 'app-root-path';
import imageThumbnail from 'image-thumbnail';

const createThumbnail = (buffer, name) => {
    const options = {
        percentage: 25
    };
    imageThumbnail(buffer, options)
        .then(thumbnail => {
            fs.writeFileSync(appRoot + '/uploads/thumbnails/THUMB-' + name, thumbnail);
        })
        .catch(err => console.error(err));
};

export default createThumbnail;