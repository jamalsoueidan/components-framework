import React, { Component, PropTypes } from 'react'

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.router = context.router;
  }

  canDeactivate() {
    console.log("can deactivate login")
    return false;
  }

  // submit must not handle the localstorage setitem, it must dispatch a state change
  onSubmit(evt) {
    evt.preventDefault();
    const user = this.refs.user.value

    if ( user === "jamal" ) {
      localStorage.setItem('isUserLoggedIn', "true");
      router.navigate('home');
    } else {
      this.setState({error: "Wrong username or password!"})
    }
  }

  componentWillMount() {
    this.setState({error: ""})
  }

  render() {
    const style = { color: "#ff0040" }
    return(
      <div>
        <h3>Login to Web App</h3>
        <strong style={style}>{this.state.error}</strong>
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <p><input type="text" name="username" ref="user" placeholder="Username" /></p>
          <p><input type="password" name="password" ref="password" placeholder="Password" /></p>
          <p className="submit"><input type="submit" name="commit" value="Login" /></p>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
};


export default Login
