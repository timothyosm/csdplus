let saveMsg = () => {
    let input = document.getElementById("mainform").value;
    localStorage.setItem("msg", input.val());
}
var storedValue = localStorage.getItem("msg");
document.getElementById("storedMessages").innerHTML = storedValue;
document.getElementById('save').addEventListener('click', saveMsg());