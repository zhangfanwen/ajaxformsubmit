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

====== sample codes =======

<form name="form-setusername" id="form-setusername" >
    <input type="text" id="username" name="username" rows="1" />
    <span id="text_username"></span>
    <input type="submit" name="submit" id="submit" data-url="change_userinfo.php">
 </form>

<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/afs.js"></script>
<script>

	function beforepost(targetform) {
        if ($('#username').val().length==0) {
            alertMessage("用户名不能为空","error");
            return false;
        }		
		return true;
	}
	function afterpost(retdata) {
		$('#text_username').html(retdata.data.username);
	 }

	$(function(){
		localStorage.isSubmiting = 0;
		$('#form-setusername input[type="submit"]').on("click", {
	        target: "#form-setusername",
	        afterpost: "afterpost",
	        beforepost: "beforepost",
	    }, ajaxFormSubmit);

	});  
	
</script>	