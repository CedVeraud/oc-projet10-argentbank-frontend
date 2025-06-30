import FeaturesData from "../../data/features.json";

import Styles from "./features.module.scss";

function Features() {
	const featuresData = FeaturesData;

	return (
		<section className={Styles.features}>
			<h2 className="sr-only">Features</h2>
			{featuresData.map((feature, index) => (
				<div className={Styles.features_item} key={index}>
					<img src={feature.icon} alt={feature.alt} className={Styles.features_icon} />
					<h3 className={Styles.features_title}>{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			))}
		</section>
	)
}

export default Features