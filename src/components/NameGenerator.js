import { useState } from 'react';
import '../styles/NameGenerator.css'
import PersonCard from './PersonCard';

// Function
function NameGenerator() {
    const [persons, setPersons] = useState([]);

    function addNewLine() {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => data.results[0])
            .then(person => setPersons(persons.concat([person])));
    }

    function deletePerson(person) {
        setPersons(persons.filter(p => p.login.uuid !== person.login.uuid))
    }

    return (
        <>
            <div className="NameGenerator">
                <div className="container">
                    <h1>Name generator</h1>
                    <button onClick={addNewLine}>Nouvelle ligne</button>
                    <div className='persons'>
                        {persons.map(person => <PersonCard key={person.login.uuid} person={person} onDelete={deletePerson} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NameGenerator;
