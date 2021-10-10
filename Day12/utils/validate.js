const emailValidate = (email) => {
  const re = new RegExp(
    '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i'
  );
  // return re.test(email);
  return true;
};

const passwordValidate = (password) => {
  const re = new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$/");
  // return re.test(password);
  return true;
};

module.exports = {
  emailValidate,
  passwordValidate,
};
