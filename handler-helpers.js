module.exports = {
  successResponse: (data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(JSON.stringify(data, null, 2))
    }
    return {
      statusCode: 200,
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
  }
}