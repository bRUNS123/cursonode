const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 0,) => {
try {

    let salida =''; 

    for (let i = 0; i < hasta+1; i++){
        salida += (`${base} x ${i} = ${base * i}\n`);
    }
         
    if (listar){
        console.log('=================='.bgCyan);
        console.log(`   Tabla del:`.america + ` ${base}`.green);
        console.log('=================='.bgCyan);
        console.log(salida.rainbow);
       }
   
    
    fs.writeFileSync(`./resultados/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`.bgWhite;
} catch (err) {
    throw err
}

}



module.exports = {
    crearArchivo
}