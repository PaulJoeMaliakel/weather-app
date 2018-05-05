import React from "react";

class Weather extends React.Component{
    render() {
        return(
            
        <div>
            
            {this.props.city && this.props.country && <h2 className="weather__key">  Location: <span className="weather__value">{this.props.city},{this.props.country}</span></h2>}
            
            
            {this.props.temperature && <h2 className="weather__key">temperature:<span className="weather__value">{this.props.temperature}</span></h2>}
            
            
            {this.props.humidity && <h2 className="weather__key">humidity:<span className="weather__value">{this.props.humidity}</span></h2>}
            
            

            {this.props.description &&  <h2 className="weather__key"> description:<span className="weather__value">{this.props.description}</span></h2>}
            
            
            {this.props.error && <h2 className="weather__key"><span className="weather__value">{this.props.error}</span></h2>}
        </div>
        
        );
    }
};

export default Weather;