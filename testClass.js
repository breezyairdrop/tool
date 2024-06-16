class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    // console.log(height,width)
    }
    // Getter
    get area() {
        const response = fetch("http://example.com/movies.json").then(function (response) {

        return response.data
			// handle success
			// res.json({cronId: cronId, result: response.data})

			// console.log(response.data, "shey")
		})
        return response
    //   return this.calcArea();
    // return this.height * this.width;
    }
    // Method
    // calcArea() {
    //   return this.height * this.width;
    // }
    // *getSides() {
    //   yield this.height;
    //   yield this.width;
    //   yield this.height;
    //   yield this.width;
    // }
  }
  
  const square = new Rectangle();
//   const square = new Rectangle(10, 10);
  
//   console.log(square)
  console.log(square.area); // 100
//   console.log([...square.getSides()]); // [10, 10, 10, 10]