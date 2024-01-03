import images from './images';

const whiskeys = [
  {
    title: 'Suntory Toki Blended Nikka Taketsuru Pure Malt',
    price: 's/p',
    tags: 'JP | Shot / Rocks | 43%',
  },
  {
    title: 'Suntory Hibiki Harmony',
    price: 's/p',
    tags: 'JP | Shot / Rocks / 43%',
  },
  {
    title: 'JAMESON',
    price: 's/p',
    tags: 'Irish | Shot / Rocks | 40%',
  },
  {
    title: 'Glenlivet 18 years',
    price: 's/p',
    tags: '18 years | Shot / Rocks | 34%',
  },
  {
    title: 'Johnnie Walker Blue',
    price: 's/p',
    tags: 'Scotch-blended | Shot / Rocks | 40%',
  },
];

const cocktails = [
  {
    title: 'Strawberry/Lemonade/Mango/Soju/Peach Caprisun',
    price: '$20',
    tags: 'Select Flavor | Charm Soju | Soda | Capirsun Pouch',
  },
  {
    title: 'Shooters',
    price: 's/p',
    tags: 'Green Tea | Lemon Drop | Irish Car Bomb | Jager Bomb | ',
  },
  {
    title: 'Bay Breeze',
    price: '$10',
    tags: 'Vodka | Pineapple Juice | Cranberry',
  },
  {
    title: 'Tokyo Tea',
    price: '$20',
    tags: 'Vodka | Rum | Gin | Tequlia | Triple Sec | Midori | S&S Mix | Sprite',
  },
  {
    title: 'Yuzu Mule',
    price: '20',
    tags: 'Yuzu | Vodka | Ginger Beer',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: '#1 World Famous Korean Fried Chicken',
    subtitle: 'famous in 57 countries',
  },
  {
    imgUrl: images.award01,
    title: '#2 Rising Star',
    subtitle: 'Featured on Philly Mag.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Our staff are trained to provide the highest level of service for every guest!',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Selection',
    subtitle: 'We take great pride in carrying only the finest liquor.',
  },
];

export default { whiskeys, cocktails, awards };
