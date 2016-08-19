function confirmModal() {
	$("#send_campaign").on("click", function(e) {
		return confirm("Did you meant to hit Send?");
	});
}

confirmModal();