// pruebas de contenedor de palabras para detectar el sector, la ubicación etc
import { sevillaArray } from "../data/listasPalabras.js";


export const practicasFunction = (frase)  => {
    const practicasArray = ['prácticas','beca','becario']; 
    let suma = 0;
    let listaPalabras = practicasArray;
    listaPalabras.forEach(contar);
    function contar(item) {suma += frase.toLowerCase().includes(item);}
    return (suma);
}

export const administrativoFunction = (frase)  => {
    const administrativoArray = ['administrativo','administrativa', 'oficial','teleoperador','auxiliar','mecánico','conductor','secretario', 'secretaria', 'socorrista', 'administratiu/va']; 
    let suma = 0;
    let listaPalabras = administrativoArray;
    listaPalabras.forEach(contar);
    
    function contar(item) {suma += frase.toLowerCase().includes(item);}
    return (suma);
}

export const tecnicoFunction = (frase)  => {
    const tecnicoArray = ['técnico','consultor','consultant','developer','desarrollador','auditor','inspector','ingeniero', 'ingenier@','responsable','coordinador','programador','engineer','specialist','especialista','licenciado','licenciatura','analista','director','dirección','investigador','controller','jefe','graduado','universitario','arquitecto','ingeniería','médico','medicina','formador','psicólogo','diplomado','delineante','graduate','jefatura','Cartógrafo','veterinario', 'veterinaria', 'técnica', 'tecnica','tecnico', 'coordinador', 'coordinadora', 'inspector', 'inspectora', 'manager', 'technician', 'comercial', 'químico', 'arquitecte', 'arquitecte/a', 'tècnic', 'tècnic/a', 'tècnica','enfermera/o', 'gestor/a', 'enginyer', 'contable', 'asesor/a', 'diseñador/a', 'adjunto/a', 'abogado/a', 'delegado/a', 'proyectista', 'administrador/a' , 'abogado/a', 'marketing', 'magisterio/grado', 'odontólogo/a', 'científico/a', 'docent', 'arquitectura', 'grau', 'professor', 'magisterio', 'profesorado', 'sales executive', 'profesor', 'profesor/a', 'maestro/a', 'tècnic', 'tecnic@' ,'ciencias','grado/diplomatura', 'diplomatura/grado', 'filología', 'scientist']; 
    let suma = 0;
    let listaPalabras = tecnicoArray;
    listaPalabras.forEach(contar);
    
    function contar(item) {suma += frase.toLowerCase().includes(item);}
    return (suma);
}


export const sevillaFunction = (frase, sevillaArray)  => {
    let suma = 0;
    let listaPalabras = sevillaArray;
    listaPalabras.forEach(contar);
    function contar(item) {suma += frase.toLowerCase().includes(item);}
    return (suma/listaPalabras.length);
}

// TESTs
// let frase1 = 'Sevilla tiene triana, y está en sevilla andalucía españa';
// console.log(sevillaFunction(frase1, sevillaArray));

// let frase2 = 'BECA INGENIERÍA ELÉCTRICA';
// console.log(practicasFunction(frase2));

// let frase3 = 'Licenciado/a o Graduado/a con Máster Oficial en Ciencias Ambientales y/o Biología – Evaluación Ambiental';
// console.log(administrativoFunction(frase3));
// console.log(tecnicoFunction(frase3));

