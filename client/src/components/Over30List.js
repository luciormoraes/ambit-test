import React from 'react';
import Over30Item from './Over30Item';
import { getOver30 } from '../repository';

export default class Over30List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			over30s: []
		}
	}

	componentWillMount() {
		getOver30().then((over30s) => {
	      this.setState({ over30s });
	    });
	}

	render() {
		const { over30s} =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Over 30</h3>
				<hr/>
				{
					over30s.map((over30, index) => <Over30Item over30={over30} key={index}/>)
				}
				<hr/>
				<br/><br/><br/>
			</div>
		);
	}
}
