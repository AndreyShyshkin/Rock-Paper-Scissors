let modal = document.querySelector("#modal");
let rules = document.querySelector("#rules");
let close = document.querySelector("#close");
let modalOverlay = document.querySelector(".modal-overlay");

rules.onclick = function(){
    modal.classList.add("isActive");
};

close.onclick = function(){
    modal.classList.remove("isActive");
};

modalOverlay.onclick = function(){
    modal.classList.remove("isActive");
};

