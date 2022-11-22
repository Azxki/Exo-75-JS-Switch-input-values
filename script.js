
let non = document.getElementById("switch");

non.addEventListener("click", function () {
    let maVar1 = document.getElementById("input1");
    let maVar2 = document.getElementById("input2");

    maVar1.value = maVar2.value;
    maVar2.value = maVar1.value;
})

console.log(non);