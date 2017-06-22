import Vue from 'vue';
import Vuex from 'vuex';

import Router from '../router';

function rnd(m,n){
	return parseInt(m+Math.random()*(n-m+1));
}

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		mode:'loop',			//播放模式
		isList:false,		//播放页歌曲列表显隐
		isHomeList:true,	//播放页歌曲列表显隐
		isSide:false,		//主页侧边显隐
		isStart:true,		//是否播放
		isLrc:false,			//是否切换到歌词
		isShare:false,		//分享显隐
		curSong:{			//当前歌曲信息
			title:'青花瓷',
			author:'周杰伦',
			id:410316,
			imgId:33021,
			album:'我很忙'
		},
		songList:[			//歌曲列表
			{			
				title:'安和桥',
				author:'宋冬野',
				id:5002687,
				imgId:436025,
				album:'安和桥北'
			},
			{
				title:'青花瓷',
				author:'周杰伦',
				id:410316,
				imgId:33021,
				album:'我很忙'
			},
			{			
				title:'红尘客栈',
				author:'周杰伦',
				id:5177680,
				imgId:194021,
				album:'十二新作'
			},
			{			
				title:'流年',
				author:'王菲',
				id:1253916,
				imgId:104072,
				album:'<span class="c_tx_highlight">王菲</span>'
			}
		],
		curLrc:[],			//当前歌词
		curTime:0,			//歌曲当前播放时长
		allTime:0,			//歌曲总播放时长
		curVolume:0.8		//音量控制
	},
	mutations:{
		resetCur(state,item){
			state.curSong=item;
		},
		lrcTab(state){
			state.isLrc=!state.isLrc;
		},
		updateTime(state,time){
			state.curTime=time;
		},
		getAllTime(state,time){
			state.allTime=time;
		},
		ctrl(state){
			state.isStart=!state.isStart;
		},
		changeVolume(state,volume){
			state.curVolume=volume;
		},
		changeProgress(state,progress){
			state.curTime=state.allTime*progress;
		},
		songCtrl(state,info){
			if(info == 'stop'){
				state.isStart=false;
			}else if(info == 'start'){
				state.isStart=true;
			}
		},
		side(state,info){
			if(info == 'show'){
				state.isSide=true;
			}else if(info == 'hide'){
				state.isSide=false;
			}
		},
		songListShow(state,info){
			if(info == 'show'){
				state.isList=true;
			}else if(info == 'hide'){
				state.isList=false;
			}
		},
		shareShow(state,info){
			if(info == 'show'){
				state.isShare=true;
			}else if(info == 'hide'){
				state.isShare=false;
			}
		},
		delSong(state,index){
			if(index == 'all'){
				state.songList=[];
				state.surSong={
					title:'',
					author:'',
					id:'',
					imgId:''
				};
			}else{
				state.songList.splice(index,1);
			}
		},
		addSong(state,item){
			state.songList.unshift(item);
		},
		chooseMode(state){
			if(state.mode == 'loop'){
				state.mode='random';
			}else if(state.mode == 'random'){
				state.mode='one';
			}else if(state.mode == 'one'){
				state.mode='loop';
			}
		},
		tabSong(state,info){
			if((typeof info) == 'number'){
				state.curSong=state.songList[info];
			}else{
				var iNow;
				var l=state.songList.length;
				for(var i=0;i<l;i++){
					if(state.songList[i].id == state.curSong.id){
						iNow=i;
					}
				}
				if(state.mode == 'loop'){
					if(info == 'next'){
						iNow++;
						if(iNow>l-1){
							iNow=0;
						}
					}else if(info == 'prev'){
						iNow--;
						if(iNow<0){
							iNow=l-1;
						}
					}
					
				}else if(state.mode == 'random'){
					
					audio.removeAttribute('loop');
					var iRandom=rnd(0,state.songList.length-1);
					while(iRandom == iNow){
						iRandom=rnd(0,state.songList.length-1);
					}
					iNow=iRandom;
				}else if(state.mode == 'one'){
				}
				
				state.curSong=state.songList[iNow];
			}
		},
		changeHomeList(state){
			state.isHomeList=!state.isHomeList;
		}
	},
	actions:{
		chooseSong({state,commit}){
			if(state.mode == 'loop'){
				commit('tabSong','next');
			}else if(state.mode == 'random'){
				var iRandom=rnd(0,state.songList.length-1);
				var iNow;
				var l=state.songList.length;
				for(var i=0;i<l;i++){
					if(state.songList[i].id == state.curSong.id){
						iNow=i;
					}
				}
				while(iRandom == iNow){
					iRandom=rnd(0,state.songList.length-1);
				}
				commit('tabSong',iRandom);
			}else if(state.mode == 'one'){
				
			}
		},
		addSearchSong({state,commit},item){
			var isExist=false;
			var iNow;
			var l=state.songList.length;
			for(var i=0;i<l;i++){
				if(state.songList[i].id == item.id){
					isExist=true;
					iNow=i;
					break;
				}
			}
			if(isExist){
				state.songList.splice(iNow,1);
			}
			commit('addSong',item)
			commit('resetCur',item);
			Router.push('/play');
		}
	}




});


