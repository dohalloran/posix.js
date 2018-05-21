# posix.js
[![GitHub issues](https://img.shields.io/github/issues/dohalloran/posix.js.svg)](https://github.com/dohalloran/posix.js/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dohalloran/posix.js/master/LICENSE)

- [x] Author: Damien O'Halloran, The George Washington University 2017 
- [x] Perhaps the smallest JavaScript library ever
- [x] Minified version is 536 bytes
- [x] Dynamically inserts the Current Unix Timestamp onto a webpage

## This is all you need to add to your HTML
### with jQuery:
```html
<body>
	<!--plays very nicely with jQuery-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
	<script src="posix.js"></script>
	<!--Every time the user mouses over the placeholder tag
	the Unix Timestamp will dynamically appear-->
	<h1 id='showUTS'></h1>
	<!--placeholder text-->
	<h1 id="utsTag" onmouseover="UTS$('#showUTS','#utsTag')">POSIX</h1>
</body>
``` 
### without jQuery:
```html
<body>
	<script src="posix.js"></script>
	<!--Every time the user mouses over the placeholder tag
	the Unix Timestamp will dynamically appear-->
	<h1 id='showUTS'></h1>
	<!--placeholder text-->
	<h1 id="utsTag" onmouseover="UTS$('showUTS','utsTag')">POSIX</h1>
</body>
``` 

## Contributing
All contributions are welcome.

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/dohalloran/posix.js/issues).

## License 
MIT





