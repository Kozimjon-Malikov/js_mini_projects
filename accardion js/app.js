const formSend = document.querySelector('.formSend'),
    fname = document.querySelector('#fname'),
    content = document.querySelector('#content'),
    items = document.querySelectorAll('.items'),
    acc = document.querySelector('.accordion');

formSend.addEventListener('submit', (e) => {
    e.preventDefault();
    if (fname.value.trim() && content.value.trim()) {
        fname.style.outline="1px solid blue"
        content.style.outline="1px solid blue"
        let data = new FormData(formSend);
        let newData = [...data.entries()];
        acc.insertAdjacentHTML('beforeend', `
    <div class="items">
    <div class="title">${newData[0][0, 1]}</div>
    <p class="content">
        ${newData[1][0, 1]}
    </p>
</div>
    `)
    } else {
        fname.style.outline="1px solid red";
        content.style.outline="1px solid red";
    }
    clearF()
})
function clearF(){
    fname.value=""
    content.value=""
}

acc.addEventListener('click', function (e) {
    if (e.target.closest('.title')) {
        const items = e.target.closest('.items');
        items.classList.toggle('open');
    }
})