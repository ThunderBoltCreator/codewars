const arr = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]

function points(games) {
	let res = 0
	
	let oneTeamPoint = 0
	let twoTeamPoint = 0
	let points = ''
	
	games.forEach((item) => {
		points = item.replace(':', '')
		
		oneTeamPoint = +points[0]
		twoTeamPoint = +points[1]
		
		if (oneTeamPoint > twoTeamPoint) res += 3
		if (oneTeamPoint === twoTeamPoint) res += 1
	})
	
	return res
}

points(arr)
console.log(points(arr))