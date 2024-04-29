import React from "react";

class Student extends React.Component {
    componentWillUnmount() {
        alert("Student component Unmount!")
    }
    render() {
        return(
            <>
                <h4>student component Here!</h4>
            </>
        )
    }
}
export default Student