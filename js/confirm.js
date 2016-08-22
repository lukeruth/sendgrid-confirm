function confirmModal() {
	$("#send_campaign").on("click", function(e) {
		return confirm("Did you mean to hit Send?");
	});
}

confirmModal();
