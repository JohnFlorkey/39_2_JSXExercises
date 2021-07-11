const Person = ({ name, age, hobbies }) => {
    return ( 
        <div>
            <p>Learn some information about this person</p>
            <h3>Name: { name }</h3>
            <h3>Age: { age }</h3>
            <h3>{ age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                { hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}