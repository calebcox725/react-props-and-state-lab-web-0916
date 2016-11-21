const React = require('react');

class Pet extends React.Component {
  constructor() {
    super()

    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const pet = this.props.pet
    let adoptButton

    if (this.props.isAdopted) {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} (gender: {pet.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
