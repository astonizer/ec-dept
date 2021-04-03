import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ScrollUp from './components/ScrollUp/ScrollUp';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/contact" component={Contact}></Route>
			</Switch>
			<ScrollUp />
			<Footer />
		</div>
	);
}

export default App;
