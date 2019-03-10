import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isExternal from 'is-url-external';

class IntelliLink extends Component {

  constructor(props){
    super(props);
  }
 
  render() {
    const { rel,target, to, value } = this.props;

    return (
      isExternal(to) ? 
        (<a 
          href={to} 
          rel={rel}
          target={target}
        >
          {value}
        </a>) 
        : 
        (<Link 
          to={to}
          rel={rel} 
          target={target}
        >
          {value}
        </Link>)
    );
  }

}

IntelliLink.propTypes = {
  target: PropTypes.string,
  to: PropTypes.string,
  value: PropTypes.string
};

export default IntelliLink;