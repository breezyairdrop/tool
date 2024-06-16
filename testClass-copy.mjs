class GenerateLeads {
  constructor(searchString) {
    this.query = searchString;
    // this.width = width;
  }
  // Getter
  async getResult() {

    const resoo = await axios
      .get(`https://puppeteer-render-9bsg.onrender.com/leads/?search=${this.query}`)
      .then(function (response) {
        // handle success
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
        // console.log('shout')
      })

    return resoo;
  }

}

const square = new GenerateLeads('eatery uyo');

console.log(square.getResult); // 100


// https://puppeteer-render-9bsg.onrender.com/leads/?search=${query}