const cipher = {
  decode: function (texto, desplazamiento) {
    if (!texto)
      return '';
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //desplazamiento -(negativo) para boton decifrar
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
  },

  encode: function (texto, desplazamiento) {
    let resultado = '';
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // desplazamiento +(positivo) para boton cifrar
    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; ++i) {

        if (letras.indexOf(texto[i]) !== -1) {

          const posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
          resultado += letras[posicion];
        }
        else
          resultado += texto[i];
      }
    }
    return resultado;
  }
};

export default cipher;

