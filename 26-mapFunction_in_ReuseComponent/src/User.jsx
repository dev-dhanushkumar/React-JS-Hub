function User(prop) {
    return(
        <div>
        <span>User Name: {prop.data.name}</span><br />
        <span>User Email: {prop.data.email}</span><br />
        <span>User Contact: {prop.data.contact}</span><br />
        <br />
        </div>
    )
}

export default User;