export default function User (prop) {
    const name = "Dhanush Kumar"
    return(
        <>
            <h1>User component</h1>
            <button onClick={()=>prop.getData(name)}>Click me</button>
        </>
    )
}