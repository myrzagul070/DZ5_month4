import {Component} from "react";
import TitleComponent from "./TitleComponent";
class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input1Value :'',
            input2Value : '',
            title: false
        }
    }
    handleInputChange = (event) => {
        const {name, value } = event.target;
        if (name === "input1Value") {
            this.setState({input1Value: value});
        } else if (name === "input2Value"){
            this.setState({input2Value: value})
        }
    }
    handleButtonClick = () => {
        this.setState({title: true})
    }
    render() {
        const {input1Value, input2Value, title} = this.state;
        return (
            <div>
                <input
                type={"text"}
                name={"input1Value"}
                value={input1Value}
                onChange={this.handleInputChange}/>
                <input
                type={"text"}
                name={"input2Value"}
                value={input2Value}
                onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>Показать значение инпута</button>
                {title && <TitleComponent input1Value={input1Value} input2Value={input2Value}/>}
            </div>
        )
    }
}
export default InputComponent