module.exports = {
  register (req, res) {
    res.send({
      message: `${req.body.email} is registered!`
    })
  }
}
