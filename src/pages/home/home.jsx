import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";

import Styles from "./Home.module.scss";

function Home() {
	return (
		<main className={Styles.homepage}>
			<Hero
				title="Promoted Content"
				subtitles={["No fees.", "No minimum deposit.", "High interest rates"]}
				text="Open a savings account with Argent Bank today!"
			/>

			<Features />
		</main>
	);
}

export default Home