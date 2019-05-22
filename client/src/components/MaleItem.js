import React from 'react';

export default class MaleItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	render(){
		const { male } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
			    <h4 className="card-title">Name: {male.name}</h4>
			    <p className="card-text">Gender: {male.gender}</p>
			    <h5 className="card-text">Age: {male.age}</h5>
			  </div>
			</div>
		)
	}
}
