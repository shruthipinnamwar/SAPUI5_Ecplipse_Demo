sap.ui.jsview("ztest_app.view.App",{
	
	getControllerName: function () {
		return "ztest_app.view.App";
	},
	
	createContent: function(oController){
		
		this.setDisplayBlock(true);
		// create app
		this.app = new sap.m.SplitApp();
		//load the master page
		var master = sap.ui.xmlview("Master", "ztest_app.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master,true);
		
		//load the empty page
		
		var empty = sap.ui.xmlview("Empty","ztest_app.view.Empty");
		this.app.addPage(empty, false);
		
		return this.app;
	}
	
});