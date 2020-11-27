function logout() {
	var yakin = confirm("Anda yakin ingin keluar?");
	if (yakin) {
		document.write("Anda berhasil keluar");
		window.location = "loginrita.html";
	} else {
		window.location = "halaman.html"
	}
}