

export function toggleStylePanel(text){
	return {type:text}
};


var toggleSectionListPanelTimes=true


export function toggleSectionListPanel(){
            toggleSectionListPanelTimes=!toggleSectionListPanelTimes
	return {type:toggleSectionListPanelTimes?'SHOWSECTIONLISTPANEL':'HIDDENSECTIONLISTPANEL'}
}

export function addCard(){
	return {type:'ADDCARD_0'}
}

export function changeModeListItem(item){
	return {type:'CHANGE_MODULIST_ITEM',item:item}
}

// export function sortModeListItem(oldIndex,newIndex){
// 	return {type:'SORT_MODULIST_ITEM',oldIndex,newIndex}
// }
export function sortModeListItem(ids){
	return {type:'SORT_MODULIST_ITEM',ids}
}

export function showChangeImageDialog(callback){
	return {
		type:'SHOW_IMAGE_DIALOG',
		callback
	}
}
export function hideChangeImageDialog(){
	return {
		type:'HIDE_IMAGE_DIALOG'
	}
}

export function toggleMainMenuShow(){
	return {
		type:'TOGGLEMAINMENUSHOW'
	}
}

// export function change

