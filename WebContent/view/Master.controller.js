jQuery.sap.require("sap.m.MessageBox");
sap.ui.controller("ztest_app.view.Master", {
	
	
	pressNextPage: function(evt){
		var context = evt.getSource().getBindingContext();
		this.nav.to("Details",context);
		
	},
	
	pressGetMaterial:function(evt){
		//var context = evt.getSOurce.getBindingContext();
		this.call_ModelFile();
	},
	
	call_ModelFile:function(){
		
		var sample = $.sap.getModulePath("ztest_app","/model/sampleData.json");
		var oModel = new sap.ui.model.json.JSONModel(sample);
		
	
		
		var list = this.getView().byId("idList1");
		list.setModel(oModel);
		
	}

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ztest_app.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ztest_app.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ztest_app.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ztest_app.Master
*/
//	onExit: function() {
//
//	}

});