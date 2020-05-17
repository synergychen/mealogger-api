const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
}

module.exports = {
  successResponse: (data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(JSON.stringify(data, null, 2))
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    }
  },
  errorResponse: (err, event = {}) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(err)
    }
    return {
      statusCode: err.statusCode || 500,
      headers,
      body: JSON.stringify({
        event: event,
        err: err,
      }),
    }
  },
  mealPlanParser: (mealPlan) => {
    const meals = ['breakfast', 'lunch', 'dinner']
    let data = JSON.parse(JSON.stringify(mealPlan))
    console.log(JSON.stringify(mealPlan))
    meals.forEach(meal => {
      const dishes = (data['dishes'] || []).filter(dish => {
        return dish['dish_plan']['meal'].toLowerCase() === meal
      })
      data[meal] = {
        dishes: dishes,
        foods: dishes.map(dish => dish['food']).flat()
      }
    })
    return data
  }
}