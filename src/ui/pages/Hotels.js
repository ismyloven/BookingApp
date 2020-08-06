import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {container} from "../containers/App/app.module.scss";

import Filter from "../components/Filter/Filter";
import Hotel from "../components/Hotel/Hotel";
import Footer from "../components/Footer/Footer";

class Hotels extends Component {
	render() {
		return (
			<>
				<Header />
				<div className={container}>
					<div style={{ display: 'flex' }}>
						<Filter />
						<ul style={{ listStyle: 'none', width: '100%' }}>
							<li><Hotel /></li>
							<li><Hotel /></li>
							<li><Hotel /></li>
							<li><Hotel /></li>
							<li><Hotel /></li>
							<li><Hotel /></li>
							<li><Hotel /></li>
						</ul>
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Hotels;