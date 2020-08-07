module.exports = client => async (req, res, next) => {
  const data = await client.get(req.originalUrl)

  // On cache hit, return data
  if (typeof data === 'string') {
    return res.json(JSON.parse(data))
  }

  // Otherwise, continue on
  return next()
}
