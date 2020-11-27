
function validasi() {
	var Username = document.getElementById("Username").value;
	var Email = document.getElementById("Email").value;
	var Jam = document.getElementById("jam").value;
	var Tujuan = document.getElementById("tujuan").value;
	var Tiket = document.getElementById("jmltiket").value;
    
    if (Username && Email && Jam && Tujuan  && Tiket ) {
		document.getElementById("form").innerHTML= "Username : " + nama + "<br>" +
		 "Email : " + Email + "<br>" + "Jam : " + jam+ "<br>" + "Tujuan: " +Tujuan + "<br>" +
		 "Jmltiket : " + Tiket + "<br><br>" + "Happy Traveling";
		return false;
	}else{
		alert("incomplate data,please fill in correctly!");
	}	
}