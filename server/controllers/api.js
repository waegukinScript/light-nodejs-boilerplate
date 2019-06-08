exports.getApi = (req, res) => {
  res.render("api/index", {
    title: "API Examples"
  });
};
