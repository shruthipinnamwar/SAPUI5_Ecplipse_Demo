sap.ui.controller("ztest_app.view.Details",{
	backPress : function(event){
		
		var context = event.getSource().getBindingContext();
		if(!jQuery.device.is.phone){
			this.nav.back("Empty",context);
		}
		this.nav.back("Master",context)
		},
		
	
});