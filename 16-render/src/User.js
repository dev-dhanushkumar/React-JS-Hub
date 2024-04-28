import React,{Component} from  "react"


export default class User extends Component {
    render() {
	console.log(this.props);
        return(
            <div>
                <h1>Hello {this.props.name}!</h1>
	    </div>
	);
}
}
