import React, { Component, PropTypes } from "react"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"
import { actions } from 'redux-router5';
import BEM from '../../core/bem'
import Menu from "../menu/component"

require("./style.scss")

const b = BEM.with('KAF-block');

const Link = (props) => {
    const { name, params, options, router, navigateTo } = props;
    const href = router.buildUrl(name, params);
    const onClick = (evt) => {
        evt.preventDefault();
        navigateTo(name, params, options);
    };
    const className = router.isActive(name, params) ? 'active' : '';

    return <a { ...{ href, onClick, className } }>{ props.children }</a>
}

class ApplicationNavigation extends Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
    this.navigateTo = props.navigateTo;
  }

  render() {
    return(
    <div className={b({Application:true})}>
      <Link router={ this.router } navigateTo={ this.navigateTo } name='todos'>Compose</Link>
    </div>)
  }
}

ApplicationNavigation.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  items: state.applicationNavigation
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: bindActionCreators(actions.navigateTo, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationNavigation)
