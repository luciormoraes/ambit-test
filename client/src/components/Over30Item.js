import React from 'react';

export default class Over30Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	render(){
		const { over30 } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
			    <h4 className="card-title">Name: {over30.name}</h4>
			    <p className="card-text">Gender: {over30.gender}</p>
			    <h5 className="card-text">Age: {over30.age}</h5>
			  </div>
			</div>
		)
	}
}
