import React, { Component } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';


class VolumControl extends Component {
    state = {
         currentValue:  0
        ,step:          1
        ,min:           0
        ,max:           100

    }
    render() { 
        const { disabled, onChange } = this.props;

        return ( 
            <div className="d-flex p-5">
                <RangeSlider
                    className="slider"
                    value           = { this.state.currentValue }
                    onChange        = { this.handleOnChangeValue }
                    step            = { this.state.step }
                    max             = { this.state.max }
                    min             = { this.state.min }          
                    disabled        = { false }
                /> 
            </div>
          );
    }

    handleOnChangeValue = ( event ) => this.setState( { currentValue: event.target.value } );
    

}
 
export default VolumControl;