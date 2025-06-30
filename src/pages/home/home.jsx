import Hero from "../../components/hero/hero";
import Features from "../../components/features/features";

import Styles from "./home.module.scss";

function Home() {
	return (
		<main className={Styles.homepage}>
			<Hero
				title="Promoted Content"
				subtitles={["No fees.", "No minimum deposit.", "High interest rates"]} // Must be an array !IMPORTANT
				text="Open a savings account with Argent Bank today!"
			/>

			<Features />
		</main>
	);
}

export default Home