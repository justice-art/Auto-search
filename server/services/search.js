module.exports = {
  getProductsByName(str, data) {
    return new Promise(function(resolve, reject) { 
     const filteredData = data.filter(product => {
        const nameResult = isExistByProductName(product.name);
        const tagResult = isExistByTagName(product.tags);
        return nameResult || tagResult
      })
      resolve(filteredData)
    })

    function isExistByProductName(productName) {
      const lowerCaseProductName = productName.toLowerCase();
      return lowerCaseProductName.indexOf(str) !== -1;
    }

    function isExistByTagName(tags) {
        const filteredTags = tags.filter(tag => {
        const lowerCaseTagName = tag.toLowerCase();
        return lowerCaseTagName.indexOf(str) !== -1;
      })
      return filteredTags.length > 0;
    }

  }
}