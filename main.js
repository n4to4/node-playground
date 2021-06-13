'use strict';

const { spawnSync } = require('child_process');
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise(resolve => {
		rl.question(query, resolve);
	});
}

async function main() {
	console.log('started');

	const result1 = spawnSync('sleep', ['1']);
	console.log(result1);

	const answer1 = await question('q? ');
	console.log(answer1);

	const result2 = spawnSync('time');
	console.log(result2);

	const answer2 = await question('q? ');
	console.log(answer2);

	rl.close();
}

main();
