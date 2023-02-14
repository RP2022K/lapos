
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");

const nameElem = document.querySelector("#name");
const cityElem = document.querySelector("#city");
const salaryElem = document.querySelector("#salary");

const addButton = document.querySelector("#addButton");

const dolgozoLista = [
    {id: 1, name: "Pali", city: "Szolnok", salary: 385},
    {id: 2, name: "Pisti", city: "Csolnok", salary: 386},
    {id: 3, name: "Peti", city: "Szeged", salary: 350},
    {id: 4, name: "Géza", city: "Szolnok", salary: 380},
    {id: 5, name: "Vali", city: "Szolnok", salary: 444},
    {id: 6, name: "Mari", city: "Szajol", salary: 555},
    {id: 7, name: "Panni", city: "Tata", salary: 600},
];

function loadEmployee(){
    dolgozoLista.forEach((dolgozo) => {

        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdSalary = document.createElement('td');
        
    
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
        tr.append(generateChangeButton(dolgozo.id));
    });
};

loadEmployee();

function generateDeleteButton(id){
    let tdDel = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList = "btn btn-danger";
    handleDeleteEvent(button, id);
    tdDel.append(button);
    return tdDel;
}

function generateChangeButton(id){
    let tdChange = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Módosítás";
    button.classList = "btn btn-success";
    handleDeleteEvent(button, id);
    tdChange.append(button);
    return tdChange;
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
        loadEmployee();
    });
}

addButton.addEventListener('click', () =>{
    addEmployee();
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
    loadEmployee();
}

function clearFields(){
    nameElem.value = '';
    cityElem.value = '';
    salaryElem.value = '';
}