import React from "react"

class Counter extends React.PureComponent {
    render() {
        console.log("Counter Render");
        return(
            <div>
                <h1>Counter Component {this.props.count}</h1>
            </div>
        )
    }
}
export default Counter