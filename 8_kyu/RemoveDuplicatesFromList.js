function distinct(a) {
	let res = []
	a.forEach((item) => {
		!res.includes(item) && res.push(item)
	})
	return res;
}

console.log(distinct([1,1,2]))