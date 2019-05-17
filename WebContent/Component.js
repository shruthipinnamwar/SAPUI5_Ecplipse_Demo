jQuery.sap.declare("ztest_app.Component");
sap.ui.core.UIComponent.extend("ztest_app.Component",{
	
	metadata:{
		stereotype:"component",
		"abstract":true,
		version:"1.0",
		library:"ztest_app",
		includes:[ "css/Styles.css" ],
		dependencies:{
			libs :["sap.m",
					"sap.ui.commons",
					"sap.ui.ux3",
					"sap.ui.table",
					"sap.ui.layout"],
			library:"sap.ui.core",
		},
	},
	
	createContent: function(){
		var oView = sap.ui.view({
			id : "app",
			viewName : "ztest_app.view.App",
			type:"JS",
			viewData: { component : this}
		});
		
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone :jQuery.device.is.phone,
			listMode :(jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel,"device");
		
		//done
		return oView;
	}
	
	
})