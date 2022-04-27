import images from './images';

const wines = [
  {
    title: 'Sangiovese',
    price: '$56',
    tags: 'IT | Bottle',
  },
  {
    title: 'Barbera',
    price: '$59',
    tags: 'IT | Bottle',
  },
  {
    title: "Nero d'Avola",
    price: '$54',
    tags: 'IT | 750 ml',
  },
  {
    title: 'Dolcetto',
    price: '$67',
    tags: 'IT | Bottle',
  },
  {
    title: 'Nebbiolo',
    price: '$89',
    tags: 'IT | Bottle',
  },
];

const cocktails = [
  {
    title: 'Martini',
    price: '$22',
    tags: 'Vodka | Gin',
  },
  {
    title: "Manhattan",
    price: '$21',
    tags: 'Canadian Whiskey | Sweet Red | Bitters',
  },
  {
    title: 'Siesta Cocktail',
    price: '$17',
    tags: 'Tequila | Grapefruit Juice | Simple Syrup | Campari',
  },
  {
    title: 'Old Fashioned',
    price: '$28',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Boulevardier',
    price: '$26',
    tags: 'Sweet Vermouth | bourbon  | Campari | Maraschino Cherry',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Restaurant',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: "Traveler's Choice",
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Fine Dining',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef to Watch',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
