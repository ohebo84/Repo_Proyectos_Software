// ==================
// | ListaContactos |
// ==================
const listaContactos = [
  {
    id: 776,
    nombres: "Sunilda",
    apellidos: "Bonilla Morales",
    telefono: "301-456-7890",
    ubicaciones: {
      ciudad: "Cartagena",
      dirección: "Transversal 40 # 26-53",
    },
  },

  {
    id: 348,
    nombres: "Carlos Alberto",
    apellidos: "Herrera Bonilla",
    telefono: "323-123-4567",
    ubicaciones: {
      ciudad: "Cartagena",
      dirección: "Transversal 40 # 26-53",
    },
  },

  {
    id: 210,
    nombres: "Dorelvis",
    apellidos: "Herrera Bonilla",
    telefono: "313-890-1234",
    ubicaciones: {
      ciudad: "Cartagena",
      dirección: "Transversal 40 # 26-53",
    },
  },
];

console.log("---------------------------------------");
console.log("lista de Contactos original");
console.log("---------------------------------------");
console.log(listaContactos);

// =======================
// | Agregar un contacto |
// =======================
//Añadir un nuevo contacto a la lista de contactos
const contacto = {
  id: 211,
  nombres: "Oscar Ivan",
  apellidos: "Herrera Bonilla",
  telefono: "555-555-5555",
  ubicaciones: {
    ciudad: "Cartagena",
    dirección: "Transversal 40 # 26-53",
  },
};

function agregarContactos(contacto) {
  // Check if the contact already exists in the list
  if (listaContactos.find((c) => c.id === contacto.id) !== undefined) {
    // El contacto ya existe, no se hace nada.
    return;
  }
  // El contacto no existe, se agrega a la lista de contactos.
  listaContactos.push(contacto);
  console.log("---------------------------------------");
  console.log(`Se agregó el contacto con el ID N°: ${contacto.id} - ${contacto.nombres} ${contacto.apellidos}`);
  console.log("---------------------------------------");
  console.log(listaContactos);
}

// ========================
// | Eliminar un contacto |
// ========================
//Eliminar un contacto existente de lista de contactos
function eliminarContactoPorId(id) {
  const indiceaEliminar = listaContactos.findIndex((item) => item.id === id);
  console.log("---------------------------------------");
  console.log(`Contacto a Eliminar: N° ${indiceaEliminar}`);
  console.log("---------------------------------------");
  listaContactos.splice(indiceaEliminar, 1);
  console.log("---------------------------------------");
  console.log(`Se elimino el contacto con el ID N°:  ${contacto.id} - ${contacto.nombres} ${contacto.apellidos}`);
  console.log("---------------------------------------");
}

// ==================================
// | Imprimir la lista de contactos |
// ==================================
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

// ==========================
// | Actualizar un contacto |
// ==========================

function actualizarContactoPorId(id) {
  console.log("---------------------------------------");
  console.log(`Se busca y se actualiza el contacto con ID N°: ${id}`);
  console.log("---------------------------------------");
  // Se busca el contacto por el ID
  const contacto = listaContactos.find((c) => c.id === id);
  // Se actualiza el contacto
  contacto.id = 388;
  contacto.nombres = "Carlos";
  contacto.apellidos = "Herrera Ochoa";
  contacto.telefono = "300-123-9876";
  contacto.ubicaciones.ciudad = "Turbaco";
  contacto.ubicaciones.dirección = "Av. Pastrana #19-2";
  console.log(contacto);
  console.log("---------------------------------------");
  console.log("Se imprime nuevamente la lista actual de contactos");
  console.log("---------------------------------------");
  console.log(listaContactos);
}

//Llamado de funciones
agregarContactos(contacto);
eliminarContactoPorId(211);
imprimirContactos()
actualizarContactoPorId(348);
