var a = document.getElementById("apple")
var b = document.getElementById("android")
var c = document.getElementById("picture1")
var d = document.getElementById("picture2")
var e = document.getElementById("picture3")
var f = document.getElementById("picture4")
var g = document.getElementById("midimg")

/* when clicked it randomly selects one image */
function androidClick (){
	c.classList.remove ("none")
	d.classList.remove ("none")
	e.classList.remove ("none")
	f.classList.remove ("none")
	c.classList.remove ("atopleftimg1")
	c.classList.remove ("atopleftimg2")
	c.classList.remove ("atopleftimg3")
	c.classList.remove ("atopleftimg4")
	c.classList.remove ("topleftimg1")
	c.classList.remove ("topleftimg2")
	c.classList.remove ("topleftimg3")
	c.classList.remove ("topleftimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		c.classList.add ("atopleftimg1");
	}
	if (random == 1) {
		c.classList.add ("atopleftimg2");
	}
	if (random == 2) {
		c.classList.add ("atopleftimg3");
	}
	if (random == 3) {
		c.classList.add ("atopleftimg4");
	}
	d.classList.remove ("atoprightimg1")
	d.classList.remove ("atoprightimg2")
	d.classList.remove ("atoprightimg3")
	d.classList.remove ("atoprightimg4")
	d.classList.remove ("toprightimg1")
	d.classList.remove ("toprightimg2")
	d.classList.remove ("toprightimg3")
	d.classList.remove ("toprightimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		d.classList.add ("atoprightimg1");
	}
	if (random == 1) {
		d.classList.add ("atoprightimg2");
	}
	if (random == 2) {
		d.classList.add ("atoprightimg3");
	}
	if (random == 3) {
		d.classList.add ("atoprightimg4");
	}
	e.classList.remove ("abottomrightimg1")
	e.classList.remove ("abottomrightimg2")
	e.classList.remove ("abottomrightimg3")
	e.classList.remove ("abottomrightimg4")
	e.classList.remove ("bottomrightimg1")
	e.classList.remove ("bottomrightimg2")
	e.classList.remove ("bottomrightimg3")
	e.classList.remove ("bottomrightimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		e.classList.add ("abottomrightimg1");
	}
	if (random == 1) {
		e.classList.add ("abottomrightimg2");
	}
	if (random == 2) {
		e.classList.add ("abottomrightimg3");
	}
	if (random == 3) {
		e.classList.add ("abottomrightimg4");
	}
	f.classList.remove ("abottomleftimg1")
	f.classList.remove ("abottomleftimg2")
	f.classList.remove ("abottomleftimg3")
	f.classList.remove ("abottomleftimg4")
	f.classList.remove ("bottomleftimg1")
	f.classList.remove ("bottomleftimg2")
	f.classList.remove ("bottomleftimg3")
	f.classList.remove ("bottomleftimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		f.classList.add ("abottomleftimg1");
	}
	if (random == 1) {
		f.classList.add ("abottomleftimg2");
	}
	if (random == 2) {
		f.classList.add ("abottomleftimg3");
	}
	if (random == 3) {
		f.classList.add ("abottomleftimg4");
	}
}

/* when clicked it randomly selects one image */
function appleClick (){
	c.classList.remove ("none")
	d.classList.remove ("none")
	e.classList.remove ("none")
	f.classList.remove ("none")
	c.classList.remove ("topleftimg1")
	c.classList.remove ("topleftimg2")
	c.classList.remove ("topleftimg3")
	c.classList.remove ("topleftimg4")
	c.classList.remove ("atopleftimg1")
	c.classList.remove ("atopleftimg2")
	c.classList.remove ("atopleftimg3")
	c.classList.remove ("atopleftimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		c.classList.add ("topleftimg1");
	}
	if (random == 1) {
		c.classList.add ("topleftimg2");
	}
	if (random == 2) {
		c.classList.add ("topleftimg3");
	}
	if (random == 3) {
		c.classList.add ("topleftimg4");
	}
	d.classList.remove ("toprightimg1")
	d.classList.remove ("toprightimg2")
	d.classList.remove ("toprightimg3")
	d.classList.remove ("toprightimg4")
	d.classList.remove ("atoprightimg1")
	d.classList.remove ("atoprightimg2")
	d.classList.remove ("atoprightimg3")
	d.classList.remove ("atoprightimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		d.classList.add ("toprightimg1");
	}
	if (random == 1) {
		d.classList.add ("toprightimg2");
	}
	if (random == 2) {
		d.classList.add ("toprightimg3");
	}
	if (random == 3) {
		d.classList.add ("toprightimg4");
	}
	e.classList.remove ("bottomrightimg1")
	e.classList.remove ("bottomrightimg2")
	e.classList.remove ("bottomrightimg3")
	e.classList.remove ("bottomrightimg4")
	e.classList.remove ("abottomrightimg1")
	e.classList.remove ("abottomrightimg2")
	e.classList.remove ("abottomrightimg3")
	e.classList.remove ("abottomrightimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		e.classList.add ("bottomrightimg1");
	}
	if (random == 1) {
		e.classList.add ("bottomrightimg2");
	}
	if (random == 2) {
		e.classList.add ("bottomrightimg3");
	}
	if (random == 3) {
		e.classList.add ("bottomrightimg4");
	}
	f.classList.remove ("bottomleftimg1")
	f.classList.remove ("bottomleftimg2")
	f.classList.remove ("bottomleftimg3")
	f.classList.remove ("bottomleftimg4")
	f.classList.remove ("abottomleftimg1")
	f.classList.remove ("abottomleftimg2")
	f.classList.remove ("abottomleftimg3")
	f.classList.remove ("abottomleftimg4")
	var random = Math.round(Math.random() * 4);
	if (random == 0) {
		f.classList.add ("bottomleftimg1");
	}
	if (random == 1) {
		f.classList.add ("bottomleftimg2");
	}
	if (random == 2) {
		f.classList.add ("bottomleftimg3");
	}
	if (random == 3) {
		f.classList.add ("bottomleftimg4");
	}
}

/* when clicked resets page */
function resetAll(){
	c.classList.add("none")
	d.classList.add("none")
	e.classList.add("none")
	f.classList.add("none")
	c.classList.remove ("atopleftimg1")
	c.classList.remove ("atopleftimg2")
	c.classList.remove ("atopleftimg3")
	c.classList.remove ("atopleftimg4")
	d.classList.remove ("atoprightimg1")
	d.classList.remove ("atoprightimg2")
	d.classList.remove ("atoprightimg3")
	d.classList.remove ("atoprightimg4")
	f.classList.remove ("atopleftimg1")
	f.classList.remove ("atopleftimg2")
	f.classList.remove ("atopleftimg3")
	f.classList.remove ("atopleftimg4")
}