import { Card } from "@mui/material";

const ResultCard = ({ data }) => {
	return (
		<>
			<Card className="outputCard">
				<span>Result </span>
				<span className="title">Selected Material</span>
				<div className="resultClass">
					<div className="left">
						<div>
							<span>
								{Object.keys(data).length > 0 &&
									data != null &&
									data != undefined &&
									data.Material}
							</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue">
								{Object.keys(data).length > 0 &&
									data != null &&
									data != undefined &&
									data.MaterialFactor + `(Material Factor)`}
							</span>
						</div>
					</div>
				</div>
				<span className="title">Selected General Process Hazards</span>
				<div className="resultClass">
					<div className="left">
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								data != undefined &&
								data.GeneralProcessHazard.map((item) => {
									return (
										<>
											<span>{item.details[0].text}</span>
										</>
									);
								})}
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								data != undefined &&
								data.GeneralProcessHazard.map((item) => {
									return (
										<>
											<span className="userValue">
												{item.details[0].userInput}
											</span>
										</>
									);
								})}
						</div>
					</div>
				</div>

				<span className="title">Selected Special Process Hazards</span>
				<div className="resultClass">
					<div className="left">
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								data != undefined &&
								data.SpecialProcessHazard.map((item) => {
									return (
										<>
											<span>{item.details[0].text}</span>
										</>
									);
								})}
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							{Object.keys(data).length > 0 &&
								data != null &&
								(data != undefined) != null &&
								data != undefined &&
								data.SpecialProcessHazard.map((item) => {
									return (
										<>
											<span className="userValue">
												{item.details[0].userInput}
											</span>
										</>
									);
								})}
						</div>
					</div>
				</div>

				<span className="title">Fire & Explosion Index </span>
				<div className="resultClass">
					<div className="left">
						<div>
							<span className="userValue">Output</span>
						</div>
					</div>
					<div
						className="right
					"
					>
						<div>
							<span className="userValue1">
								{Object.keys(data).length > 0 &&
									data != null &&
									data != undefined &&
									data.FireExplosionIndex}
							</span>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default ResultCard;
