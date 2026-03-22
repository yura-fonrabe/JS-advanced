'use strict'

function random(dice) {
	return Math.floor(Math.random() * dice + 1);
}
console.log(random(20));