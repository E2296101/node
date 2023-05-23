import AbstractView from "./AbstractView.js";
import { getData, devise, langues } from "./fonctions.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Détails pays");
  }

  async getHtml() {
    let strHTML;
    const codePays = Number(this.params.id);
    const data = await getData("/static/js/pays.json");
    const pays = data.find((element) => element.ccn3 == codePays);
    strHTML = `<div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6">
                            <div class="card mx-auto" style="max-width: 600px;">
                                <div class="card-header">
                                    <h2>${pays.name["official"]}</h2>
                                </div>
                                    <img src="${pays.flags["png"]}" alt="${pays.flags["alt"]}" class="card-img-top p-5 img-fluid border"  style="max-width: 100%;">
                                <div class="card-body">
                                  <p> <b> Devise : </b> ${devise(pays.currencies)}</p>
                                  <p> <b> Capitale : </b> ${pays.capital}</p>
                                   <p><b> Longues : </b> ${langues(pays.languages)}</p>
                                   <p><b> Localisation : </b><ul>
                                                                <li> région : ${pays.region}</li>
                                                                <li> sous-région :  ${pays.subregion}</li>
                                                            </ul>
                                   </p>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

    return strHTML;
  }
}
