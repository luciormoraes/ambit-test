import React from 'react';

export default class EveryoneItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	render(){
		const { everyone } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
			    <h4 className="card-title">Name: {everyone.name}</h4>
			    <p className="card-text">Gender: {everyone.gender}</p>
			    <h5 className="card-text">Age: {everyone.age}</h5>
			  </div>
			</div>
		)
	}
}
