// version: 18-10-2024
// función para calcular la fecha de caducidad de una oferta

export const deadlineDate = () => {
    const hoy = new Date();
    let fechaCaducidadCalculada = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()+28, 23, 59).toISOString();
    // Devuelve los resultados
    return fechaCaducidadCalculada;
};

export const deadlineDateAMD_ = (fecha) => {
    // Tipo AAA-MM-dd separados por -
    const fecha_elementos = fecha.split('-');
	let fechaCaducidadCalculada = new Date(fecha_elementos[0], fecha_elementos[1]-1, fecha_elementos[2], 23, 59).toISOString();
    return fechaCaducidadCalculada;
};

export const deadlineDateDMA = async (fecha) => {
    // Cálculo fecha de Caducidad tipo dd/MM/AAAA TRAGSA: “21/10/2024 separados por /”
    const fecha_elementos = fecha.split('/');
    let fechaCaducidadCalculada = new Date(fecha_elementos[2], fecha_elementos[1]-1, fecha_elementos[0], 23, 59).toISOString(); 
    return fechaCaducidadCalculada;
};


// Otros tipos: variar el orden de los elementos.


// Para ejecutarlo aparte, descomentar la linea siguiente
// console.log(deadlineDate());
// console.log(deadlineDateAMD_('2024-10-18'));
// console.log(deadlineDateDMA('18/10/2024'));

// Para exportar como función: NOOOOO esto es para CommonJS, con require y tal, y la sintaxis usada
// en este archivo es ES Moduele, const export funcion...
// Referencia: https://nelkodev.com/blog/entendiendo-es-module-y-commonjs-diferencias-clave-y-compatibilidad/#:~:text=Carga%20de%20Módulos,los%20módulos%20han%20sido%20cargados. 
/* module.exports = {  deadlineDate    : deadlineDate,
                    deadlineDateAMD_: deadlineDateAMD_ ,
                    deadlineDateDMA :   deadlineDateDMA 
                }
 */