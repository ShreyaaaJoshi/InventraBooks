function getImgUrl (name) {
    // return new URL(`../assets/books/${name}`, import.meta.url)
    return `https://inventrabook-backend.onrender.com/uploads/${name}`;
}

export {getImgUrl}