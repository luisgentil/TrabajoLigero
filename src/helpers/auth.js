export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "Debes estar registrado.");
  res.redirect("/auth/signin");
};
