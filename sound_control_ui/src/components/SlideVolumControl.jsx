import React, { Component } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';


class SlideVolumControl extends Component {
    state = {
         value:         0
        ,step:          1
        ,min:           0
        ,max:           100
    }

    render() { 
        const { disabled, handleOnChange, value } = this.props;

        return ( 
            <div className="d-flex p-5">
                <RangeSlider
                    className="slider"
                    value           = { value }
                    onChange        = { handleOnChange }
                    step            = { this.state.step }
                    max             = { this.state.max }
                    min             = { this.state.min }          
                    disabled        = { disabled }
                /> 
            </div>
          );
    }    

}
 
export default SlideVolumControl;