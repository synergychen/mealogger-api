require("dotenv").config()
const handler = require("./handler")

console.log(
  handler.createShoppingItem(
    {
      body: JSON.stringify({
        ids: ['207']
      }),
      pathParameters: {
        id: '1',
      },
    }, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
)