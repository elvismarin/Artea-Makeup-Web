
function openmodal(selector){
    const el = document.querySelector(selector);
    el.classList.add("modal-opened");
}

function closemodal(selector){
    const el = document.querySelector(selector);
    el.classList.remove("modal-opened");
}