(function (doc, win) {
	var docEle = doc.documentElement,
		isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
		dpr=Math.min(win.devicePixelRatio, 3);
	scale = 1 / dpr,

		resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
	docEle.dataset.dpr = dpr;

	var metaEle = doc.createElement('meta');
	metaEle.name = 'viewport';
	metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
	docEle.firstElementChild.appendChild(metaEle);

	var recalCulate = function(){
		var width = docEle.clientWidth;
		if (width / dpr > 640) {
			width = 640 * dpr;
		}
		docEle.style.fontSize = width / 7.5 + 'px';
	};

	recalCulate()
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
