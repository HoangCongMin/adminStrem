import "./login.css"

const Login = () => {
  return (
          <div className="container">
            <form action='' method="post" >
              <div className="box">
                <h1 className="title-box">sign-in</h1>
              <div className="card">
                <label htmlFor="">email</label>
                <input type="text" />
              </div>
              <div className="card">
                <label htmlFor="">password</label>
                <input type="password" />
              </div>
              <div className="card-login">
                <button type="submit">login</button>
              </div>
              </div>
          </form>
          </div>
         )
}

export default Login
