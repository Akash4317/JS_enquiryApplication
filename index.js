// let user = [{
//         "name": "Akash",
//         "email": "aky@gmail.com"
//     },
//     {
//         "name": "yadav",
//         "email": "yadav@gmail.com"
//     }
// ]

// // console.log(localStorage.setItem("name", JSON.stringify(user)));
// console.log(JSON.parse(localStorage.getItem("name")));


let form = document.querySelector("form");
let main = document.querySelector(".main");
form.addEventListener("submit", (event) => {
    let name = event.target.uname.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    userData.push({
        "name": name,
        "email": email,
        "phone": phone
    })

    localStorage.setItem("userDetails", JSON.stringify(userData))
    event.target.reset();
    displayData();

    // event.preventDefault();
})


let displayData = () => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    let finalData = "";
    userData.forEach((element, i) => {
        finalData += `
        <div class="items">
            <span onClick="removeData(${i})">&times;</span>
            <h5>Name</h5>
            <div>${element.name}</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Phone</h5>
            <div>${element.phone}</div>

    </div>`
    });

    main.innerHTML = finalData;
}

let removeData = (index) => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
    userData.splice(index, 1);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    displayData();
}
displayData();