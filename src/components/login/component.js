import React, {Component} from 'react'

class Login extends Component {
  canDeactivate() {
    return false;
  }
  onSubmit(evt) {
    evt.preventDefault();
    const user = this.refs.user.value

    if ( user === "jamal" ) {
      console.log(true)
    }
  }

  render() {
    return(
      <div>
        <h3>Login to Web App</h3>
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <p><input type="text" name="username" ref="user" placeholder="Username or Email" /></p>
          <p><input type="password" name="password" ref="password" placeholder="Password" /></p>
          <p className="submit"><input type="submit" name="commit" value="Login" /></p>
        </form>
      </div>
    )
  }
}

export default Login
