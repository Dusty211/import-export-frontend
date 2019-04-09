import React, {Component} from 'react';

class Login extends Component {

  constructor() {
    super()
    this.state = {
      something: null
    }
  }

  componentDidMount() {
    console.log('Props:', this.props)
  }

  render() {

    return(
      <div>
      login component
      </div>
    )
  }

}

export default Login
