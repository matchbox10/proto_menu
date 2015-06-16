# proto_menu
jQuery Menu to add to your prototype

Test Data:

    <script>
	
    $(document).ready(function() {
		//List of links to display 
		 var items = [{name:"Hello",url:"http://www.hello.com"},
		 		{name:"Marks",url:"http://www.mark.com"}];
		
		//send list to proto_menu and create menu
  		proto(items);
		
	});
    
    </script>