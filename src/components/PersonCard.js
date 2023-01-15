import '../styles/PersonCard.css';

function PersonCard({ person, onDelete }) {
  return (
    <div className="PersonCard">
      <img src={person.picture.large} alt={person.name.first} />
      
        <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
        <p className="title">{person.location.city}</p>
        <button onClick={() => onDelete(person)}>Supprimer</button>
    </div>
  );
}

export default PersonCard;
