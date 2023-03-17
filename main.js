let formularioSede = document.querySelector("#formularioSede");
let formularioCamper = document.querySelector("#formularioCamper");
let formularioNivel = document.querySelector("#formularioNivel");
let formularioRoad = document.querySelector("#formularioRoad");
let formularioTrainer = document.querySelector("#formularioTrainer");
let campus = {};

formularioSede.addEventListener("submit", (e) =>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombreSede}`] = {"Campers" : [], "Trainers" : []};
    listaSedes();
    formularioSede.reset();
});

let listaSedes = () => {
    let opciones = document.querySelector('[name="sede"]');
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option disabled>Seleccione una opcion</option>
            <option value="${val}"> ${val} </option>
        `);
    };
};

formularioCamper.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Campers"].unshift.data;
    console.log(campus);
    formularioCamper.reset;
})

console.log(campus)