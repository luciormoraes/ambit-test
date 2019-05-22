import React from 'react';
import Under30Item from './Under30Item';
import { getUnder30 } from '../repository';

export default class Under30List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			under30s: []
		}
	}

	componentWillMount() {
		getUnder30().then((under30s) => {
	      this.setState({ under30s });
	    });
	}

	render() {
		const { under30s } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Under 30</h3>
				<hr/>
				{
					under30s.map((under30, index) => <Under30Item under30={under30} key={index}/>)
				}
				<hr/>
				<br/><br/><br/>
			</div>
		);
	}
}
