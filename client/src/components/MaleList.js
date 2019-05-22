import React from 'react';
import MaleItem from './MaleItem';
import { getMale } from '../repository';

export default class MaleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			males: []
		}
	}

	componentWillMount() {
		getMale().then((males) => {
	      this.setState({ males });
	    });
	}

	render() {
		const { males } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">Males</h3>
				<hr/>
				{
					males.map((male, index) => <MaleItem male={male} key={index}/>)
				}
				<hr/>
				<br/><br/><br/>
			</div>
		);
	}
}
