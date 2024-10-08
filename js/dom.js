document.addEventListener("DOMContentLoaded", function () {
  // Функция для создания карточки товара
  function createProductCard({
    title,
    size,
    material,
    reviews,
    price,
    imgSrc,
  }) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = createElement("img", {
      class: "knife",
      src: imgSrc,
      alt: title,
    });
    card.appendChild(img);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    cardInfo.appendChild(createElement("h3", { class: "title", text: title }));
    cardInfo.appendChild(createSizeMaterial(size, material));
    cardInfo.appendChild(createStars(reviews));
    cardInfo.appendChild(document.createElement("hr"));
    cardInfo.appendChild(createPriceInfo(price));

    card.appendChild(cardInfo);
    return card;
  }

  function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    for (const key in options) {
      if (key === "text") {
        element.textContent = options[key];
      } else if (key === "class") {
        element.classList.add(options[key]);
      } else {
        element.setAttribute(key, options[key]);
      }
    }
    return element;
  }

  function createSizeMaterial(size, material) {
    const sizeMaterial = document.createElement("div");
    sizeMaterial.classList.add("size_material");
    sizeMaterial.appendChild(createElement("p", { class: "size", text: size }));
    sizeMaterial.appendChild(
      createElement("p", { class: "material", text: material })
    );
    return sizeMaterial;
  }

  function createStars(reviews) {
    const starsContainer = createElement("div", {
      class: "stars",
      "data-rating": "0",
    });
    const starsInner = document.createElement("div");

    for (let i = 1; i <= 5; i++) {
      const star = createElement("span", {
        class: "star",
        "data-value": i,
        text: "★",
      });
      star.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        starsInner.querySelectorAll(".star").forEach((s, index) => {
          s.style.color = index < value ? "orange" : "#ccc";
        });
        starsContainer.setAttribute("data-rating", value);
      });
      starsInner.appendChild(star);
    }

    starsContainer.appendChild(starsInner);
    starsContainer.appendChild(
      createElement("div", { class: "reviews", text: `${reviews} отзывов` })
    );
    return starsContainer;
  }

  function createPriceInfo(price) {
    const outfit = document.createElement("div");
    outfit.classList.add("outfit");

    const outfitTitle = createElement("div", { class: "outfit_title" });
    outfitTitle.appendChild(
      createElement("p", { class: "price", text: `${price} р.` })
    );
    outfit.appendChild(outfitTitle);

    const outfitImg = createElement("div", { class: "outfit_img" });
    outfitImg.appendChild(
      createImageButton("compare.png", "Добавить в корзину")
    );
    outfitImg.appendChild(createHeartButton());
    outfit.appendChild(outfitImg);

    return outfit;
  }

  function createImageButton(src, alt) {
    return createElement("img", { class: "compare", src, alt });
  }

  function createHeartButton() {
    const heartImg = createImageButton("favorite.png", "Добавить в избранное");
    heartImg.classList.add("heart");
    heartImg.addEventListener("click", function () {
      this.src = this.src.includes("favorite.png")
        ? "favorite-filled.png"
        : "favorite.png";
    });
    return heartImg;
  }

  // Функция для добавления карточек в контейнер
  function populateProducts(containerId, products) {
    const container = document.getElementById(containerId);
    products.forEach((product) => {
      const card = createProductCard(product);
      container.appendChild(card);
    });
  }

  // Пример данных товаров
  const similarProducts = [
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
  ];

  const recommendedProducts = [
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
    {
      title: "Нож Лиса",
      size: "95x18",
      material: "Орех, Алюминий",
      reviews: 12,
      price: "2 719",
      imgSrc: "knife.jpg",
    },
  ];

  // Здесь секции карточками
  populateProducts("similar-products", similarProducts);
  populateProducts("recommended-products", recommendedProducts);
});
// Начнём !!!

const header = document.querySelector(".header");
header.classList.add("head");

const firstDiv = document.createElement("div");
firstDiv.classList.add("firstDiv");

const titles = document.createElement("div");
titles.classList.add("titles");

const par1 = document.createElement("p");
par1.innerHTML = "О нас";
const par2 = document.createElement("p");
par2.innerHTML = "Оплата и доставка";
const par3 = document.createElement("p");
par3.innerHTML = "Новости";
const par4 = document.createElement("p");
par4.innerHTML = "Контакты";

titles.append(par1, par2, par3, par4);

const profile = document.createElement("div");
profile.classList.add("profile");

const icon = document.createElement("img");
icon.src = "./img/icons8-user-26 (1).png";

const iconPar = document.createElement("p");
iconPar.innerHTML = "Личный кабинет";

profile.append(icon, iconPar);

firstDiv.append(titles, profile);

// Первый слой Закончен

const secondDiv = document.createElement("div");
secondDiv.classList.add("secondDiv");

const logoInp = document.createElement("div");
logoInp.classList.add("logoInp");

const logo = document.createElement("img");
logo.src = "./img/logo.svg";

const inp = document.createElement("input");
inp.type = "search";
inp.placeholder = "Поиск";
inp.classList.add("inp");

logoInp.append(logo, inp);

const actions = document.createElement("div");
actions.classList.add("actions");

const locationn = document.createElement("div");
locationn.classList.add("locationn");

const locLogo = document.createElement("img");
locLogo.src = "./img/Иконка_Локации.svg";

const locPar = document.createElement("p");
locPar.innerHTML = "Москва";
locPar.classList.add("locPar");

locationn.append(locLogo, locPar);

const number = document.createElement("div");
number.classList.add("number");

const num = document.createElement("p");
num.innerHTML = "8-800-777-49-67";

const numPar = document.createElement("p");
numPar.innerHTML = "Заказать звонок";
numPar.classList.add("numPar");

number.append(num, numPar);

const favShopIcons = document.createElement("div");
favShopIcons.classList.add("favShopIcons");

const favIcon = document.createElement("img");
favIcon.src = "./img/Иконка_Избранное.svg";

const shopIcon = document.createElement("img");
shopIcon.src = "./img/Group 2.svg";

const shopParDiv = document.createElement("div");
shopParDiv.classList.add("shopParDiv");

const shopPar1 = document.createElement("p");
 shopPar1.innerHTML = 0 + " ₽";

const shopPar2 = document.createElement("p");
shopPar2.innerHTML = "Оформить заказ";
shopPar2.classList.add("shopPar2");

shopParDiv.append(shopPar1, shopPar2);

favShopIcons.append(favIcon, shopIcon, shopParDiv);

actions.append(locationn, number, favShopIcons);

secondDiv.append(logoInp, actions);

// Второй слой Закончен

const thirdDiv = document.createElement("div");
thirdDiv.classList.add("thirdDiv");

const catPar1 = document.createElement("p");
catPar1.innerHTML = "Каталог ножей";
catPar1.classList.add("catPar1");

const catPar2 = document.createElement("p");
catPar2.innerHTML = "Клинковое оружие";

const catPar3 = document.createElement("p");
catPar3.innerHTML = "Сувенирные изделия";

const catPar4 = document.createElement("p");
catPar4.innerHTML = "Фонари ARMYTEK";

const catPar5 = document.createElement("p");
catPar5.innerHTML = "Сопуствующие товары";

thirdDiv.append(catPar1, catPar2, catPar3, catPar4, catPar5);

header.append(firstDiv, secondDiv, thirdDiv);

// Global append
// Header закончен !!!

const main = document.querySelector(".main");
main.classList.add("main");

// footer start !!!

const footer = document.createElement("div");
footer.classList.add("footer");

const infoSection = createFooterSection("ИНФОРМАЦИЯ", [
  "Златоустовские ножи в Москве и Московской области",
  "Ножевые стали",
  "О нас",
  "Условия оплаты и доставки",
  "Политика конфиденциальности",
]);

const supportSection = createFooterSection("СЛУЖБА ПОДДЕРЖКИ", [
  "Контактная информация",
  "Возврат товара",
  "Карта сайта",
]);

const extraSection = createFooterSection("ДОПОЛНИТЕЛЬНО", [
  "Подарочные сертификаты",
  "Партнеры",
  "Товары со скидкой",
]);

const personalSection = createFooterSection("ЛИЧНЫЙ КАБИНЕТ", [
  "Личный кабинет",
  "История заказов",
  "Мои закладки",
  "Рассылка новостей",
]);

footer.append(infoSection, supportSection, extraSection, personalSection);

document.getElementById("footer").appendChild(footer);

function createFooterSection(title, items) {
  const section = document.createElement("div");
  section.classList.add("footer-section");

  const header = document.createElement("h3");
  header.textContent = title;
  section.appendChild(header);

  items.forEach((item) => {
    const link = document.createElement("a");
    link.textContent = item;
    section.appendChild(link);
  });

  return section;
}

const hr = document.createElement("hr");
hr.classList.add("hr");
document.getElementById("footer").append(hr);

const footer2 = document.createElement("div");
footer2.classList.add("footer2");

const contactsSection = createFooterSection2("КОНТАКТЫ", [
  "8 (800) 777-49-67",
  "Пн-Пт: 7:00 - 16:00 (МСК)",
  "Златоуст, ул. Шоссейная, д. 1, офис «6Б»",
  "info@zlatmax.ru",
]);

const linksSection = createFooterSection2("ПОЛЕЗНЫЕ ССЫЛКИ", [
  "Способы оплаты и доставки",
]);

const guaranteeSection = createFooterSection2("НАША ГАРАНТИЯ", [
  "Недовольны своей покупкой? Вы можете вернуть её в течение 30 дней с даты получения, согласно нашим правилам.",
]);

// Секция "Новостная рассылка"
const subscribeSection = document.createElement("div");
subscribeSection.classList.add("footer-section2");
const subscribeTitle = document.createElement("h3");
subscribeTitle.textContent = "НОВОСТНАЯ РАССЫЛКА";
subscribeSection.appendChild(subscribeTitle);
const subscribeText = document.createElement("p");
subscribeText.textContent = "Подпишитесь прямо сейчас!";
subscribeSection.appendChild(subscribeText);

// Форма для ввода email
const subscribeForm = document.createElement("div");
subscribeForm.classList.add("subscribe-form");
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "example@gmail.com";
subscribeForm.appendChild(emailInput);
const subscribeButton = document.createElement("button");
subscribeButton.textContent = ">";
subscribeForm.appendChild(subscribeButton);
subscribeSection.appendChild(subscribeForm);

// Чекбокс соглашения
const agreementLabel = document.createElement("label");
const agreementCheckbox = document.createElement("input");
agreementCheckbox.type = "checkbox";
agreementCheckbox.classList.add("checkbox");
agreementLabel.appendChild(agreementCheckbox);
const agreementText = document.createElement("span");
agreementText.classList.add("agreementText");
agreementText.textContent =
  "Я прочитал Условия соглашения и согласен с условиями";
agreementLabel.appendChild(agreementText);
subscribeSection.appendChild(agreementLabel);

const icons = document.createElement("div");
icons.classList.add("footer-icons");
const iconImg = document.createElement("img");
iconImg.src = "./img/Соц_сети.svg";
icons.append(iconImg);
contactsSection.append(icons);

footer2.append(
  contactsSection,
  linksSection,
  guaranteeSection,
  subscribeSection
);

document.getElementById("footer2").appendChild(footer2);

function createFooterSection2(title, items) {
  const section = document.createElement("div");
  section.classList.add("footer-section2");

  const header = document.createElement("h3");
  header.textContent = title;
  section.appendChild(header);

  items.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;
    section.appendChild(p);
  });

  return section;
}

const hr2 = document.createElement("hr");
hr2.classList.add("hr2");
document.getElementById("footer2").append(hr2);

const text = document.createElement("div");
text.classList.add("text");

const longPar = document.createElement("p");
longPar.innerHTML =
  "Все материалы, размещенные на сайте, носят справочный характер и не являются <br> публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации.<br> При копировании материалов гиперссылка на www.zlatmax.ru обязательна!";

const shortPar = document.createElement("p");
longPar.classList.add("longPar");
shortPar.innerHTML = "Златоустовские ножи www.zlatmax.ru ©";

text.append(longPar, shortPar);
document.getElementById("footer2").append(text);

// Menu !!!

const menu = document.getElementById("knife-info");

const tabsData = [
  { category: "description", label: "Описание" },
  { category: "characteristic", label: "Характеристика" },
  { category: "reviews", label: "Отзывы" },
  { category: "delivery", label: "Доставка" },
];

// Создание контейнеров для меню и контента
const menuContainer = document.createElement("div");
menuContainer.id = "menu-container";
menu.append(menuContainer);

const contentContainer = document.createElement("div");
contentContainer.id = "content-container";
menu.append(contentContainer);

// Создаём линию-индикатор
const indicator = document.createElement("div");
indicator.id = "indicator";
menuContainer.appendChild(indicator);

// Описание
document.addEventListener("DOMContentLoaded", () => {
  // Массив с текстом для каждого параграфа
  const paragraphs = [
    "Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные спуски на две трети ширины клинка, образующие тонкое, прекрасно режущее лезвие толщиной около 0,6 мм в районе подводов.",
    "Обух клинка со спинкой рукояти имеет одну плавную дугообразную линию. На пяте перед рукоятью есть подпальцевый вырез для точных работ.",
    "Необходимо проявлять некоторую осторожность при работе с большими боковыми нагрузками на лезвие ножа, ввиду небольшой толщины клинка в рабочей части.",
    "Монтаж рукояти накладной плашечный. На навершии рукояти, функцию которого выполняет выступающий из под плашек хвостовик, имеется отверстие под темляк. Этот нож удобный помощник при работе с продуктами и охоте на боровую и водоплавающую дичь.",
  ];

  const descriptionContent = document.getElementById("description");

  if (descriptionContent) {
    paragraphs.forEach((text) => {
      const div = document.createElement("div");
      const paragraph = document.createElement("p");
      paragraph.innerText = text;
      div.appendChild(paragraph);
      descriptionContent.appendChild(div);
    });
  } else {
    console.error('Элемент с id="description" не найден!');
  }
});

// Создаём вкладки и пустые контейнеры для контента
tabsData.forEach((tabData, index) => {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.dataset.category = tabData.category;
  tab.innerText = tabData.label;
  menuContainer.appendChild(tab);

  const content = document.createElement("div");
  content.id = tabData.category;
  content.classList.add("content");
  if (index === 0) content.classList.add("active"); // Первая вкладка активна по умолчанию
  contentContainer.appendChild(content);
});

// Логика для переключения вкладок
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.category).classList.add("active");

    const tabRect = tab.getBoundingClientRect();
    const containerRect = tab.parentElement.getBoundingClientRect();
    indicator.style.width = `${tabRect.width}px`;
    indicator.style.left = `${tabRect.left - containerRect.left}px`;
  });
});

// Инициализация: активация первой вкладки
tabs[0].click();

// Функция для добавления контента в любую категорию
function addContentToCategory(category, element) {
  const categoryContent = document.getElementById(category);
  if (categoryContent) {
    categoryContent.appendChild(element);
  }
}

// Пример: создание выпадающих списков
function createSelect(options, labelText) {
  const container = document.createElement("div");
  container.classList.add("container");

  const label = document.createElement("label");
  label.innerText = labelText;
  container.appendChild(label);

  const select = document.createElement("select");
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.innerText = option;
    select.appendChild(optionElement);
  });
  container.appendChild(select);

  return container;
}

// Пример: создание блока для доставки
function createDeliveryOption(imageSrc, description, time, price) {
  const deliveryOption = document.createElement("div");
  deliveryOption.classList.add("deliveryOption");

  const img = document.createElement("img");
  img.src = imageSrc; // Убедитесь, что у вас есть корректный путь к изображению
  deliveryOption.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = description;
  textContainer.appendChild(descriptionElement);

  const timeElement = document.createElement("span");
  timeElement.innerText = time;
  textContainer.appendChild(timeElement);

  const priceElement = document.createElement("h3");
  priceElement.innerText = price;
  textContainer.appendChild(priceElement);

  deliveryOption.appendChild(textContainer);

  return deliveryOption;
}

// Добавляем выпадающие списки в категорию "Доставка"
const countrySelect = createSelect(
  ["Россия", "Украина", "Беларусь"],
  "Ваша страна"
);
const citySelect = createSelect(
  ["Москва", "Санкт-Петербург", "Новосибирск"],
  "Ваш город"
);
addContentToCategory("delivery", countrySelect);
addContentToCategory("delivery", citySelect);

// Добавляем блоки доставки
const deliveryOption1 = createDeliveryOption(
  "../img/1200px-Russian_Post 1.svg",
  "Почта России",
  "5-8 дней",
  "300 ₽"
);
const deliveryOption2 = createDeliveryOption(
  "../img/1200px-Russian_Post 1.svg",
  "Почта России",
  "5-8 дней",
  "300 ₽"
);
addContentToCategory("delivery", deliveryOption1);
addContentToCategory("delivery", deliveryOption2);

// Характеристики
const characteristicCategory = document.getElementById("characteristic");
if (characteristicCategory) {
  const characteristicContent = document.createElement("div");
  characteristicContent.classList.add("characteristic-container");

  // Технические характеристики
  const techSpecsSection = document.createElement("div");
  techSpecsSection.classList.add("characteristic-section");

  const techSpecsTitle = document.createElement("h4");
  techSpecsTitle.innerText = "Технические характеристики";
  techSpecsSection.appendChild(techSpecsTitle);

  const techSpecsList = document.createElement("ul");
  const techSpecs = [
    { label: "Общая длина, мм:", value: "227" },
    { label: "Длина клинка, мм:", value: "112" },
    { label: "Ширина клинка, мм:", value: "24" },
    { label: "Толщина обуха, мм:", value: "2.9" },
  ];

  techSpecs.forEach((spec) => {
    const listItem = document.createElement("li");
    const label = document.createElement("span");
    label.innerText = spec.label;

    const value = document.createElement("strong");
    value.innerText = spec.value;

    listItem.appendChild(label);
    listItem.appendChild(value);
    techSpecsList.appendChild(listItem);
  });

  techSpecsSection.appendChild(techSpecsList);
  characteristicContent.appendChild(techSpecsSection);

  // Используемые материалы
  const materialsSection = document.createElement("div");
  materialsSection.classList.add("characteristic-section");

  const materialsTitle = document.createElement("h4");
  materialsTitle.innerText = "Используемые материалы";
  materialsSection.appendChild(materialsTitle);

  const materialsList = document.createElement("ul");
  const materials = [
    { label: "Сталь:", value: "95X18" },
    { label: "Рукоять:", value: "Накладки карельская береза" },
  ];

  materials.forEach((material) => {
    const listItem = document.createElement("li");
    const label = document.createElement("span");
    label.innerText = material.label;

    const value = document.createElement("strong");
    value.innerText = material.value;

    listItem.appendChild(label);
    listItem.appendChild(value);
    materialsList.appendChild(listItem);
  });

  materialsSection.appendChild(materialsList);
  characteristicContent.appendChild(materialsSection);

  // Производство
  const productionSection = document.createElement("div");
  productionSection.classList.add("characteristic-section");

  const productionTitle = document.createElement("h4");
  productionTitle.innerText = "Производство";
  productionSection.appendChild(productionTitle);

  const productionList = document.createElement("ul");
  const production = [{ label: "Производство:", value: "АиР" }];

  production.forEach((prod) => {
    const listItem = document.createElement("li");
    const label = document.createElement("span");
    label.innerText = prod.label;

    const value = document.createElement("strong");
    value.innerText = prod.value;

    listItem.appendChild(label);
    listItem.appendChild(value);
    productionList.appendChild(listItem);
  });

  productionSection.appendChild(productionList);
  characteristicContent.appendChild(productionSection);

  // Добавляем контент в контейнер "Характеристика"
  characteristicCategory.appendChild(characteristicContent);
}

// Функция для добавления отзыва
function addReview(name, review, avatar) {
  const reviewsContainer = document.getElementById("reviews");
  const reviewItem = document.createElement("div");
  reviewItem.classList.add("review-item");

  const avatarImg = document.createElement("img");
  avatarImg.src =
    avatar ||
    "data:image/png;base64,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"; // Путь к аватарке
  avatarImg.alt = "Аватарка";

  const reviewHeader = document.createElement("h5");
  reviewHeader.innerText = name;

  const reviewText = document.createElement("p");
  reviewText.innerText = review;

  const likeButton = document.createElement("span");
  likeButton.classList.add("like-button");
  likeButton.innerText = "💗";
  let likeCount = 0;
  likeButton.addEventListener("click", () => {
    if (likeCount<1) {
      likeCount++;
    }
    likeButton.innerText = `💗 ${likeCount}`;
  });

  reviewItem.appendChild(avatarImg);
  reviewItem.appendChild(reviewHeader);
  reviewItem.appendChild(reviewText);
  reviewItem.appendChild(likeButton);
  reviewsContainer.appendChild(reviewItem);
}

// Обновляем функцию для создания формы отзыва
function createReviewForm() {
  const reviewForm = document.createElement("form");
  reviewForm.id = "review-form";

  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Ваше имя:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required = true;

  const avatarLabel = document.createElement("label");
  avatarLabel.innerText =
    "data:image/png;base64,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";
  const avatarInput = document.createElement("input");
  avatarInput.type = "text";

  const reviewLabel = document.createElement("label");
  reviewLabel.innerText = "Ваш отзыв:";
  const reviewInput = document.createElement("textarea");
  reviewInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Отправить отзыв";

  reviewForm.appendChild(nameLabel);
  reviewForm.appendChild(nameInput);
  reviewForm.appendChild(avatarLabel);
  reviewForm.appendChild(avatarInput);
  reviewForm.appendChild(reviewLabel);
  reviewForm.appendChild(reviewInput);
  reviewForm.appendChild(submitButton);

  // Обработка отправки формы
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const review = reviewInput.value.trim();
    const avatar = avatarInput.value.trim();

    if (name && review) {
      addReview(name, review, avatar);
      reviewForm.reset(); // Очистить форму
    }
  });

  return reviewForm;
}

// Добавляем форму для отзыва
function createReviewForm() {
  const reviewForm = document.createElement("form");
  reviewForm.id = "review-form";

  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Ваше имя:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required = true;

  const reviewLabel = document.createElement("label");
  reviewLabel.innerText = "Ваш отзыв:";
  const reviewInput = document.createElement("textarea");
  reviewInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Отправить отзыв";

  reviewForm.appendChild(nameLabel);
  reviewForm.appendChild(nameInput);
  reviewForm.appendChild(reviewLabel);
  reviewForm.appendChild(reviewInput);
  reviewForm.appendChild(submitButton);

  // Обработка отправки формы
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const review = reviewInput.value.trim();

    if (name && review) {
      addReview(name, review);
      reviewForm.reset(); // Очистить форму
    }
  });

  return reviewForm;
}

// Добавляем форму для отзывов
document.addEventListener("DOMContentLoaded", () => {
  const reviewsContent = document.getElementById("reviews");

  if (reviewsContent) {
    const reviewForm = createReviewForm();
    reviewsContent.appendChild(reviewForm);
  } else {
    console.error('Элемент с id="reviews" не найден!');
  }
});


  //функция чтобы мои переменные не конфликтовали с вашими

   all_images = document.createElement("div");
  all_images.id = "all_images";
  all_images.style =
    "height: 100%; width: 37%; display:inline-block; float:left; margin-left:10%; font-family:Monospace;";
  document.getElementById("body").appendChild(all_images);

  let full_img = document.createElement("img");
  full_img.src =
    "https://api-cdn.figma.com/resize/img/69ee/95f3/e2097915e2aad5811f9b4e6e2e940f63?expiration=1728864000&signature=422526a85a8f1418bd16d36d7f1277858e4b8701d735828d89971703f9f8a1a0&maxsize=2048&bucket=figma-alpha";
  full_img.style =
    "width: 100%; height:  75%; display:block; border-radius:2px;";
  document.getElementById("all_images").appendChild(full_img);

   div_images = document.createElement("div");
  div_images.id = "div_images";
  div_images.style = "margin-top: 8px; display:flex;";
  document.getElementById("all_images").appendChild(div_images);

  let img1 = document.createElement("img");
  img1.src =
    "https://api-cdn.figma.com/resize/img/8c61/dfdb/d36675a679268f1401f34e29b53ba724?expiration=1728864000&signature=146824a694deb080173f72eed538d415a4a369a9fb9e402a81e24719e4645daf&maxsize=2048&bucket=figma-alpha";
  img1.style =
    "width: 25%; border-radius:2px; height:  90px; margin-right:23.3px";
  document.getElementById("div_images").appendChild(img1);

  let img2 = document.createElement("img");
  img2.src =
    "https://api-cdn.figma.com/resize/img/9f59/261c/b24c6a3eab8d5fee38c32f9455d72fb1?expiration=1728864000&signature=f0847b23ffa0bd3db8b3b2634c7d2b4e338f399f4f1707401d5a6d1e58910b18&maxsize=2048&bucket=figma-alpha";
  img2.style =
    "width: 25%; border-radius:2px; height:  90px; margin-right:23.3px";
  document.getElementById("div_images").appendChild(img2);

  let img3 = document.createElement("img");
  img3.src =
    "https://api-cdn.figma.com/resize/img/baa0/f75f/f7d7a88d9d8bd77b6e4e224559b01738?expiration=1728864000&signature=3a0c338b1fe420e046bf715521b35f75c8e34e1499697c4ec0c65e83cfada764&maxsize=2048&bucket=figma-alpha";
  img3.style =
    "width: 25%; border-radius:2px; height:  90px; margin-right:20px";
  document.getElementById("div_images").appendChild(img3);

  let img4 = document.createElement("img");
  img4.src =
    "https://api-cdn.figma.com/resize/img/277f/a445/cd613cb0817a6b9f55ac24185a0481d8?expiration=1728864000&signature=e1955ada24b2b6c5da011440e4a3c6b17e12b5da6c32e27f8b250e6c82846086&maxsize=2048&bucket=figma-alpha";
  img4.style = "width: 25%; border-radius:2px; height:  90px; ";
  document.getElementById("div_images").appendChild(img4);

  //small images

   info_box = document.createElement("div");
  info_box.id = "info_box";
  info_box.style =
    "margin-left:20px;padding: 30px;height: 88.5%; width: 710px;  box-shadow: 1px 2px 2px 3px rgba(0, 0, 0, 0.1); display:inline-block; border-radius:2px;";
  document.getElementById("body").appendChild(info_box);

   title = document.createElement("p");
  title.textContent = "Нож Снегирь";
  title.style =
    "font-weight:bold; vertical-align: middle;  display:inline-block; margin-top:0px; margin-bottom:2px ";
  document.getElementById("info_box").appendChild(title);

  const starsContainer = document.createElement("div");
  starsContainer.classList.add("stars");
  starsContainer.setAttribute("data-rating", "0");
  starsContainer.style =
    "display:inline-block; margin-left:20px; margin-top:0px";
  const starsInner = document.createElement("div");
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.setAttribute("data-value", i);
    star.textContent = "★";
    starsInner.appendChild(star);

    star.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      const stars = starsInner.querySelectorAll(".star");
      stars.forEach((s, index) => {
        s.style.color = index < value ? "orange" : "#ccc";
      });
      starsContainer.setAttribute("data-rating", value);
    });
  }

  starsContainer.appendChild(starsInner);
  title.appendChild(starsContainer);

   like_png = document.createElement("img");
  like_png.src = "compare.png";

  like_png.style =
    "height:20px; width:22px; display:inline-block; margin-left:350px; cursor:pointer";
  document.getElementById("info_box").appendChild(like_png);

   like_png = document.createElement("img");
  like_png.src = "favorite.png";
  like_png.addEventListener("click", function () {
    const currentSrc = this.getAttribute("src");
    this.setAttribute(
      "src",
      currentSrc === "favorite.png" ? "favorite_filled.png" : "favorite.png"
    );
  });
  like_png.style =
    "height:20px; width:22px; display:inline-block; margin-left:10px; cursor:pointer";
  document.getElementById("info_box").appendChild(like_png);

   check = document.createElement("p");
  check.textContent = "Нет в наличии";
  check.style =
    "margin-top:1px; display: inline-block; color:rgba(231, 64, 27, 1); vertical-align: middle; margin-bottom:10px; margin-top:0px";
  document.getElementById("info_box").appendChild(check);

   line = document.createElement("hr");
  line.style = "margin-top:2px; color: grey;margin-bottom:5px";
  document.getElementById("info_box").appendChild(line);

   articul = document.createElement("p");
  articul.textContent = "Артикул: ";
  articul.style = "display:block;margin-bottom:0px; margin-top:10px ";
   articul_data = document.createElement("p");
  articul_data.textContent = "AF00DDD19870";
  articul_data.style =
    "display:inline-block; margin-left:75px; margin-right:100px; margin-bottom:0px; color:grey; ";
  articul.appendChild(articul_data);

   mark = document.createElement("p");
  mark.textContent = "Торговая марка: ";
  mark.style = "display:block; margin-top:10px;margin-bottom:0px";
   mark_data = document.createElement("p");
  mark_data.textContent = "WUESTHOF(Германия)";
  mark_data.style =
    "display:inline-block; margin-left:18px; margin-right:10px; margin-bottom:0px; color:grey";
  mark.appendChild(mark_data);

   series = document.createElement("p");
  series.textContent = "Серия: ";
  series.style = "display:block;margin-bottom:0px;margin-top:10px;";
   series_data = document.createElement("p");
  series_data.textContent = "Ножи серии Classic Icon";
  series_data.style = "display:inline-block; margin-left:90px;   color:grey";
  series.appendChild(series_data);

   points = document.createElement("p");
  points.textContent = "Бонусные баллы: ";
  points.style =
    "display:block;margin-bottom:0px;margin-top:10px; margin-right:0px;";
   points_data = document.createElement("p");
  points_data.textContent = "38";
  points_data.style =
    "display:inline-block; margin-left:12px; margin-bottom:0px; color:grey";
  points.appendChild(points_data);
  document.getElementById("info_box").appendChild(articul);
  document.getElementById("info_box").appendChild(mark);
  document.getElementById("info_box").appendChild(series);
  document.getElementById("info_box").appendChild(points);

   line2 = document.createElement("hr");
  line2.style = "color: grey;margin-top:20px; margin-bottom:20px;";
  document.getElementById("info_box").appendChild(line2);

  // Функция создания кастомного селекта
  function createCustomSelect(
    labelText,
    optionsArray,
    defaultText,
    marginLeft
  ) {
     wrapper = document.createElement("div");
    wrapper.classList.add("__select");
    wrapper.style =
      "display: flex;  margin-bottom: 5px; justify-content: space-between";

     label = document.createElement("p");
    label.textContent = labelText;
    label.style = `display: inline-block; margin-left: ${marginLeft};   margin-top: 0px; margin-bottom: 0px; `;
    wrapper.appendChild(label);

     selectTitle = document.createElement("div");
    selectTitle.classList.add("__select__title");
    selectTitle.textContent = defaultText;
    selectTitle.setAttribute("data-default", defaultText);
    selectTitle.style =
      "display: inline-block; cursor: pointer; border: 1px solid #ccc; padding: 5px 20px;  color: grey; width: 450px; border-radius:2px;";
    wrapper.appendChild(selectTitle);

     dropdown = document.createElement("div");
    dropdown.classList.add("__select__options");
    dropdown.style =
      "display: none; position: absolute; background: #fff; border: 1px solid #ccc; z-index: 1;";

    optionsArray.forEach(function (optionText) {
       option = document.createElement("div");
      option.classList.add("__select__label");
      option.textContent = optionText;
      option.style = "padding: 5px; cursor: pointer;";
      option.addEventListener("mouseover", function () {
        option.style.backgroundColor = "black";
        option.style.color = "white";
      });

      option.addEventListener("mouseout", function () {
        option.style.backgroundColor = "transparent";
        option.style.color = "black";
      });
      dropdown.appendChild(option);
    });

    wrapper.appendChild(dropdown);

    // Логика открытия/закрытия меню
    selectTitle.addEventListener("click", () => {
      if (wrapper.getAttribute("data-state") === "active") {
        wrapper.setAttribute("data-state", "");
        dropdown.style.display = "none";
      } else {
        wrapper.setAttribute("data-state", "active");
        dropdown.style.display = "block";
      }
    });

    // Логика выбора опции и закрытия меню
    dropdown.querySelectorAll(".__select__label").forEach((option) => {
      option.addEventListener("click", (evt) => {
        selectTitle.textContent = evt.target.textContent;
        wrapper.setAttribute("data-state", "");
        dropdown.style.display = "none";
      });
    });

    return wrapper;
  }

  // Создаем и добавляем кастомные селекты с переносом на новую строку
   infoBox = document.getElementById("info_box");

  // Для сталь
   metalWrapper = document.createElement("div");
  metalWrapper.style = "display: block; margin-bottom: 10px; ";
  metalWrapper.appendChild(
    createCustomSelect(
      "Сталь:",
      ["Сталь A", "Сталь B", "Сталь C"],
      "Выбрать сталь",
      "0px"
    )
  );
  infoBox.appendChild(metalWrapper);

  // Для рукоять
   rucWrapper = document.createElement("div");
  rucWrapper.style = "display: block; margin-bottom: 10px;";
  rucWrapper.appendChild(
    createCustomSelect(
      "Рукоять:",
      ["Рукоять A", "Рукоять B", "Рукоять C"],
      "Выбрать рукоять",
      "0px"
    )
  );
  infoBox.appendChild(rucWrapper);

  // Для гальда и тыльник
   tilWrapper = document.createElement("div");
  tilWrapper.style = "display: block; margin-bottom: 10px;";
  tilWrapper.appendChild(
    createCustomSelect(
      "Гальда и тыльник:",
      ["Тыльник A", "Тыльник B", "Тыльник C"],
      "Выбрать гальду и тыльник",
      "2px"
    )
  );
  infoBox.appendChild(tilWrapper);

  // Для обработка клинка
   klinokWrapper = document.createElement("div");
  klinokWrapper.style = "display: block; margin-bottom: 10px;";
  klinokWrapper.appendChild(
    createCustomSelect(
      "Обработка клинка:",
      ["Обработка A", "Обработка B", "Обработка C"],
      "Выбрать обработку",
      "0px"
    )
  );
  infoBox.appendChild(klinokWrapper);

  // Сброс значения (если нужно)

   line3 = document.createElement("hr");
  line3.style = "margin-top:20px; color: grey;";
  document.getElementById("info_box").appendChild(line3);

   pricePerItem = 3865; // Цена за единицу товара

   sum1 = document.createElement("div");
  sum1.style = "display:block";
  info_box.appendChild(sum1);

   sum = document.createElement("strong");
  sum.textContent = pricePerItem + " ₽"; // Изначальная сумма
  sum.style = "margin-top:20px; display:inline-block; font-size:25px";
  sum1.appendChild(sum);

   bonus = document.createElement("p");
  bonus.textContent = "+449 баллов за покупку";
  bonus.style = "color:grey;display:inline-block; margin-left:50%";
  sum1.appendChild(bonus);
  // вопросительный знак
   question_mark = document.createElement("img");
  question_mark.src = "question_mark.png";
  question_mark.style =
    "margin-left:20px; height:13px; width:13px; cursor: pointer; display:inline;"; // Указываем, что элемент кликабельный

  // tooltip
   tooltip = document.createElement("div");
  tooltip.textContent = "Здесь находится дополнительная информация"; // Ваш текст с информацией
  tooltip.style =
    "display: none; position: absolute; background-color: white; border: 2px solid yellow; padding: 5px; z-index: 100;"; // Стили для tooltip
  tooltip.style.borderRadius = "5px"; // Закругляем углы для лучшего внешнего вида

  sum1.appendChild(tooltip);

  question_mark.onmouseover = function (event) {
    tooltip.style.display = "block"; // Показываем tooltip
    tooltip.style.left = event.pageX + "px"; // Устанавливаем позицию по X
    tooltip.style.top = event.pageY - tooltip.offsetHeight - 5 + "px"; // Устанавливаем позицию по Y, немного выше курсора
  };

  question_mark.onmouseout = function () {
    tooltip.style.display = "none"; // Скрываем tooltip
  };

  // Добавляем изображение вопросительного знака в sum1
  sum1.appendChild(question_mark);

  // Создаем кнопки "-" и "+"

   minus = document.createElement("button");
  minus.textContent = "-";
  minus.style =
    "border:none; background-color: black; color:white; height:50px; width:50px;  margin-left:0px ; margin-top:20px ;border-radius:2px; font-size:30px;";
  info_box.appendChild(minus);

   quantity = document.createElement("p");
  quantity.textContent = 1; // Изначальное количество товара
  quantity.style = "display:inline-block; margin: 0 10px; font-size:24px";
  info_box.appendChild(quantity);

   plus = document.createElement("button");
  plus.textContent = "+";
  plus.style =
    "border:none; background-color: black; color:white; height:50px; width:50px; margin-left:1px;border-radius:2px; font-size:30px;";
  info_box.appendChild(plus);

  // Функция для обновления суммы
  function updateSum() {
     currentQuantity = Number(quantity.textContent);
    sum.textContent = pricePerItem * currentQuantity + " ₽";
  }

  // Обработчики для кнопок
  minus.addEventListener("click", function () {
    let currentValue = parseInt(quantity.textContent);
    if (currentValue > 1) {
      // минимальное значение — 1
      quantity.textContent = currentValue - 1;
      updateSum(); // Обновляем сумму
    }
  });

  plus.addEventListener("click", function () {
    let currentValue = parseInt(quantity.textContent);
    quantity.textContent = currentValue + 1;
    updateSum(); // Обновляем сумму
  });

  // Создаем контейнер для кнопок
   button_container = document.createElement("div");
  button_container.style = "display: flex;  margin-left: 180px;"; // Используем flexbox для выравнивания кнопок
  info_box.appendChild(button_container);

  // Кнопка "Корзина"
   cart_btn = document.createElement("button");
  cart_btn.style =
    "background-color:rgba(232, 170, 49, 1); border:none; height:50px; width:50%; color:white; display: flex; justify-content: center; align-items: center; border-radius:2px; position:relative; bottom:50px; ";

  // Текст "Корзина"
   cart_txt = document.createElement("p");
  cart_txt.style = "display: inline-block; margin: 0;"; // Убираем отступы, чтобы текст корректно центрировался
  cart_txt.textContent = "Корзина";

  // Картинка "Корзина"
   cart_img = document.createElement("img");
  cart_img.style =
    "height:20px; width:20px; display:inline-block; margin-left: 5px;";
  cart_img.src = "cart.png";

  // Добавляем текст и картинку в кнопку "Корзина"
  cart_btn.appendChild(cart_txt);
  cart_btn.appendChild(cart_img);
  button_container.appendChild(cart_btn); // Добавляем кнопку в контейнер

  // Кнопка "Купить"
   buy_btn = document.createElement("button");
  buy_btn.style =
    "background-color: black; border:none; height:50px; width:50%; color:white; display: flex; justify-content: center; align-items: center; margin-left: 10px; border-radius:2px;  position:relative; bottom:50px;"; // Добавляем небольшой отступ между кнопками

  // Текст "Купить"
   buy_txt = document.createElement("p");
  buy_txt.style = "display: inline-block; margin: 0;"; // Убираем отступы
  buy_txt.textContent = "Купить в 1 клик";

  // Определяем переменную для хранения цены карточки
  let cardPrice = 0;

  // Функция для обновления значения cardPrice
  function updateCardPrice() {
    const currentQuantity = Number(quantity.textContent);
    cardPrice += pricePerItem * currentQuantity; // Устанавливаем цену на основе текущего количества
  }

  // Обработчик для кнопки "Купить"
  buy_btn.addEventListener("click", () => {
    updateCardPrice(); // Обновляем cardPrice перед покупкой
    
    shopPar1.innerHTML = cardPrice+" ₽";
  });
  shopPar2.addEventListener("click", () => {
    updateCardPrice(); // Обновляем cardPrice перед покупкой

    shopPar1.innerHTML = cardPrice * 0 + " ₽";
     alert("Заказ успешно принят!");
  });


  // Добавляем текст в кнопку "Купить"
  buy_btn.appendChild(buy_txt);
  button_container.appendChild(buy_btn); // Добавляем кнопку в контейнер