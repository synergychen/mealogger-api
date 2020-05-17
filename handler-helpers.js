module.exports = {
  successResponse: (data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(JSON.stringify(data, null, 2))
    }
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    }
  },
  errorResponse: (err) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(err)
    }
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Failed",
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