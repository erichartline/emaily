module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" })
  }

  // if user is logged in, continue the process
  next()
}
