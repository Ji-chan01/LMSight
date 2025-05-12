const approved_table = document.querySelector(".approved_table");
const rejected_table = document.querySelector(".rejected_table");
const pending_table = document.querySelector(".pending_table");

const approve_btn = document.querySelector(".approve-btn");
const pending_btn = document.querySelector(".pending-btn");
const reject_btn = document.querySelector(".reject-btn");

approve_btn.addEventListener("click", () => {
    approved_table.classList.add("active");
    rejected_table.classList.remove("active");
    pending_table.classList.remove("active");
})
pending_btn.addEventListener("click", () => {
    pending_table.classList.add("active");
    rejected_table.classList.remove("active");
    approve_btn.classList.remove("active");
    console.log("pending")
})
reject_btn.addEventListener("click", () => {
    rejected_table.classList.add("active");
    approved_table .classList.remove("active");
    pending_table.classList.remove("active");
})