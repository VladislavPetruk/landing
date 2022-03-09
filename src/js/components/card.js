import GraphModal from 'graph-modal';

const catalogMonth = document.querySelector(".pricing-tabs__panel--month");
const catalogYear = document.querySelector(".pricing-tabs__panel--year");
const modalItem = document.querySelector('.modal__item');
const modalForm = document.querySelector('.modal-form .form__title');

let dataLength = null;

if (catalogMonth) {
  const loadCardMonth = () => {
    fetch("../../data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dataLength = data.length;

        catalogMonth.innerHTML = "";

        for (let i = 0; i < dataLength; i++) {
          let item = data[i];
          let itemDescr = item.benefits.map((test) => `<p>${test}</p>`).join("");
          if (item.time === "Monthly") {
            catalogMonth.innerHTML += `
            <article class="pricing-tabs__item">
              <h5 class="pricing-tabs__item-title">${item.title}</h5>
              <h3 class="pricing-tabs__item-price"><sup>$</sup><span>${
                item.price
              }</span><sub>/ year</sub></h3>
              <div class="pricing-tabs__item-benefits">
                ${itemDescr}
              </div>
              <button class="btn btn-reset pricing-tabs__item-buy" data-id="${
                item.id
              }" data-graph-animation="custom" data-graph-path="product-modal">Get Now</button>
            </article>
            `;
          }
        }
      });
  };
  loadCardMonth();
}

if (catalogYear) {
  const loadCardYear = () => {
    fetch("../../data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dataLength = data.length;

        catalogYear.innerHTML = "";

        for (let i = 0; i < dataLength; i++) {
          let item = data[i];
          let itemDescr = item.benefits.map((test) => `<p>${test}</p>`).join("");
          if (item.time === "Yearly") {
            catalogYear.innerHTML += `
            <article class="pricing-tabs__item">
              <h5 class="pricing-tabs__item-title">${item.title}</h5>
              <h3 class="pricing-tabs__item-price"><sup>$</sup><span>${
                item.price
              }</span><sub>/ year</sub></h3>
              <div class="pricing-tabs__item-benefits">
                ${itemDescr}
              </div>
              <button class="btn btn-reset pricing-tabs__item-buy" data-id="${
                item.id
              }" data-graph-animation="custom" data-graph-path="product-modal">Get Now</button>
            </article>
            `;
          }
        }
      })
      .then(() => {
        const modal = new GraphModal({
          isOpen: () => {
            modalItem.innerHTML = '';
            modalForm.innerHTML = '';
            const openBtnId = modal.previousActiveElement.dataset.id;

            loadModalData(openBtnId);
          },
          isClose: () => {
            modalItem.innerHTML = '';
            modalForm.innerHTML = '';
          }
        });
      })
  };
  loadCardYear();
}

const loadModalData = (id = 1) => {
  fetch("../../data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        modalItem.innerHTML = '';
        modalForm.innerHTML = '';


        for (let dataItem of data) {
          if(dataItem.id == id){

            const itemTitle = dataItem.title.toLowerCase();
            const itemPrice = dataItem.price;
            const itemBenefits = dataItem.benefits.map(benefits => {
              return `
                <p>${benefits}</p>
              `
            }).join('');

            modalItem.innerHTML = `
              <h5 class="modal__item-title">${itemTitle}</h5>
              <h3 class="modal__item-price"><sup>$</sup><span>${itemPrice}</span><sub>/ year</sub></h3>
              <div class="modal__item-benefits">
                ${itemBenefits}
              </div>
            `;

            modalForm.innerHTML = `
              Buy ${itemTitle} plan
            `
          }
        }
      })
}
