function tz(){
   window.location.href='profile.html';
}


window.onload=function(){
	var i1 = 1,i2=1,i3=1;
 	var intervalid1;
 	var pic1=new Array("http://img1.gtimg.com/chinanba/pics/hv1/126/123/2234/145297341.jpg"
 		,"https://www.metro.us/sites/default/files/styles/normal_article/public/main/articles/a_celtics_nba_title_win_in_2019_slam_dunk.jpg",
 		"https://cdn.vox-cdn.com/thumbor/X5zcQBQ1r1hGtGDtsC2Ucdehj94=/0x0:4698x3132/1200x800/filters:focal(1599x687:2349x1437)/cdn.vox-cdn.com/uploads/chorus_image/image/58545495/usa_today_10482786.0.jpg");
 	var pic2=new Array("http://img1.gtimg.com/chinanba/pics/hv1/249/146/2250/146343729.jpg",
 		"https://amp.businessinsider.com/images/5b23d4fa1ae66220008b53fb-750-375.jpg",
 		"http://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbos.png");
 	var pic3=new Array("https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2017/09/GettyImages-841709832.jpg",
 		"https://trendsinternational.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/16247-boston-celtics---team-17-4x6.jpg",
 		"https://s3.amazonaws.com/kulturehub/uploads/2017/11/kyrie-irving-celtics-kulture-hub-770x385.jpg");
 	intervalid1 = setInterval(fun1, 1000*randomNum(1,5));
 	function fun1() {
 		if(i1==3)
 			i1=0;
 		document.getElementById("pic1").src=pic1[i1];
 		i1=i1+1;
 	}
 	intervalid2 = setInterval(fun2, 1000*randomNum(1,5));
 	function fun2() {
 		if(i2==3)
 			i2=0;
 		document.getElementById("pic2").src=pic2[i2];
 		i2=i2+1;
 	}
 	intervalid3 = setInterval(fun3, 1000*randomNum(1,5));
 	function fun3() {
 		if(i3==3)
 			i3=0;
 		document.getElementById("pic3").src=pic3[i3];
 		i3=i3+1;
 	}
 	var stopBtn1 = document.getElementById("stop1");
 	var stopBtn2 = document.getElementById("stop2");
 	var stopBtn3 = document.getElementById("stop3");
 	stopBtn1.onclick = function() {
		if (stopBtn1.value == "Stop") {
			stop(1);
		} else {
			start(1);
		}
	}
	stopBtn2.onclick = function() {
		if (stopBtn2.value == "Stop") {
			stop(2);
		} else {
			start(2);
		}
	}
	stopBtn3.onclick = function() {
		if (stopBtn3.value == "Stop") {
			stop(3);
		} else {
			start(3);
		}
	}

	function stop(num) {
		if(num==1){
			clearInterval(intervalid1);
			document.getElementById("stop1").value="Start";
		}
		else if(num==2){
			clearInterval(intervalid2);
			document.getElementById("stop2").value="Start";
		}
		else if(num==3){
			clearInterval(intervalid3);
			document.getElementById("stop3").value="Start";
		}
	}

	function start(num) {
		if(num==1){
			intervalid1 = setInterval(fun1, 1000*randomNum(1,5));
			document.getElementById("stop1").value="Stop";
		}
		else if(num==2){
			intervalid2 = setInterval(fun2, 1000*randomNum(1,5));
			document.getElementById("stop2").value="Stop";
		}
		else if(num==3){
			intervalid3 = setInterval(fun3, 1000*randomNum(1,5));
			document.getElementById("stop3").value="Stop";
		}
	}
		}

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

