document.querySelector("form").addEventListener("submit", function(e) {

// prevent form submit
	e.preventDefault();

// gather input fields
	let name = document.getElementsByName("name")[0].value;
	let position = document.getElementsByName("position")[0].value;
	let directLine = document.getElementsByName("direct_line")[0].value;
	let telephone = document.getElementsByName("telephone")[0].value;
	let mobile = document.getElementsByName("mobile")[0].value;

// replace render
	document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "Full Name" , name);
	document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "Position" , position );
	document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "Direct Line" , directLine );
	document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "Telephone" , telephone );
	// Mobile is done in the ELSE statement below

// replace code
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "Full Name" , name);
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "Position" , position );
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "Direct Line" , directLine );
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "Telephone" , telephone );
	// Mobile is done in the ELSE statement below

// Handle new design, if user doesn't supply a mobile number
	if(mobile=="") {
		// Delete web
		document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "rockpool.uk.com" , "" );
		document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "rockpool.uk.com" , "" );
		// Change M to W
		document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( ">M" , ">W" );
		document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "&gt;M" , "&gt;W" );
		// Add web
		document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "Mobile" , "rockpool.uk.com" );
		document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "Mobile" , "rockpool.uk.com" );
	} else {
		document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace( "Mobile" , mobile );
		document.getElementById('output').innerHTML = document.getElementById('output').innerHTML.replace( "Mobile" , mobile );
	}

// Change "Generate" to "Refresh"
	document.getElementById("generateBtn").style.display = 'none';
	document.getElementById("refreshBtn").style.display = 'block';

})



document.getElementById("output").onclick = function() {
	this.select();
	document.execCommand('copy');
	alert('Your HTML has been copied.');
}