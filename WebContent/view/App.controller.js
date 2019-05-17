sap.ui.controller("ztest_app.view.App",{
	/**
	 * Navigates to next page
	 * @param {string} pageId the Id of necxt page
	 * context: the daya context to be applied to thenecxt page
	 */
	
	to:function(pageId, context){
		var app = this.getView().app;
		
		// load page on demand
		var master = ("Master" === pageId);
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "ztest_app.view."+pageId,
				type:"XML"
			});
			page.getController.nav = this;
			app.addPage(page,master);
			jQuery.sap.log.info("app controller > loaded page :" + pageId);
		}
		
		app.to(pageId);
		if(context){
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
			
		},
		
		back : function (pageId) {
			this.getView().app.backToPage(pageId);
		},
	
	
});