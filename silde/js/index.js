let upload = document.querySelector(".upload");
let image = document.querySelector(".image")
let nameInput = document.getElementById("nameInput");
let surnameInput = document.getElementById("surnameInput");
let salaryInput = document.getElementById("salaryInput");
let filterIcon=document.querySelector(".filter")
let searchIcon=document.querySelector(".search")
let popup=document.querySelector(".popup");
let biggestImage=document.querySelector(".popup img");
let filterInput=document.querySelector(".filters input")
image.addEventListener("click", () => {
    upload.click();
})
let imagesSrc;
upload.addEventListener("change", (e) => {
    const { files } = e.target;
    for (let file of files) {
        const fileReader = new FileReader()
        fileReader.onloadend = function (e) {
            const { result } = e.target;
            const image = document.createElement("img");
            image.setAttribute("src", result);
            imagesSrc = result;
            //  document.querySelector(".image").appendChild(image);
        };
        fileReader.readAsDataURL(file);
    }
})
document.querySelector(".addBtn").addEventListener("click", () => {
    document.querySelector(".inputs").style.display = "none"
    var table = document.querySelector(".feature");
    var row = table.insertRow(1);
    var cellName = row.insertCell(0);
    var cellSurname = row.insertCell(1);
    var cellSalary = row.insertCell(2);
    var cellImg = row.insertCell(3);
    var img = document.createElement("img")

    cellImg.appendChild(img)

    let nameSpan = document.createElement("span")
    let surnameSpan = document.createElement("span")
    salarySpan=document.createElement("span")
    nameSpan.innerText = nameInput.value
    cellName.appendChild(nameSpan)
    surnameSpan.innerText = surnameInput.value
    cellSurname.appendChild(surnameSpan)
    salarySpan.innerText=salaryInput.value
    cellSalary.appendChild(salarySpan)
    filterIcon.addEventListener("click",()=>{
        if( Number(filterInput.value)<=Number(salarySpan.innerText) ) {  
            row.remove()
        }
    })

    cellSalary.innerText = salaryInput.value
    img.setAttribute("src", imagesSrc)
    img.style.width = "100px"
    img.style.height = "50px"
    nameInput.value = ""
    surnameInput.value = ""
    salaryInput.value = ""
    img.addEventListener("click",()=>{
        popup.style.display="block"
        changeImage(biggestImage)
})
document.querySelector(".close-icon").addEventListener("click", closeImage);

function closeImage() {
    popup.style.display = "none"
};
function changeImage(img) {
    biggestImage.setAttribute("src", imagesSrc)
};
popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        closeImage();
    }
});
    nameSpan.addEventListener("click", () => {
        let changeInput = document.createElement("input")
        changeInput.value = nameSpan.innerText;
        nameSpan.style.display = "none"
        cellName.appendChild(changeInput)
        changeInput.addEventListener("blur", () => {
            nameSpan.innerText = changeInput.value
            changeInput.remove()
            nameSpan.style.display = "block"
        })
    })
    surnameSpan.addEventListener("click", () => {
        let changeInputt = document.createElement("input")
        changeInputt.value = surnameSpan.innerText;
        surnameSpan.style.display = "none"
        cellSurname.appendChild(changeInputt)
        changeInputt.addEventListener("blur", () => {
            surnameSpan.innerText = changeInputt.value
            changeInputt.remove()
            surnameSpan.style.display = "block"
        })
    })
});




document.querySelector(".featureRow").addEventListener("click", () => {
    document.querySelector(".inputs").style.display = "flex"
})