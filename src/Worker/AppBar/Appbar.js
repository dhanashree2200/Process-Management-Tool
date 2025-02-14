import React, { useState } from "react";
import "./../AppBar/Appbar.css";
// import { BiCheck } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";
import "./../ErrorMessages/Error.css";
import brandLogo from "./../../Admin/pages/Sidebar/brandIcon.png";
import Error from "./../ErrorMessages/Error";
const Appbar = ({ processName, processId, procOrders }) => {
	const [IsOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="Appbar-main">
				<div className="appBarHeader">
					<img
						className="brandIconStyle"
						src={brandLogo}
						alt="Vatan Textiles"
					/>

					<h4 style={{ fontSize: "20px", color: "#ffff", fontStyle: "bold" }}>
						{processName}
					</h4>
				</div>
				{processId ?  
				<div className="ErrorIcon">
					<button className="error-btn" onClick={() => setIsOpen(true)}>
						<RiErrorWarningFill
							style={{ fontSize: "32px", color: "#ffff", fontStyle: "bold" }}
						/>
					</button>
					{/* {console.log("Process id in appbar:", processId)} */}
					<Error
						style={{
							position: "relative",
							alignItems: "center",
							marginTop: "30px",
							marginRight: "30px",
						}}
						open={IsOpen}
						procId={processId}
						procOrders={procOrders}
						onClose={() => setIsOpen(false)}
					/>
				</div> : <div/>}
			</div>
		</>
	);
};
export default Appbar;
