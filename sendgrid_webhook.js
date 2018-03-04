var localtunnel = require("localtunnel")
localtunnel(5000, { subdomain: "uifdhakjgfb" }, function(err, tunnel) {
  console.log("LT running")
})
