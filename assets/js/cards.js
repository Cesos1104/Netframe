//function
function showmodal(boton){
	switch(boton){
		case "BtnUNAM":
		var modal = document.getElementById('UNAM');
		var span = document.getElementsByClassName("close")[0];	
		break;
		case "BtnIPN":
		var modal = document.getElementById('IPN');
		var span = document.getElementsByClassName("close")[1];	
		break;
		case "BtnCREDITO":
		var modal = document.getElementById('CREDITO');
		var span = document.getElementsByClassName("close")[2];	
		break;
		case "BtnSALUD":
		var modal = document.getElementById('SALUD');
		var span = document.getElementsByClassName("close")[3];	
		break;
		case "BtnTELCEL":
		var modal = document.getElementById('TELCEL');
		var span = document.getElementsByClassName("close")[4];	
		break;
		case "BtnMOVISTAR":
		var modal = document.getElementById('MOVISTAR');
		var span = document.getElementsByClassName("close")[5];	
		break;
		case "BtnISSTE":
		var modal = document.getElementById('ISSTE');
		var span = document.getElementsByClassName("close")[6];	
		break;
		case "BtnBRIDGE":
		var modal = document.getElementById('BRIDGE');
		var span = document.getElementsByClassName("close")[7];	
		break;
		default:
        text = "I have never heard of that fruit...";
	}
	modal.style.display = "block";
	// Get the <span> element that closes the modal
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
