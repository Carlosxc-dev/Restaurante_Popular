/** @format */
import Footer from "./components/footer/footer";
import { Global } from "./components/globalStyle";
import Header from "./components/header/header";
import Main from "./components/main/main";
import About from "./components/about/about";
import Redes from "./components/redes/redes";

function App() {
	return (
		<>
			<Global />
			<Header />
			<About/>
			<Main />
			<Redes/>
			<Footer />
		</>
	);
}

export default App;
