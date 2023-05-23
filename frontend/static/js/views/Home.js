import AbstractView from "./AbstractView.js";
import { getData, regions } from "./fonctions.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Liste des pays");
    
  }

  async getHtml() {
    let strHTML;
    const region = this.params.region;
    let data = await getData("/static/js/pays.json");
   
    if (typeof region !== "undefined" && region != "all") {
         data = data.filter((element) => element.region == region);
    }

    strHTML = ` <div class="container text-center">
      <div class="row row-cols-5">`;

    data.forEach((pays) => {
      strHTML += `
                    <div class="col border p-5">
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img src="${pays.flags["png"]}" alt="${pays.flags["alt"]}" class="card-img-top">
                                <div class="justify-content-center">
                                    <h5 class="card-title"><a href="/details/${pays.ccn3}" data-link>${pays.name["official"]} </a></h5>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });

    strHTML += `</div></div> `;

    return strHTML;
  }

   async getAside(){
        let strHTML;
        const data = await getData("/static/js/pays.json");
        const dataFiltre = regions(data);

        strHTML = `<nav class="nav flex-column">
                    <b>Filtres :</b>
                    <a class="nav-link" href="/liste/all" data-link>All</a>`;

        dataFiltre.forEach((element) =>{
        strHTML += `<a class="nav-link" href="/liste/${element}" data-link>${element}</a>`;
        } )

        strHTML += `</nav>`;

        return strHTML;

   }
}
