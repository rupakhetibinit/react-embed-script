import { useState } from "react";
import "./main.css";

const DownArrow = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="icon-width">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
};
const ChatIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="icon-width">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
			/>
		</svg>
	);
};

const XMarkIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="icon-width">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
};

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className="container">
			<div className={`chatbot-container ${open ? "flex" : "hidden"}`}>
				<div className="chatbot-container-inner">
					<div>ChatBot</div>
					<button className="x-button" onClick={() => setOpen(false)}>
						<XMarkIcon />
					</button>
					{/* <input
						style={{
							position: "absolute",
							bottom: "2rem",
						}}
						type="text"></input> */}
				</div>
			</div>
			<div className="chat-button-container">
				<button className="chat-open-button"
					onClick={() => setOpen(!open)}>
					{open ? <DownArrow /> : <ChatIcon />}
				</button>
			</div>
		</div>
	);
}

export default App;
