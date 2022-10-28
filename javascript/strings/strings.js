const nombre = " Nicolas";
const apellido = "Veron ";

const estudiante = nombre.concat(" ").concat(apellido);
const estudianteMayus = estudiante.toUpperCase();
const estudianteMin = estudiante.toLowerCase();

const estudianteLength = estudiante.length;
const inicialName = estudiante[0];
const finalApellido = apellido.substring(apellido.length -1, apellido.length)
const sinEspacios = estudiante.trim()
const include = estudiante.includes("Nicolas");

console.log(include);