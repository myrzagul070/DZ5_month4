import {Component} from "react";
class TitleComponent extends Component {
    render() {
        const {input1Value, input2Value} = this.props
        return (
            <div>
                <h2>Значение первого инпута: {input1Value}</h2>
                <h2>Значение второго инпута: {input2Value}</h2>
            </div>
        );
    }
}
export default TitleComponent