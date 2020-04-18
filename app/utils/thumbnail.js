import fs from 'fs';
import appRoot from 'app-root-path';
import imageThumbnail from 'image-thumbnail';

const createThumbnail = async (buffer, name) => {
    imageThumbnail(buffer)
        .then(thumbnail => {
            console.log("/// thumbnail: ", thumbnail);
            fs.writeFileSync(appRoot + '/uploads/thumb-' + name, thumbnail);
        })
        .catch(err => console.error(err));
};

export default createThumbnail;