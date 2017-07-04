import React from 'react';

import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from './components/Home'

// import './reset.scss'




import  reducer from './reducer'


const  __INITIAL_STATE__={
	"frontend": {
		"mainMenuTopMenu": {},
		"stylePanel": 0,
		"leftPanel": 0,
		"sectionListPanel": "hidden",
		"widgets": {
			"changeImageDialog": {
				"display": false,
				"labIndex": 0
			}
		}
	},
	"data": {
		"past": [],
		"present": {
			"them": 0,
			"style": 0,
			"modelList": [{
				"type": 'ContentItemIndex',
				"title": "首页",
				"sort_index": 0,
				"data": {},
				"id": "580645lsvv8enrqdv0n10v0a4i"
			}, {
				"type": 'ContentItemList',
				"title": "团队资料工工工工",
				"sub_title": "我们拥有最顶级的团队",
				"sort_index": 1,
				"data": [{
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "http://nzr2ybsda.qnssl.com/images/29853/FjheMtW-84wzw5G_VjPK62PA3N4R.jpg?imageMogr2/strip/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg",
					"id": "f0ajku771f14603j1ep2wklnmi",
					"type": 3,
					"video_src": "http://v.youku.com/v_show/id_XNDg1Mzg2OTQ0.html?from=s1.8-1-1.2&spm=a2h0k.8191407.0.0"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "http://nzr2ybsda.qnssl.com/images/29853/FjheMtW-84wzw5G_VjPK62PA3N4R.jpg?imageMogr2/strip/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg",
					"id": "oblc62s9v0ozneczz7nndbo6r"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "http://nzr2ybsda.qnssl.com/images/29853/FjheMtW-84wzw5G_VjPK62PA3N4R.jpg?imageMogr2/strip/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg",
					"id": "65avvady5hjh7dnjn07umobt9"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "http://nzr2ybsda.qnssl.com/images/29853/FjheMtW-84wzw5G_VjPK62PA3N4R.jpg?imageMogr2/strip/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg",
					"id": "n5fftfu7ono94gy9d8g58kt9"
				}],
				"id": "bsyfcg2x9aytp2kwswskk2o6r"
			}, {
				"type": 'ContentItemLayout1',
				"title": "团队资料cccccc",
				"sub_title": "我们拥有最顶级的团队",
				"sort_index": 11,
				"data": [{
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "//assets.strikingly.com/static/icons/delicate/35.png",
					"id": "f0ajku771f1x4603j1ep2wklnmi",
					"type": 3,
					"video_src": "http://v.youku.com/v_show/id_XNDg1Mzg2OTQ0.html?from=s1.8-1-1.2&spm=a2h0k.8191407.0.0"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "http://nzr2ybsda.qnssl.com/images/29853/FjheMtW-84wzw5G_VjPK62PA3N4R.jpg?imageMogr2/strip/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg",
					"id": "oblc62s9xv0ozneczz7nndbo6r"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "http://nzr2ybsda.qnssl.com/images/29853/FjheMtW-84wzw5G_VjPK62PA3N4R.jpg?imageMogr2/strip/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg",
					"id": "65avvady5xhjh7dnjn07umobt9"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "//assets.strikingly.com/static/icons/delicate/38.png",
					"id": "n5fftfu7ono94xgy9d8g58kt9"
				}],
				"id": "bsyfcg2bx9aydsftp2kwswskk2o6rxxr"
			}, {
				"type": 'ContentItemGallery',
				"title": "团队资料cccccc",
				"sub_title": "我们拥有最顶级的团队",
				"sort_index": 12,
				"data": [{
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "//assets.strikingly.com/static/icons/delicate/35.png",
					"id": "xf0ajku771f14603j1ep2wklnmi",
					"type": 3,
					"video_src": "http://v.youku.com/v_show/id_XNDg1Mzg2OTQ0.html?from=s1.8-1-1.2&spm=a2h0k.8191407.0.0"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "//assets.strikingly.com/static/icons/delicate/36.png",
					"id": "soblc62s9v0ozneczz7nndbo6r"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "//assets.strikingly.com/static/icons/delicate/37.png",
					"id": "s65avvady5hjh7dnjn07umobt9"
				}, {
					"title": "标题文本",
					"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
					"img_src": "//assets.strikingly.com/static/icons/delicate/38.png",
					"id": "sn5fftfu7ono94gy9d8g58kt9"
				}],
				"id": "sbsyfcg2x9aydsftp2kwswskkdsa2o6rxxr"
			}, {
				"type": 4,
				"title": "联系方式",
				"sort_index": 4,
				"data": {},
				"id": "487vv6nms5fts6u82acpz7u8fr"
			}]
		},
		"future": [],
		"history": {
			"past": [],
			"present": {
				"them": 0,
				"style": 0,
				"modelList": [{
					"type": 0,
					"title": "首页",
					"sort_index": 0,
					"data": {},
					"id": "580645lsvv8enrqdv0n10v0a4i"
				}, {
					"type": 1,
					"title": "团队资料ccccc",
					"sub_title": "我们拥有最顶级的团队",
					"sort_index": 1,
					"data": [{
						"title": "标题文本",
						"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
						"img_src": "//assets.strikingly.com/static/icons/delicate/35.png",
						"id": "f0ajku771f14603j1ep2wklnmi",
						"type": 3,
						"video_src": "http://v.youku.com/v_show/id_XNDg1Mzg2OTQ0.html?from=s1.8-1-1.2&spm=a2h0k.8191407.0.0"
					}, {
						"title": "标题文本",
						"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
						"img_src": "//assets.strikingly.com/static/icons/delicate/36.png",
						"id": "oblc62s9v0ozneczz7nndbo6r"
					}, {
						"title": "标题文本",
						"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
						"img_src": "//assets.strikingly.com/static/icons/delicate/37.png",
						"id": "65avvady5hjh7dnjn07umobt9"
					}, {
						"title": "标题文本",
						"sub_title": "一行简单的描述文字。夏天的飞鸟，飞到我的窗前唱歌，又飞去了。秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。",
						"img_src": "//assets.strikingly.com/static/icons/delicate/38.png",
						"id": "n5fftfu7ono94gy9d8g58kt9"
					}],
					"id": "bsyfcg2x9aytp2kwswskk2o6r"
				}, {
					"type": 2,
					"title": "相册",
					"sort_index": 2,
					"data": {},
					"id": "wp9panobbp6emub8zwso47vi"
				}, {
					"type": 3,
					"title": "图片展示",
					"sort_index": 3,
					"data": {},
					"id": "324520ulhgvxylfk3wq5pcik9"
				}, {
					"type": 4,
					"title": "联系方式",
					"sort_index": 4,
					"data": {},
					"id": "487vv6nms5fts6u82acpz7u8fr"
				}]
			},
			"future": []
		}
	}
}

const initialState = __INITIAL_STATE__


const  store = createStore(reducer,initialState);

// console.log(store.getState())

// console.log(JSON.stringify(store.getState()))








const app = document.createElement('div')
document.body.className='edit locale-zh-CN product-sxl'
document.body.id='sites'
app.setAttribute('style','min-height: 100%;position: relative;')
document.body.appendChild(app)
// const app document.body



render(<Provider store={store}>
    <Home miniBarClick={()=>store.dispatch({type:'HIDE'})&&console.log('click'+(+new Date))}  asideClass={store.getState()} />
</Provider>,app)


