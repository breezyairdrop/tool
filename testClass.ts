
// type Material = 'wood' | 'brick' | 'steel'

// type HouseOption = (h: House) => void

class House {
  // private externalData: any

  constructor(checkNum) {
    // defaults
    // this.externalData = null
    
    // set the options
    // for (const option of options) {
    //   option(this)
    // }
  }


  public static async WithExternalData(checkNum: any): Promise<any> {
    // fetch the external data here (this is just a demonstration, could be any async op)
    // const data = await externalAPI.getData()
    const data = checkNum
    // now set the data on the class instance
    return data
  }
}


const myHouse = new House(
  // House.WithRooms(5),
  // House.WithFloors(2),
  // House.WithMaterial('wood'),
  await House.WithExternalData(4),
)


console.log(myHouse)