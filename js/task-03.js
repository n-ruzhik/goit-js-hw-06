const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageGalleryEl = document.querySelector("ul.gallery");

const addImagesEl = images
  .map(
    (element) =>
      `<li style='list-style:none'><img src='${element.url}' alt='${element.alt}' width='300' height='100%'></li>`
  )
  .join("");
console.log();
imageGalleryEl.insertAdjacentHTML("afterbegin", addImagesEl);
imageGalleryEl.style.display = "flex";
imageGalleryEl.style.gap = "15px";
imageGalleryEl.style.padding = "0";

console.log(imageGalleryEl);
