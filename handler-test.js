require("dotenv").config()
const handler = require("./handler")

console.log(
  handler.updateFood(
    {
      body: JSON.stringify({
        name: 'soy',
        food_category_id: '5'
      }),
      pathParameters: {
        id: '214',
      },
    }, // event
    {}, //content
    function (data, ss) {
      //callback function with two arguments
      console.log(data, ss)
    }
  )
)