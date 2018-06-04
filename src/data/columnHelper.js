import imageData from './images';

const columnNo = 3;
const categories = [];
export const categoryNames = [];

class Category {
  constructor(name) {
    this.name = name;
    this.cols = [[],[],[]];
  }
};

Object.keys(imageData).forEach(key => {
  categoryNames.push(key);
  const category = new Category(key)
  imageData[key].forEach((elem, index) => {  
    category.cols[index % columnNo].push(elem);
  });
  categories.push(category);
})

categoryNames.push('contact');

export default categories;