import menuImg from '../assets/menu.png';

import chickenBreast from '../assets/chicken-breast.png';
import tunaSteak from '../assets/tuna-steak.png';
import beefTenderloin from '../assets/beef-tenderloin.png';

import salmonFillet from '../assets/salmon-fillet.png';
import troutFillet from '../assets/trout-fillet.png';
import mackerelFillet from '../assets/mackerel-fillet.png';

import catnip from '../assets/catnip.png';
import milk from '../assets/milk.png';

const menuData = {
  meatDishes: {
    categoryTitle: 'Meat Dishes',
    dishes: [
      {
        dishTitle: 'Chicken Breast',
        description:
          'Indulge in this perfectly cooked chicken breast, seasoned with fresh rosemary and carrots. You are sure to love it!',
        pathToImage: chickenBreast,
      },
      {
        dishTitle: 'Tuna Steak',
        description:
          'Try this appetizing tuna steak, served with a fragrant parsley and lemon sauce. You will be delighted by this delicacy!',
        pathToImage: tunaSteak,
      },
      {
        dishTitle: 'Beef Tenderloin',
        description:
          'Treat yourself to this tender and juicy beef tenderloin, served with a side of mashed potatoes and green peas. This dish will be a feast for you!',
        pathToImage: beefTenderloin,
      },
    ],
  },
  fishDishes: {
    categoryTitle: 'Fish Dishes',
    dishes: [
      {
        dishTitle: 'Salmon Fillet',
        description:
          "Enjoy this fresh salmon fillet, steamed with green peas and carrots. Not only is it delicious, but it's also healthy!",
        pathToImage: salmonFillet,
      },
      {
        dishTitle: 'Trout Fillet',
        description:
          'Treat yourself to this light trout fillet with a side dish of broccoli and spinach. According to the data, this dish is perfect for those who care about their health!',
        pathToImage: troutFillet,
      },
      {
        dishTitle: 'Mackerel Fillet',
        description:
          'Try this aromatic mackerel fillet, prepared with rice and vegetables. This dish combines the benefits of fish and the nutrition of rice, making it an ideal choice!',
        pathToImage: mackerelFillet,
      },
    ],
  },
  treats: {
    categoryTitle: 'Treats',
    dishes: [
      {
        dishTitle: 'Catnip Leaves',
        description:
          'These fresh catnip leaves will help stimulate natural instincts and boost your mood. You will be thrilled with this thread!',
        pathToImage: catnip,
      },
      {
        dishTitle: 'Warm Milk',
        description:
          "This warm glass of milk, made from fresh cow's milk, will help soothe your stomach and provide you with comfort and enjoyment!",
        pathToImage: milk,
      },
    ],
  },
};

export default function renderMenuPage(content) {
  const menu = document.createElement('section');
  menu.classList.add('menu');

  const menuImgElement = document.createElement('img');
  menuImgElement.classList.add('menu__img');
  menuImgElement.src = menuImg;
  menuImgElement.alt = 'Menu';

  const categories = document.createElement('ul');
  categories.classList.add('menu__categories');

  for (let category in menuData) {
    const { categoryTitle, dishes } = menuData[category];

    const categoryElement = document.createElement('li');
    categoryElement.classList.add('menu__category', 'category');

    const categoryTitleElement = document.createElement('h2');
    categoryTitleElement.classList.add('category__title');
    categoryTitleElement.textContent = categoryTitle;

    const categoryListElement = document.createElement('ul');
    categoryListElement.classList.add('category__list');

    dishes.forEach((dish) => {
      const { dishTitle, description, pathToImage } = dish;

      const dishElement = document.createElement('li');
      dishElement.classList.add('category__dish', 'dish');

      const dishTitleElement = document.createElement('h3');
      dishTitleElement.classList.add('dish__title');
      dishTitleElement.textContent = dishTitle;

      const dishImgElement = document.createElement('img');
      dishImgElement.classList.add('dish__img');
      dishImgElement.src = pathToImage;
      dishImgElement.alt = dishTitle;

      const dishDescriptionElement = document.createElement('p');
      dishDescriptionElement.classList.add('dish__description');
      dishDescriptionElement.textContent = description;

      dishElement.append(dishTitleElement, dishImgElement, dishDescriptionElement);
      categoryListElement.append(dishElement);
    });

    categoryElement.append(categoryTitleElement, categoryListElement);
    categories.append(categoryElement);
  }

  menu.append(menuImgElement, categories);
  content.append(menu);
}
