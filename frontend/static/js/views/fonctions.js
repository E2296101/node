export async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

/**
 * Génère une chaîne de caractères HTML contenant les informations sur les devises spécifiées dans un objet.
 * @param {Object} obj - L'objet contenant les informations sur les devises.
 * @returns {string} - La chaîne de caractères HTML générée.
 */
export function devise(obj) {
  let strHTML = ""; // Variable pour stocker le contenu HTML

  for (let key in obj) {
    strHTML += `<ul>
          <li>Nom : ${obj[key].name}</li>
          <li>Symbole : ${obj[key].symbol} </li>
      </ul>`;
  }

  return strHTML;
}

/**
 * Génère une chaîne de caractères contenant les langues spécifiées dans un objet.
 * @param {Object} obj - L'objet contenant les langues.
 * @returns {string} - La chaîne de caractères générée.
 */
export function langues(obj) {
  let strHTML = ""; // Variable pour stocker le contenu HTML

  for (let key in obj) {
    strHTML += ` ${obj[key]}, `;
  }

  return strHTML; // Retourne le contenu HTML généré
}


/**
 * Récupère les régions uniques à partir d'un tableau d'objets pays.
 * @param {Object[]} obj - Le tableau d'objets pays.
 * @returns {string[]} - Un tableau contenant les régions uniques.
 */
export function regions(obj){

  let regions = new Set(); // Ensemble pour stocker les régions uniques

  obj.forEach(function (country) {
    let region = country.region;
    regions.add(region);
  });

  let uniqueRegions = Array.from(regions);

  return uniqueRegions;

}
