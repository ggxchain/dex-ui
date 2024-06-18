export function expirationFormat(timeLeft: number) {
	const seconds = Math.floor((timeLeft / 1000) % 60);
	const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
	const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

	let result = "";
	if (days > 0) {
		result += `${days} Days `;
	}
	if (hours > 0) {
		result += `${hours} Hours `;
	}
	if (minutes > 0) {
		result += `${minutes} Minutes `;
	}
	result += `${seconds} Seconds `;
	return result;
}
