
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");

const dolgozoLista = [
    {name: "Pali", city: "Szolnok", salary: 385},
    {name: "Pisti", city: "Csolnok", salary: 386},
    {name: "Peti", city: "Szeged", salary: 350},
    {name: "Géza", city: "Szolnok", salary: 380},
    {name: "Vali", city: "Szolnok", salary: 444},
    {name: "Mari", city: "Szajol", salary: 555},
    {name: "Panni", city: "Tata", salary: 600},
];

dolgozoLista.forEach((dolgozo) => {
    console.log(dolgozo.city);

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
    
});