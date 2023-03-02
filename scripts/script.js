import dataJSON from "./data.json"
assert { type: "json" };
// const data = [
//   {
//     title: "ELLERY X M'O CAPSULE",
//     descr:
//       "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
//     price: "$52.00",
//     url: "rectangle15.jpg",
//   },
//   {
//     title: "ELLERY X M'O CAPSULE",
//     descr:
//       "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
//     price: "$52.00",
//     url: "rectangle15.jpg",
//   },
//   {
//     title: "ELLERY X M'O CAPSULE",
//     descr:
//       "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
//     price: "$52.00",
//     url: "rectangle15.jpg",
//   },
//   {
//     title: "ELLERY X M'O CAPSULE",
//     descr:
//       "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
//     price: "$52.00",
//     url: "rectangle15.jpg",
//   },
//   {
//     title: "ELLERY X M'O CAPSULE",
//     descr:
//       "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
//     price: "$52.00",
//     url: "rectangle15.jpg",
//   },
//   {
//     title: "ELLERY X M'O CAPSULE",
//     descr:
//       "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
//     price: "$52.00",
//     url: "rectangle15.jpg",
//   },
// ];

const cardList = document.querySelector(".items-list");

const cardTemplate = document
    .querySelector("#card")
    .content.querySelector(".item");

function createCard({ title, price, descr, url }) {
    const newCard = cardTemplate.cloneNode(true);

    const cardTitle = newCard.querySelector(".item-heading");

    const cardPrice = newCard.querySelector(".item-price");

    const cardDescr = newCard.querySelector(".item-descr");
    const cardImg = newCard.querySelector(".item-img");
    cardTitle.textContent = title;
    cardPrice.textContent = price;
    cardDescr.textContent = descr;
    cardImg.src = `./assets/img/${url}`;
    return newCard;
}

function renderCard(card) {
    cardList.append(card);
}
dataJSON.forEach((obj) => {
    const newCard = createCard(obj);
    renderCard(newCard);
});