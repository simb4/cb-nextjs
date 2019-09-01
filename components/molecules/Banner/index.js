import React, {Component} from "react";
import Typography from "components/atoms/Typography";
import "./index.scss";

export default class Banner extends Component {
  render() {
    return (
      <div className='banner d-flex align-items-center'>
        <div className='banner__background'/>
        <div className="container">
          <div className="banner__content">
            <Typography variant='h1'>Your title</Typography>
            <Typography variant='body' className='mt-16'>Your subtitle</Typography>
          </div>
        </div>
      </div>
    )
  }
}
