// rohan bin delowar (301283416)
// date- 02/10/2023

(function () {

    function Start() {
        console.log("App Started...");


        // Confirmation before deleting business contacts
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();