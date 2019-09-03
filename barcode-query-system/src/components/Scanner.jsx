import React, { useLayoutEffect } from 'react';
// import Quagga from 'quagga';

import PropTypes from 'prop-types';
import Quagga from 'quagga';

// export default class Scanner extends Component {
const Scanner = ({ onDetected }) => {
    useLayoutEffect(() => {
        Quagga.init({
            inputStream: {
                type: 'LiveStream',
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: 'user' // or user
                },
            },
            locator: {
                patchSize: 'medium',
                halfSample: true,
            },
            numOfWorkers: 1,
            decoder: {
                readers: [ 'ean_reader' ],
            },
            locate: true,
        }, (err) => {
            if (err) {
                return console.log('Error starting Quagga:', err);
            }
            Quagga.start();
        });
        Quagga.onDetected(onDetected);
        return () => {
            Quagga.offDetected(onDetected);
            Quagga.stop();
        };
    }, []);
    return (
        <div id="interactive" className="viewport" />
    )
}

Scanner.propTypes = {
    onDetected: PropTypes.func.isRequired
};

export default Scanner;
// }
