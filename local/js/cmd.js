/* refered from : http://www.gesource.jp/programming/javascript/20060503.html */
/*				  http://www.gesource.jp/programming/javascript/20060501.html */

function createXMLHttpRequest() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e2) {
				return null;
			}
		}
	} else {
		return null;
	}
}

const server_addres = "http://xxx.xxx.xxx.xxx"

const light_on = "/light/on"
const light_off = "/light/off"
const light_fav = "/light/fav"
const air_jositu = "/air/jositu"
const air_reibo = "/air/reibo"
const air_off = "/air/off"
const air_timer_on = "/air/timer-on"
const air_timer_off = "/air/timer-off"
const senpuu_on = "/senpu/on"
const senpuu_off = "/senpu/off"
const senpuu_timer = "/senpu/timer"

function lightOn()
{
	var url = light_on;
	cmd(url);
}

function lightOff()
{
	var url = light_off;
	cmd(url);
}

function lightFav()
{
	var url = light_fav;
	cmd(url);
}

function airJositu()
{
	var url = air_jositu;
	cmd(url);
}

function airReibo()
{
	var url = air_reibo;
	cmd(url);
}

function airOff()
{
	var url = air_off;
	cmd(url);
}

function airTimerOn()
{
	var url = air_timer_on;
	cmd(url);
}

function airTimerOff()
{
	var url = air_timer_off;
	cmd(url);
}

function senpuuOn()
{
	var url = senpuu_on;
	cmd(url);
}

function senpuuOff()
{
	var url = senpuu_off;
	cmd(url);
}

function senpuuTimer()
{
	var url = senpuu_timer;
	cmd(url);
}

function syusya() 
{
	airOff();
	sleep(500)
	senpuuOff();
	sleep(500)
	lightOff();
}

function kitaku()
{
	lightFav();
	sleep(500)
	airJositu();
	sleep(500)
	senpuuOn();
}

function syuusin()
{
	airTimerOn();
	sleep(500)
	lightOff();
	sleep(500)
	senpuuTimer();
}

function cmd(url)
{
	var request = createXMLHttpRequest();
	var send_address = server_addres + url
	request.open("GET", send_address, true);
	request.send("");
}

/* referenced from : http://www.hirooooo-lab.com/entry/development/javascript-sleep */
/* web屋さんに見せたら怒られるやり方？ */
function sleep(ms)
{
	var d1 = new Date();
	while (true) {
		const d2 = new Date();
		if (d2 - d1 > ms) {
			break;
		}
	}
}
