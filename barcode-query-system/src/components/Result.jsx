import React, { Component } from 'react';

import PropTypes from 'prop-types';

// export default class Result extends Component {

  const Result = ({ result }) => (
    <li>
        {result.codeResult.code} [{result.codeResult.format}]
    </li>
  );

  Result.propTypes = {
    result: PropTypes.object
  };
export default Result;
// }
