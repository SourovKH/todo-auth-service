const logger = (req, res, next) => {
  const loggingMessage = {
    url: req.url,
    method: req.method,
    header: req.headers,
    body: req.body
  }
  console.log(loggingMessage);
  
  next()
}

module.exports = logger;