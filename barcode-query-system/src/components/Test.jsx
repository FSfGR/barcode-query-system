// import React, { Component } from 'react'
// import QrReader from 'react-qr-reader'
//
// class Test extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       delay: 500,
//       result: 'No result',
//       legacyMode: true,
//       showViewFinder: true,
//     }
//
//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(result){
//     if(result){
//       this.setState({ result })
//     }
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }
//
//     return(
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           legacyMode={this.state.legacyMode}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           onLoad={this.handleLoad}
//           showViewFinder={this.state.showViewFinder}
//           />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }
// export default Test;



import React, { Component } from 'react'
import BarcodeReader from 'react-barcode-reader'

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <div>
        <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
        ></BarcodeReader>
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default Test;
