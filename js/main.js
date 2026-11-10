const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 },
];

const infoEstudiante = new Promise ((resolve,reject)=> {
    if(nombre) {
        resolve ("Estudiante: ")
    } else { 
        reject("Estudiante no existe")
    }
});

const verificar
  .then((res)=> console.log("OK", res))
  .catch((error) => console.log("Error:", error))
  .finally(()=> console.log("Fin de la verificación"))

  console.log(infoEstudiante)
