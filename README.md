# ajaxformsubmit
a mini framework to bind form and ajax submitting, including form check and post actions.

How to use:

1. Set name and id of the form
2. Set data-url of the submit button to the back PHP file
3. Import afs.js and also its requisition jquery
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="js/afs.js"></script>
4. Add the following scritps accordingly:
	$(function(){
		localStorage.isSubmiting = 0;
		$('#form-setusername input[type="submit"]').on("click", {
	        target: "#form-setusername",
	        afterpost: "afterpost",
	        beforepost: "beforepost",
	    }, ajaxFormSubmit);

	}); 
5. Fulfil the callback functions afterpost and beforepost. If no need just let them empty.

