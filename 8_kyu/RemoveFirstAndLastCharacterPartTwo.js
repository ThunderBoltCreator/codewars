function array(string) {
	const arr = string.split(',')
	
	if (arr.length < 3) return null
	
	return string.split(',').slice(1, arr.length - 1).join(' ')
}

const str = '1,2,3'


console.log(str.split(',').length)
console.log(str.split(',').slice(1,2))