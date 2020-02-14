import imageData from './images';

const columnNo = 3;
const categories = [];

class Category {
  constructor(name) {
    this.name = name;
    this.cols = [[],[],[]];
  }
};

Object.keys(imageData).forEach(key => {
  const category = new Category(key)
  imageData[key].forEach((elem, index) => {  
    category.cols[index % columnNo].push(elem);
  });
  categories.push(category);
})


export default categories;