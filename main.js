/**
* Elimnina todas las etiquetas html del parametro enviado
* @param html
*/
static removeHtmlTags(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

/**
* Calcula la diferencia entre dos fechas y la devuelve en años
* @param dt2 Date
* @param dt1 Date
* @return number
*/
static diff_years(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
}

/**
* Encripta un texto en base al salt recibido
* @param o
* @param salt
*/
static encrypt(o: string, salt = 'inceme') {
  return encodeURI(CryptoJS.AES.encrypt(o, salt).toString());
}

/**
* Desnncripta un texto en base al salt recibido
* @param o
* @param salt
*/
static decrypt(o: string, salt = 'inceme') {
  return CryptoJS.AES.decrypt(o, salt).toString(CryptoJS.enc.Utf8);
}

/**
* Elimina espacios y caracteres especiales
* @param stringToReplace
*/
static cleanString(stringToReplace) {
  let res = stringToReplace.replaceAll(' ', ''); //quito espacios
  res = res.replace(/[^\w\s]/gi, '');  //quito caracteres especiales
  return res.trim();
}
