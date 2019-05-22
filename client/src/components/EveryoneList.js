import React from 'react';
import EveryoneItem from './EveryoneItem';
import { getEveryone } from '../repository';

export default class EveryoneList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			everyones: []
		}
	}

	componentWillMount() {
		getEveryone().then((everyones) => {
	      this.setState({ everyones });
	    });
	}

	render() {
		const { everyones } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Everyone</h3>
				<hr/>
				{
					everyones.map((everyone, index) => <EveryoneItem everyone={everyone} key={index}/>)
				}
				<hr/>
				<br/><br/><br/>
			</div>
		);
	}
}
