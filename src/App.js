import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Academics from './components/Academics/Academics';
import BS from './components/Academics/Btech/BtechSyllabus/Btech1/BS/BS';
import BtechSyllabus from './components/Academics/Btech/BtechSyllabus/BtechSyllabus';
import Research from './components/Research/Research';
import People from './components/People/People';
import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/academics/btech/syllabus/1/bs" component={BS} />
				<Route
					path="/academics/btech/syllabus"
					component={BtechSyllabus}
				/>
				<Route path="/academics" component={Academics} />
				<Route path="/research" component={Research} />
				<Route path="/people" component={People} />				
				<Route component={NoMatchPage} />
			</Switch>
			<ScrollUp />
			<Footer />
		</div>
	);
}

export default App;
