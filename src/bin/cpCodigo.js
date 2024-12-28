
// calcula el Código de provincia a partir de un array.filter de códigos postales municipio.
// 31-10-2024

// Importar el módulo necesario
import fs from 'fs';

export const codigoPR = (municipio) => {
  // Leer el archivo de forma SINCRONA
  let archivo = fs.readFileSync('./data/mun-cp.json', 'utf-8'); // en producción 
  // let archivo = fs.readFileSync('../data/mun-cp.json', 'utf-8');// en desarrollo
  // Parsear los datos a un objeto 
  let municipio_cp = JSON.parse(archivo);
  // preparar 'municipio' para evitar errores
  // Comprueba si hay varias palabras en city
  if (municipio.includes(',')) {
    let pueblo = municipio.split(',')[0];
    municipio = pueblo; // asignamos muncipio sólo a la primera palabra, a ver si funciona
  };
  // Comprueba si hay guión '-'
  if (municipio.includes('-')) {
    let pueblo = municipio.split('-')[0];
    municipio = pueblo; // asignamos muncipio sólo a la primera palabra, a ver si funciona
  };
  // Comprueba si hay paréntesis '('
  if (municipio.includes('(')) {
    let pueblo = municipio.split('(')[0];
    municipio = pueblo; // asignamos muncipio sólo a la primera palabra, a ver si funciona
  };
  // Comprueba si hay paréntesis ' y '
  if (municipio.includes(' y ')) {
    let pueblo = municipio.split(' y ')[0];
    municipio = pueblo; // asignamos muncipio sólo a la primera palabra, a ver si funciona
  };
  // elimina posibles espacios
  municipio = municipio.trim();
  // filtra los elementos que coinciden con el municipio
  let codigo_postal = municipio_cp.filter((element) => { return element.nom == municipio });
  // console.log(codigo_postal);
  let municipio_PR = '00';
  try {
    municipio_PR = codigo_postal[0].cp.slice(0, 2);
  } catch (err) {
    console.log(err);
    console.log(municipio);
    if (municipio == 'andalucía') { municipio_PR = 'AN' } // previene error en ofertas Entidades JA
    if (municipio == 'andalucia') { municipio_PR = 'AN' } // previene error en ofertas Entidades JA
    if (municipio == 'andalusia') { municipio_PR = 'AN' } // previene error en ofertas Enel
    else if (municipio == 'asturias') { municipio_PR = 'AS' } // 
    else if (municipio == 'catalonia') { municipio_PR = 'CAT' } // 
    else if (municipio == 'navarra') { municipio_PR = 'NA' } // 
    else if (municipio == 'castilla y león') { municipio_PR = 'CL' } // 
    else if (municipio == 'ccaa') { municipio_PR = 'ES' } // 
    else if (municipio == 'nacional') { municipio_PR = 'ES' } // 
    else if (municipio == 'remote') { municipio_PR = 'Rem' } // 
  };
  // devuelve las dos primeras cifras
  return municipio_PR;
};

// TEST
// console.log(codigoPR('cheste  '));










/* import { practicasFunction, administrativoFunction , tecnicoFunction} from "./words.js";

let listaNuevasOfertas = [
    'JEFE DE OFICINA TECNICA',
    'TÉCNICA/O DELINEACIÓN CON AUTOCAD Y GIS',
    'Técnico/a Oficial/a Electrónico/a o Informático/a ',
    'Jefe/a de cuadrilla - Patrimonio',
    'Ingeniero/a de Caminos, de Montes, Agrónomo/a, o Arquitecto/a - Dirección de Obra y CSS de la Ejecución de la Fase I Parque Periurbano'
]

listaNuevasOfertas.forEach((cadaOferta) => {
    // para cadaOferta trata de averiguar la categoría. comenzamos asignando prácticas para tests
   let tecnico = tecnicoFunction(cadaOferta);
   let administrativo = administrativoFunction(cadaOferta);
   let practicas =  practicasFunction(cadaOferta);
   let categoria = '-';
//    console.log(cadaOferta, tecnico, administrativo, practicas, categoria, administrativo + practicas ); 
   if ((administrativo + practicas + tecnico) == 0) { categoria = ".";    
   } else if (administrativo + practicas > tecnico) {
         if (practicas >= administrativo) {categoria ="practicas";
           } else {categoria = "administrativo"};
   } else if (administrativo + tecnico > practicas) {
         if (administrativo > tecnico) { categoria = "administrativo";            
           } else {categoria = "tecnico"}; 
   } else if (practicas + tecnico > administrativo) {
        if (practicas >= tecnico) { categoria = "practicas";
        } else {categoria = "tecnico"};
   }
   // let ff = updateUser(cadaOferta._id, {category: categoria });
   console.log(cadaOferta, tecnico, administrativo, practicas, categoria ); 
  }); */
