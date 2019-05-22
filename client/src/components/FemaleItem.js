import React from 'react';

export default class FemaleItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	render(){
		const { female } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
			    <h4 className="card-title">Name: {female.name}</h4>
			    <p className="card-text">Gender: {female.gender}</p>
			    <h5 className="card-text">Age: {female.age}</h5>
			  </div>
			</div>
		)
	}
}
