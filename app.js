
const form = document.querySelector('#searchForm');
const query = document.querySelector('#query')


const deleteImgs = function () {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

query.addEventListener('change', deleteImgs)



const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

