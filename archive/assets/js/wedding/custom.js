function alwaysOpenModal() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

$(document).ready(function () {
    alwaysOpenModal();
});