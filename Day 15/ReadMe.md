# Day15 planing

- start server on port (5000)

- set up database connection (sequelize)

- make a model

  -> (User) -> {id, name, role, email, password}
  -> (Products) -> {id, title, price, count, image}

- setup routes -> {register, login, userDashboard, adminDashboard}

  -> (register) -> { InitialChecks for validation, setRole ,registerController}
  -> (login) -> {checkUserExists, checkRole ,checkPassword, loginController}
  -> (dashboard) -> { userAuth: checkToken, dashboardController}
  -> (products) -> {using sequelize for pagination and get products}

- make middlewares

  -> {registerInitialCheck, checkUserExists, checkPassword, checkRole, userAuth, passport}

- make controllers (working logic - final response)

  -> (register) -> {alreadyExists, hashPassword, save}
  -> (login) -> {make jwt token, send response}
