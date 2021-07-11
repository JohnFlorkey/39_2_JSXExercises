function App() {
    const person1 = {
        name: "Beaufort",
        age: 19,
        hobbies: ["mtg", "pokemon", "dungeosn & dragons"]
    }
    const person2 = {
        name: "Beaucephus",
        age: 11,
        hobbies: ["picking nose"]
    }
    const person3 = {
        name: "Pappy",
        age: 87,
        hobbies: ["whisky", "whiskey", "bourbon"]
    }
    const people = [person1, person2, person3];

    return (
        <div>
            { people.map(p => <Person name={p.name} age={p.age} hobbies={p.hobbies} />) }
        </div>
    )
}