let container = document.querySelector("#container")
let tbody = document.querySelector("tbody")

let Department = document.querySelector("#Filter")
let Gender = document.querySelector("#Gender")
let SortPrice = document.querySelector("#Sort")

let btnDiv = document.querySelector("#btn") 
let Next = document.createElement("button")
Next.innerText = "Next"

let Back = document.createElement("button")
Back.innerText = "Back"
btnDiv.append(Next, Back)



function getData(URL){
        fetch(URL)
        .then(function (res){
            res = res.json()  
            return res
        })
        .then(function (res){
            // console.log(res);
            // console.log(res.data);
            showData(res.data)
        })
    }

function showData(arr) {
    tbody.innerHTML = null
    arr.forEach(function(element) {
        let tRow = document.createElement("tr")
        tRow.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.gender}</td>
            <td>${element.department}</td>
            <td>${element.salary}</td>
        `

        tbody.append(tRow)
    });
}


//Filter by Department
function ChangeDepartment(){
    let value = Department.value
    // console.log(value);
    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${value}`
    
    getData(URL)
}

Department.addEventListener('change', ChangeDepartment)

//Filter by Gender

function sortGender(){
    let value = Gender.value

    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${value}&sort=salary&order=asc`

    getData(URL)
}
Gender.addEventListener("change", sortGender)

//Sort by Price
function sortPrice(){
    let value = SortPrice.value
    
    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&sort=salary&order=${value}`

    getData(URL)
}
SortPrice.addEventListener("change", sortPrice)

getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")