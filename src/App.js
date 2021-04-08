import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Academics from './components/Academics/Academics';
import BtechSyllabus from './components/Academics/Btech/BtechSyllabus/BtechSyllabus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import ScrollUp from './components/ScrollUp/ScrollUp';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route
					path="/academics/btech/syllabus"
					component={BtechSyllabus}
				/>
				<Route path="/academics" component={Academics} />
				<Route component={NoMatchPage} />
			</Switch>
			<ScrollUp />
			<Footer />
		</div>
	);
}

export default App;
