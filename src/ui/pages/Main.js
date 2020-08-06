import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {container} from "../containers/App/app.module.scss";
import Search from "../components/Search/Search";

import Footer from "../components/Footer/Footer";

class Main extends Component {
	render() {
		return (
			<>
				<Header />
				<div className={container}>
					<Search />
					<Footer />
				</div>
			</>
		);
	}
}

export default Main;