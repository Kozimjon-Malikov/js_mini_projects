const auth = "T8V3kOT6lu1SRuNJW9ZJbA7ZFWlpgtVGl26fZILX4RxIdhfYeq6GHgOx";
const form = document.querySelector('.formSend'),
    search = document.querySelector('#search'),
    gallery = document.querySelector('.gallery');
let currentLink;
let searchValue;
let page = 1;

// ---------
async function fetchApi(url) {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    });
    const data = dataFetch.json();
    return data;
}

function generateImage(data) {
    data.photos.map(items => {
        gallery.insertAdjacentHTML('beforeend', `
        <div class="card">
          <div class="card-head">
          <span>${items.photographer}</span>
            <span><a href="${items.src.large}">Download</a></span>
          </div>
          <img loading="lazy" src="${items.src.large}" alt="${items.alt}">
        </div>
        `)
    })
}

async function curedPhotos() {
    const url = 'https://api.pexels.com/v1/curated?per_page=15&page=1'
    const data = await fetchApi(url);
    generateImage(data)
}
curedPhotos()

function clear() {
    gallery.innerHTML = ''
    search.innerHTML = ''
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = document.querySelector('#search').value;
    currentLink=searchValue;
    if (searchValue.trim()) {
        searchImages(searchValue)
    } else {
        return false
    }
})
async function moreLoad() {
    page++;
    const url = `https://api.pexels.com/v1/search?query=${currentLink}&per_page=15&page=${page}`;
    try {
        const data = await fetchApi(url);
        generateImages(data); // Assuming generateImages handles multiple images
        console.log(currentLink);
    } catch (error) {
        console.error('Error loading more images:', error);
    }
}
search.addEventListener('input', updateState);
function updateState(e) {
    searchValue = e.target.value;
}
async function searchImages(query) {
    clear()
    const url = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
    const data = await fetchApi(url);
    generateImage(data);
}