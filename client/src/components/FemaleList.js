import React from 'react';
import FemaleItem from './FemaleItem';
import { getFemale } from '../repository';

export default class FemaleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			females: []
		}
	}

	componentWillMount() {
		getFemale().then((females) => {
	      this.setState({ females });
	    });
	}

	render() {
		const { females } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Females</h3>
				<hr/>
				{
					females.map((female, index) => <FemaleItem female={female} key={index}/>)
				}
				<hr/>
				<br/><br/><br/>
			</div>
		);
	}
}
