import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Détails API utilisée");
  }

  async getHtml() {
    
    return `<div class="container">
    <div class="card">
      <div class="card-body">
       <h1>API Rest Countries</h1>
    <p>L'API disponible sur le site <a href="https://restcountries.com/">https://restcountries.com/</a> fournit des informations détaillées sur les pays du monde entier. Cette API offre un accès à une vaste collection de données sur les pays, notamment :</p>
    <ul>
      <li>Le nom du pays</li>
      <li>La capitale</li>
      <li>La population</li>
      <li>La superficie</li>
      <li>La monnaie</li>
      <li>La langue officielle</li>
      <li>Le fuseau horaire</li>
      <li>L'indicatif téléphonique</li>
      <li>Le code de pays ISO</li>
      <li>Les drapeaux</li>
      <li>Les frontières</li>
    </ul>
    <p>Pour interagir avec cette API, vous pouvez effectuer des requêtes HTTP vers les différentes URLs disponibles. Voici quelques exemples d'endpoints couramment utilisés :</p>
    <ul>
      <li><code>https://restcountries.com/v3/all</code> : Renvoie une liste de tous les pays avec des détails basiques pour chaque pays.</li>
      <li><code>https://restcountries.com/v3/name/{country_name}</code> : Recherche un pays spécifique par son nom.</li>
      <li><code>https://restcountries.com/v3/alpha/{country_code}</code> : Recherche un pays spécifique par son code de pays ISO à trois lettres.</li>
    </ul>
    <p>L'API Rest Countries prend en charge plusieurs formats de réponse, notamment JSON, XML et YAML. Par défaut, la réponse est renvoyée au format JSON.</p>
    <p>Vous pouvez utiliser cette API pour créer des applications ou des services qui nécessitent des informations sur les pays, tels que des sites web d'informations, des applications mobiles, des outils de recherche, etc.</p>
    <p>Il est important de noter que l'utilisation de cette API est soumise à des conditions d'utilisation spécifiques fournies par le site <a href="https://restcountries.com/">https://restcountries.com/</a>. Veuillez consulter leur documentation officielle ou leurs conditions d'utilisation pour obtenir plus d'informations sur l'utilisation de cette API et les éventuelles restrictions.</p>
        <a href="https://restcountries.com/" class="btn btn-primary">Visiter le site</a>
      </div>
    </div>
  </div>`;
  }
}
