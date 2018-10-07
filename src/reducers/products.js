var initialState = [
  {
    id: 1,
    name: 'Monster 797',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/3LYwlGMCkwwIyQeOmaUg04/62d85640daa995211d666728fcffb793/Monster-797_MY18-White-01-Book-testride_630x390.jpg',
    description: 'The Monster 797 is the entrance to the Ducati world with its values, style, sophistication, and performance. It sporty, essential, easy to ride, but never intimidating — all you need to have undemanding fun.',
    price: 9295,
    rating: 3,
    inventory: 100
  },
  {
    id: 2,
    name: 'Monster 797',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/3LYwlGMCkwwIyQeOmaUg04/62d85640daa995211d666728fcffb793/Monster-797_MY18-White-01-Book-testride_630x390.jpg',
    description: 'The Monster 797 is the entrance to the Ducati world with its values, style, sophistication, and performance. It sporty, essential, easy to ride, but never intimidating — all you need to have undemanding fun.',
    price: 9295,
    rating: 2,
    inventory: 100
  },
  {
    id: 3,
    name: 'Monster 797',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/3LYwlGMCkwwIyQeOmaUg04/62d85640daa995211d666728fcffb793/Monster-797_MY18-White-01-Book-testride_630x390.jpg',
    description: 'The Monster 797 is the entrance to the Ducati world with its values, style, sophistication, and performance. It sporty, essential, easy to ride, but never intimidating — all you need to have undemanding fun.',
    price: 9295,
    rating: 4,
    inventory: 100
  },
];

const Products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default Products;
