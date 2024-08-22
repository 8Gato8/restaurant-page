import image from './assets/homepage.png';
export default function renderHomePage() {
  const content = document.querySelector('.content');
  const homepage = document.createElement('section');
  homepage.classList.add('homepage');

  const title = document.createElement('h1');
  title.classList.add('homepage__title', 'title');
  title.textContent = 'Cutty Cat Restaurant';

  const infoBlock = document.createElement('div');
  infoBlock.classList.add('homepage__info-block');

  const firstInfoParagraph = document.createElement('p');
  firstInfoParagraph.classList.add('homepage__info-text');
  firstInfoParagraph.textContent =
    "Welcome to the world's first cat restaurant! Yes, yes, you heard right! In our restaurant, we serve only cats and serve exclusively a cat menu. We are the best in our business, because we are the only ones!";

  const secondInfoParagraph = document.createElement('p');
  secondInfoParagraph.classList.add('homepage__info-text');
  secondInfoParagraph.textContent =
    'Be sure to visit our establishment and taste the delicious dishes from our chef Cutty!';

  const homepageImg = document.createElement('img');
  homepageImg.classList.add('homepage__img');
  homepageImg.alt = image;
  homepageImg.src = image;

  infoBlock.append(firstInfoParagraph, secondInfoParagraph);
  homepage.append(title, infoBlock, homepageImg);
  content.append(homepage);
}
