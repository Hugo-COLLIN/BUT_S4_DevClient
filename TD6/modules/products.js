const productsList = [
    { ref: "REF1", price: "250,29" , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { ref: "REF2", price: "129,25", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { ref: "REF3", price: "18,10", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { ref: "REF4", price: "180,12", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { ref: "REF5", price: "318,50", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { ref: "REF6", price: "50,35", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ];

const search = (keywords) => {
  const matchKeywords = element => element.ref.includes(keywords) || element.desc.includes(keywords) || element.price.includes(keywords);
  let result = productsList.filter(matchKeywords);
  console.log(result);
  console.log(keywords);
  return result;
}

export default {
  list: productsList,
  search: search
};