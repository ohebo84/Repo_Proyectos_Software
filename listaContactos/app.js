//Crear la lista de contactos
const listaContactos = [
    "Sunilda Bonilla Morales",
    "Carlos A Herrera Bonilla",
    "Dorelvis Herrera Bonilla"
]
console.log("---------------------------------------");
console.log("lista de Contactos original");
console.log("---------------------------------------");
console.log(listaContactos);

//Añadir un nuevo contacto a la lista de contactos
function agregarContactos(contacto) {
    listaContactos.push(contacto)
    console.log("---------------------------------------");
    console.log(`Se agrego el contacto: ${contacto}`);
    console.log("---------------------------------------");
    console.log(listaContactos);
    
}

//Eliminar un contacto de la lista de contactos
function eliminarContactos(contacto) {
    // Busca el contacto en la lista
    const index = listaContactos.indexOf(contacto);
  
    // Si el contacto no se encuentra, devuelve false
    if (index === -1) {
      return false;
    }
  
    // Elimina el contacto de la lista
    listaContactos.splice(index, 1);
  
    // Devuelve true para indicar que el contacto se ha eliminado correctamente
    console.log("------------------------------------------");
    return console.log(`Se elimino el contacto: ${contacto}`);
    console.log("------------------------------------------");
  }

  function imprimirContactos() {
    console.log("---------------------------------------");
    console.log("Se imprime la actual lista de contactos");
    console.log("---------------------------------------");
    // Recorre la lista de contactos
    for (let i = 0; i < listaContactos.length; i++) {
      // Imprime la actual lista de contactos
      console.log(listaContactos[i]);
    }
  }


//Llamado de funciones
agregarContactos("Oscar Herrera Bonilla")
eliminarContactos("Oscar Herrera Bonilla")
imprimirContactos()