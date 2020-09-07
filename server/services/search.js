module.exports = {
  getProductsByName(str, data) {
    return new Promise(function(resolve, reject) { 
     const filteredData = data.filter(product => {
        const lowerCaseProductName = product.name.toLowerCase();
        return lowerCaseProductName.indexOf(str) !== -1;
      })
      resolve(filteredData)
    })
  }
}