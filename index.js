let data = require('./data')
function exeCommand(input) {
	for (let x in data.commands) {
		for (let i in data.commands[x].q) {
			if (input === data.commands[x].q[i]) {
				return data.commands[x].a
			}
		}
	}
	return 'I am sorry, but I didn\'t quite get that.'
}


console.log(exeCommand('witt'))