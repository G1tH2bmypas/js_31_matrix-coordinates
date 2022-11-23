function getCoordinates(matrix) {
	let total = {x:0 , y:0};
	let swith = false;

	for (let i = 0; i < matrix.length; i++) {
		if (swith) {
			break;
		}
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				total.x = j;
				total.y = i;
			}
		}
	}
	return total;
}

module.exports = getCoordinates;
