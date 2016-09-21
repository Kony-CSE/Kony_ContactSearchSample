function searchContacts()
{	
	var arrayContacts = [];
	var contacts =[];
	var iterable_element; 
	
	//frmContacts.lblLine.isVisible = true;
	var searchText =  frmStart.textbox268508228929.text;
	searchText = searchText.trim();	
		if(searchText != "")
		{		
			contacts.push({				//to show upperline of first row of segment
					"lblContacts": "",
					"lblPhoneno": ""				
				});  	
			
			try{
			arrayContacts = kony.contact.find(searchText, true);
			alert("arrayContacts"+arrayContacts.length);
			kony.print("pp contacts are..."+JSON.stringify(arrayContacts));	
			}catch(e){	
			}
			if(arrayContacts == null || arrayContacts == "" || arrayContacts == undefined )
			{	
				showAlert("There are currently no contacts available with the entered search text on this device.", constants.ALERT_TYPE_INFO, getInternationalizingCurtLangValue("BTN_OKAY"), "", "TITLE_INFOMESSAGE", null);
				frmStart.seg1.setData([]);
			}else{
			    for (iterable_element in arrayContacts) {   	
					try{
					alert("@@ arrayContacts"+arrayContacts[iterable_element].phone +" length "+arrayContacts[iterable_element].phone.length);
					for (var index = 0; index < arrayContacts[iterable_element].phone.length; index++) {
						contacts.push({
							"lblContacts": arrayContacts[iterable_element].firstname,
							"lblPhoneno": arrayContacts[iterable_element].phone[index].number				
							});    
					}
			    	}catch(e){} 
		    	}
			}
		}
}
