import fs from "fs/promises"
/** generates timestamp `hh:mm:ss`*/
const getTime = () => `${new Date().toLocaleTimeString("ja-JP", { timeZone: "japan" })}`;

/** `yyyy_MM_dd.log` : file name is after the date he got executed. If you get him do this multiple times a day, you'd just get a single sequentially logged file per day. &nbsp;&nbsp; :> */
const logFile = `${(new Date()).toLocaleDateString("ja-JP", { timeZone: "japan" }).replace(/\//g, "_")}.log`;

const addLog = (message: string) => (
	fs.appendFile(logFile,
		`${getTime()}\t${message}\n`
	)
)
const toJSONFile = (name: string, json = "") => (
	json !== ""
		? fs.writeFile(`${name}.json`, json)
			.catch((err) => (
				addLog(`error on making JSON file.\n${err?.message || err}`)
			))
		: addLog(`${name} has empty json data.`)
			.catch((err) => (
				addLog(`error on logging.\n${err?.message || err}`)
			))
)
