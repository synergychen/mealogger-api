require("dotenv").config()
const handler = require("./handler")

console.log(
  handler.createDish(
    {
      body: JSON.stringify({
        name: '粉丝牛腩煲',
        foods: ['28', '115']
      }),
      pathParameters: {
        id: '386',
      },
    }, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
)