
const a = document.getElementById("name");
const b = document.getElementById("email");
const c = document.getElementById("password");
const btn = document.getElementById("button");
btn.addEventListener("click",add);
function add(){
    a.value="pradip mandal";
    b.value="pradipmandal@gmail.com"
    c.value="pradipmandal";
    btn.textContent="submitted";
};