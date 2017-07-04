import { combineReducers } from 'redux';

let tree={
	data:{
		them:0,
		style:0,
		modelList:[{
			type:0,
			name:'首页',
			index:0,
			data:{}
		}]
	},
	frontend:{
		mainMenuTopMenu:{
			overview:true,
	                 	save:true,
	                 	setting:true
		},
		leftPanel:0,
		stylePanel:0,
		widgets:{
			imageDialog:{
				display:false,
				labIndex:0,
				callback:(url)=>url
			}
		},
		mainMenuShow:true
	}
}
var toggleThem=function(state=0,action){
	return 0
}
var toggleStyle=function(state=0,action){
	return 0
}
var getModeList=function(state=[{
					type:0,
					title:'首页',
					sort_index:0,
					data:{},
					id:Math.random().toString(36).substring(2)
					},{
					type:1,
					title:'团队资料',
					sub_title:'我们拥有最顶级的团队',
					sort_index:1,
					data:[{
						title:'标题文本',
						sub_title:'一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。',
						img_src:'//assets.strikingly.com/static/icons/delicate/35.png',
						id:Math.random().toString(36).substring(2),
						type:3,
						video_src:'http://v.youku.com/v_show/id_XNDg1Mzg2OTQ0.html?from=s1.8-1-1.2&spm=a2h0k.8191407.0.0'
					},{
						title:'标题文本',
						sub_title:'一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。',
						img_src:'//assets.strikingly.com/static/icons/delicate/36.png',
						id:Math.random().toString(36).substring(2)
					},{
						title:'标题文本',
						sub_title:'一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。',
						img_src:'//assets.strikingly.com/static/icons/delicate/37.png',
						id:Math.random().toString(36).substring(2)
					},{
						title:'标题文本',
						sub_title:'一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。',
						img_src:'//assets.strikingly.com/static/icons/delicate/38.png',
						id:Math.random().toString(36).substring(2)
					}],
					id:Math.random().toString(36).substring(2)
					},{
					type:2,
					title:'相册',
					sort_index:2,
					data:{},
					id:Math.random().toString(36).substring(2)
					},{
					type:3,
					title:'图片展示',
					sort_index:3,
					data:{},
					id:Math.random().toString(36).substring(2)
					},{
					type:4,
					title:'联系方式',
					sort_index:4,
					data:{},
					id:Math.random().toString(36).substring(2)
					}],action){
	switch(action.type){
		case 'ADDCARD_0':
			return [...state,{
					type:Math.floor(Math.random()*5),
					title:'新添加',
					index:state.length,
					data:{},
					id:Math.random().toString(36).substring(2)
					}]
		case 'CHANGE_MODULIST_ITEM':
			// return [...state]
			console.log(state)
			let result =  state.map(function(item){
				if(item.id===action.item.id){
					console.log('mnem asdfdsafsaf sadfdsafdsf')
					return action.item
					// return Object.assign(item, action.item)
				}
				return item 
			})
			console.log(result)
			return result
			// return Object.assign([], state).push({
			// 		type:0,
			// 		title:'新添加',
			// 		index:state.length,
			// 		data:{}
			// 		})
		case 'SORT_MODULIST_ITEM':
			// console.log(action)
			// var result = [...state]
			// var oldObj=Object.assign({},result[action.oldIndex])
			// var newObj=Object.assign({},result[action.newIndex])
			// result[action.oldIndex]=newObj
			// result[action.newIndex]=oldObj
			// result.forEach(function(x,i){x.index=i;console.log(x.id)})


			// console.log(action.oldIndex)
			// result.splice(action.oldIndex,1)
			// return result


			var array=[]
			action.ids.forEach(function(x,i){
				state.forEach(function(y){
					if(x==y.id){
						y.sort_index=i
						array.push(y)
					}
				})
			})
			return array
			// return [...state].sort(function(a,b){
			// 	return action.ids.indexOf(a.id) > action.ids.indexOf(b.id)
			// })
		// case 'CHANGE_PAGE_CONTENT':
		// 	return state.map(function(x,i){

		// 	})
		default:
			return state
	}
	
}


var doMainMeunTopMenu=function(state={},action){
	return state
}



var toggleStylePanel=function(state=0,action){//stylePanel
      switch(action.type){
      	case 'MAINMENUPANEL':
      		return 0
      	case 'STYLEMENUPANEL':
      		return 1
      	case 'THEMMUNUPANEL':
      		return 2
      	default:
      		return 0
      }
}
var toggleLeftPanel=function(state=0,action){
	switch(action.type){
		case 'SHOWLEFTPANEL':
			return 0
		case 'HIDELEFTPANEL':
			return 1
		default:
			return 0
	}
}
var toggleSectionListPanel=function(state='hidden',action){
	switch(action.type){
		case 'SHOWSECTIONLISTPANEL':
			return 'show'
		case 'HIDDENSECTIONLISTPANEL':
			return 'hidden'
		default:
			return state
	}
}

var toggleChangeImageDialog=function(state,action){
	switch(action.type){
		case 'SHOW_IMAGE_DIALOG':
			return {
				display:true,
				labIndex:0,
				callback:action.callback
			}
		case 'HIDE_IMAGE_DIALOG':
			return {
				display:false,
				labIndex:0,
				callback:(url)=>url
			}
		default:
			return {
				display:false,
				labIndex:0,
				callback:(url)=>url
			}
	}
}
var toggleMainMenuShow=function(state=true,action){
	switch(action.type){
		case 'TOGGLEMAINMENUSHOW':
			return !state
		default:
			return true;
	}
}


import undoable, { distinctState } from 'redux-undo';


export default combineReducers({
	frontend:combineReducers({
		mainMenuTopMenu:doMainMeunTopMenu,
		stylePanel:toggleStylePanel,
		leftPanel:toggleLeftPanel,
		sectionListPanel:toggleSectionListPanel,
		widgets:combineReducers({
			changeImageDialog:toggleChangeImageDialog
		}),
		mainMenuShow:toggleMainMenuShow
	}),
	data:undoable(combineReducers({
				them:toggleThem,
				style:toggleStyle,
				modelList:getModeList
			}), { filter: distinctState() })
})


