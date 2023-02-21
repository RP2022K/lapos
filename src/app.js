
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");

const nameElem = document.querySelector("#name");
const cityElem = document.querySelector("#city");
const salaryElem = document.querySelector("#salary");

const addButton = document.querySelector("#addButton");
const saveButton = document.querySelector('#saveButton');

const modifyIdInput = document.querySelector("#modifyId");
const modifyNameInput = document.querySelector("#modifyName");
const modifyCityInput = document.querySelector("#modifyCity");
const modifySalaryInput = document.querySelector("#modifySalary");

const dolgozoLista = [
    {id: 1, name: "Pali", city: "Szolnok", salary: 385},
    {id: 2, name: "Pisti", city: "Csolnok", salary: 386},
    {id: 3, name: "Peti", city: "Szeged", salary: 350},
    {id: 4, name: "Géza", city: "Szolnok", salary: 380},
    {id: 5, name: "Vali", city: "Szolnok", salary: 444},
    {id: 6, name: "Mari", city: "Szajol", salary: 555},
    {id: 7, name: "Panni", city: "Tata", salary: 600},
];

function loadEmployees(){
    dolgozoLista.forEach((dolgozo) => {

        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdSalary = document.createElement('td');
        
        tdId.textContent = dolgozo.id;
        dolgozoTorzs.append(tr);
        tr.append(tdId);
    
        tdName.textContent = dolgozo.name;
        dolgozoTorzs.append(tr);
        tr.append(tdName);
    
        tdCity.textContent = dolgozo.city;
        dolgozoTorzs.append(tr);
        tr.append(tdCity);
    
        tdSalary.textContent = dolgozo.salary;
        dolgozoTorzs.append(tr);
        tr.append(tdSalary);
        
        tr.append(generateDeleteButton(dolgozo.id));
        tr.append(generateModifyButton(dolgozo));
    });
};

loadEmployees();

function generateDeleteButton(id){
    let tdDel = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList = "btn btn-danger";
    handleDeleteEvent(button, id);
    tdDel.append(button);
    return tdDel;
}

function handleDeleteEvent(button, id){
    button.addEventListener('click', () => {
        let delIndex = 0;
        dolgozoLista.forEach((dolgozo, index) => {
            if (dolgozo.id == id){
                delIndex = index;
            }
        })
        dolgozoLista.splice(delIndex, 1);
        dolgozoTorzs.textContent = '';
        loadEmployees();
    });
}

function generateModifyButton(dolgozo){
    let tdModify = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Módosítás";
    button.classList = "btn btn-success";
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#modifyModal');
    handleModifyEvent(button, dolgozo);
    tdModify.append(button);
    return tdModify;
}

function handleModifyEvent(button, dolgozo){
    button.addEventListener('click', () => {
        modifyIdInput.value = dolgozo.id;
        modifyNameInput.value = dolgozo.name;
        modifyCityInput.value = dolgozo.city;
        modifySalaryInput.value = dolgozo.salary;
    });
}

addButton.addEventListener('click', () =>{
    addEmployee();
});
saveButton.addEventListener('click', () =>{
    console.log("mentés árnyékeljárás");
    let id = modifyIdInput.value;
    let name = modifyNameInput.value;
    let city = modifyCityInput.value;
    let salary = modifySalaryInput.value;

    dolgozoLista.forEach((dolgozo)=>{
        if (dolgozo.id == id){
            console.log(dolgozo.name);
            dolgozo.name = name;
            dolgozo.city = city;
            dolgozo.salary = salary;
        }
    })
    dolgozoTorzs.textContent = '';
    loadEmployees();
});

function addEmployee(){
    dolgozo = {
        name: nameElem.value,
        city: cityElem.value,
        salary: salaryElem.value
    };
    dolgozoLista.push(dolgozo);
    clearFields();
    dolgozoTorzs.textContent = '';
    loadEmployees();
}

function clearFields(){
    nameElem.value = '';
    cityElem.value = '';
    salaryElem.value = '';
}