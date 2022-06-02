let loc1check = false;
let loc2check = false;


let loc1quest = document.querySelector('.loc1quest');
let loc2quest = document.querySelector('.loc2quest');
let loc3quest = document.querySelector('.loc3quest');
let loc1 = document.querySelector('.loc1');
let loc2 = document.querySelector('.loc2');
let loc21 = document.querySelector('.loc21');
let loc3 = document.querySelector('.loc3');
let loc31 = document.querySelector('.loc31');
let loc4 = document.querySelector('.loc4');
let loc41 = document.querySelector('.loc41');
let window1 = document.querySelector('.window1');
let window2 = document.querySelector('.window2');
let window3 = document.querySelector('.window3');
let text = document.querySelector('.text');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
let btn7 = document.querySelector('.btn7');
let btn8 = document.querySelector('.btn8');
let btn9 = document.querySelector('.btn9');
let btn10 = document.querySelector('.btn10');
let btn11 = document.querySelector('.btn11');
let btn12 = document.querySelector('.btn12');
let btn13 = document.querySelector('.btn13');
let btn14 = document.querySelector('.btn14');
let btn15 = document.querySelector('.btn15');
let btn16 = document.querySelector('.btn16');
let btn17 = document.querySelector('.btn17');
let btn18 = document.querySelector('.btn18');
let btn19 = document.querySelector('.btn19');
let btn20 = document.querySelector('.btn20');
let btn21 = document.querySelector('.btn21');
let boss = document.querySelector('.boss');
let end = document.querySelector('.end');
let start = document.querySelector('.start');
let score1 = document.querySelector('.score1');

let scorediv = document.querySelector('.scorediv');
let scorediv1 = document.querySelector('.scorediv1');
let buff = document.querySelector('.buff');
let buff1 = document.querySelector('.buff1');
let game = document.querySelector('.game');

start.onclick = function(){
	loc1.style.display = 'block';
	start.style.display = 'none';
}
loc1quest.onclick = function(){
	btn.style.display = 'block';
	text.innerHTML = 'Гид: Здарова, тебе нужна работа? Ну тогда поможешь мне вернуть долг рыбаку, я задолжал ему призма-какую-то там рыбу, короче, вылови мне ведро фиолетовой рыбёшки и я награжу тебя'
}
btn.onclick = function(){
	loc1.style.display = 'none';
	loc2.style.display = 'block';
	btn.style.display = 'none';
}
btn1.onclick = function(){
	loc2.style.display = 'none';
	loc21.style.display = 'block'
	btn1.style.display = 'none';
}
btn2.onclick = function(){
	scorediv.style.display = 'block';
	btn2.style.display = 'none';
	window2.style.display = 'none';
	int1 = setInterval(createElem , 500);
	function getRandom(arg){
        let rand = Math.random() * arg;
        let round = Math.round(rand);
        return round;
    }
    let images = ['fish.png','fish1.png','fish2.png']
    let scorefish = 0;
    let x = 0;
    
    function createElem(){
    	let elem = document.createElement('div');
    	document.body.appendChild(elem);
    	elem.classList.add('fish');
    	elem.style.top = getRandom(800) + 'px';
    	let random_img = getRandom(2);
    	elem.style.backgroundImage = 'url('+images[random_img]+ ')';

    	if(random_img == 1){
            elem.name = 'good'; 
        }else if(random_img == 2){
        	elem.name = 'bad';
        }else if(random_img == 0){
        	elem.name = 'bad';
        } 

    	elem.onclick = function(){
                    elem.style.display = 'none';
                    if(elem.name == 'good'){
                        scorefish = scorefish + 1;
                        score1.innerHTML = scorefish;
                    }else if(elem.name == 'bad'){

                    }
                    if (scorefish == 10){
                    	clearInterval(int1);
                    	scorediv.style.display = 'none';
                    	btn3.style.display = 'block';
                    	window2.style.display = 'block';
                    	text1.innerHTML = 'Кто-то: Здесь мы закончили, возвращайся в Гиду.'
                    }
        }
        setTimeout(move, 500);
        function move(){
        	elem.style.left =  200 +'px';
        }
        setTimeout(move1, 500);
        function move1(){
        	elem.style.left =  400 +'px';
        }
        setTimeout(move2, 1000);
        function move2(){
        	elem.style.left =  600 +'px';
        }
        setTimeout(move3, 1500);
        function move3(){
        	elem.style.left =  800 +'px';
        }
        setTimeout(move4, 2000);
        function move4(){
        	elem.style.left =  1000 +'px';
        }
        setTimeout(move5, 2500);
        function move5(){
        	elem.style.left =  1200 +'px';
        }
        setTimeout(move6, 3000);
        function move6(){
        	elem.style.left =  1400 +'px';
        }
        setTimeout(move7, 3500);
        function move7(){
        	elem.style.left =  1600 +'px';
        }
        setTimeout(move8, 4000);
        function move8(){
        	elem.style.left =  1800 +'px';
        }
        setTimeout(move9, 4500);
        function move9(){
        	elem.style.left =  1900 +'px';
        }
        setTimeout(move10, 4780);
        function move10(){
        	elem.remove();
        }
    }
}

btn3.onclick = function(){
	loc21.style.display = 'none';
	loc1.style.display = 'block';
	loc1quest.style.display = 'none';
	text.innerHTML = 'Гид: Ты уже вернулся? Ну, держи, как и обещал';
	btn3.style.display = 'none';
	btn4.style.display = 'block';
}
btn4.onclick = function(){
	btn4.style.display = 'none';
	buff.style.display = 'block';
	loc1check = true;
	text.innerHTML = 'Кто-то: Ого, он дал тебе меч, теперь мы сможем спуститься в данж.';
}
btn5.onclick = function(){
	loc3.style.display = 'none';
	loc31.style.display = 'block';
	btn5.style.display = 'none';
}
btn6.onclick = function(){
		scorediv1.style.display = 'block';
		window3.style.display = 'none';
		btn6.style.display = 'none';
		let count = 2;
		let kk = document.querySelector('.kk');
		let box = document.querySelector('.box');
		let box1 = document.querySelector('.box1');
		let box2 = document.querySelector('.box2');
		let box3 = document.querySelector('.box3');
		let box4 = document.querySelector('.box4');
		let box5 = document.querySelector('.box5');
		let img = document.querySelector('.img');
		let img1 = document.querySelector('.img1');
		let img2 = document.querySelector('.img2');
		let img3 = document.querySelector('.img3');
		let img4 = document.querySelector('.img4');
		let img5 = document.querySelector('.img5');
		let staff = 0;
		img.style.display = 'block';
		img1.style.display = 'block';
		img2.style.display = 'block';
		img3.style.display = 'block';
		img4.style.display = 'block';
		img5.style.display = 'block';
		setTimeout(move1, 2000);
		function move1(){
			box.style.left = 1260 + 'px';
			box.style.top = 520 + 'px';
			box1.style.left = 780 + 'px';
			box1.style.top = 520 + 'px';
			box2.style.left = 300 + 'px';
			box2.style.top = 220 + 'px';
			box3.style.left = 1260 + 'px';
			box3.style.top = 220 + 'px';
			box4.style.left = 780 + 'px';
			box4.style.top = 220 + 'px';
			box5.style.left = 300 + 'px';
			box5.style.top = 520 + 'px';

			img5.style.display = 'none';
			img4.style.display = 'none';
			img3.style.display = 'none';
			img2.style.display = 'none';
			img1.style.display = 'none';
			img.style.display = 'none';

			box.onclick = function(){
				staff = staff + 1;
				kk.innerHTML = count;
				img.style.display = 'block';
				if (staff == 3) {
					window3.style.display = 'block';
					btn7.style.display = 'block';
					scorediv1.style.display = 'none';
					text2.innerHTML = 'Рунный маг: Окей, забирай свой мусор и не спускайся больше сюда.'
				}
			}

			box1.onclick = function(){
				count = count - 1;
				kk.innerHTML = count;
				img1.style.display = 'block';
				alert('НЕА');
				if (count == 0){
					alert('ТЫ ПРОИГРАЛ')
					count = 'не осталось)'
					kk.innerHTML = count;
					box5.style.boxShadow = '0px 0px 1000px #c20e53';
					img5.style.display = 'block';
					img4.style.display = 'none';
					img3.style.display = 'none';
					img2.style.display = 'block';
					img1.style.display = 'none';
					img.style.display = 'block';
					loc31.style.display = 'none';
					game.style.display = 'block';
				}
			}

			box2.onclick = function(){
				staff = staff + 1;
				kk.innerHTML = count;
				img2.style.display = 'block';
				if (staff == 3) {
					window3.style.display = 'block';
					btn7.style.display = 'block';
				}
			}

			box3.onclick = function(){
				count = count - 1;
				kk.innerHTML = count;
				img3.style.display = 'block';
				alert('НЕА');
				if (count == 0){
					alert('ТЫ ПРОИГРАЛ')
					count = 'не осталось)'
					kk.innerHTML = count;
					box5.style.boxShadow = '0px 0px 1000px #c20e53';
					img5.style.display = 'block';
					img4.style.display = 'none';
					img3.style.display = 'none';
					img2.style.display = 'block';
					img1.style.display = 'none';
					img.style.display = 'block';
					loc31.style.display = 'none';
					game.style.display = 'block';
				}
			}

			box4.onclick = function(){
				count = count - 1;
				kk.innerHTML = count;
				img4.style.display = 'block';
				alert('НЕА');
				if (count == 0){
					alert('ТЫ ПРОИГРАЛ')
					count = 'не осталось)'
					kk.innerHTML = count;
					box5.style.boxShadow = '0px 0px 1000px #c20e53';
					img5.style.display = 'block';
					img4.style.display = 'none';
					img3.style.display = 'none';
					img2.style.display = 'block';
					img1.style.display = 'none';
					img.style.display = 'block';
					loc31.style.display = 'none';
					game.style.display = 'block';
				}
			}

			box5.onclick = function(){
				staff = staff + 1;
				kk.innerHTML = count;
				img5.style.display = 'block';
				if (staff == 3) {
					window3.style.display = 'block';
					btn7.style.display = 'block';
				}
			}
		}		
}
btn7.onclick = function(){
	loc31.style.display = 'none';
	loc1.style.display = 'block';
	buff1.style.display = 'block';
	loc2check = true;
	loc2quest.style.display = 'none';
	text.innerHTML = 'Кто-то: Воу, какой ты солидный во всей этой экипе, думаю теперь ты готов пойти на свой первый рейд босса.'
}
loc2quest.onclick = function(){
	if (loc1check == true){
		loc1.style.display = 'none';
		loc3.style.display = 'block';
	}else{
		alert('Тебе нужно оружие')
	}	
}
loc3quest.onclick = function(){
	if (loc1check == true && loc2check == true){
		loc1.style.display = 'none';
		loc4.style.display = 'block';
	}else{
		alert('Тебе нужно оружие и броня')
	}
}
btn8.onclick = function(){
	loc4.style.display = 'none';
	loc41.style.display = 'block';
}
btn9.onclick = function(){
	text3.innerHTML = '???: Кого?'
	btn9.style.display = 'none';
	btn10.style.display = 'block';
}
btn10.onclick = function(){
	text3.innerHTML = '???: ...'
	btn10.style.display = 'none';
	btn11.style.display = 'block';
}
btn11.onclick = function(){
	text3.innerHTML = '???: Пощады...'
	btn11.style.display = 'none';
	btn12.style.display = 'block';
}
btn12.onclick = function(){
	text3.innerHTML = '???: Я хочу пощады.'
	btn12.style.display = 'none';
	btn13.style.display = 'block';
}
btn13.onclick = function(){
	boss.style.backgroundImage = 'url(boss1.webp)'
	text3.innerHTML = 'МОЗГ КТУЛХУ: А как на счёт викторины от МОЗГА КТУЛХУ? :3'
	btn13.style.display = 'none';
	btn14.style.display = 'block';
}
btn14.onclick = function(){
	text3.innerHTML = 'МОЗГ КТУЛХУ: Н У  П О Ж А Л У Й С Т А'
	btn14.style.display = 'none';
	btn15.style.display = 'block';
}
btn15.onclick = function(){
	boss.style.backgroundImage = 'url(boss.webp)'
	text3.innerHTML = 'МОЗГ КТУЛХУ: Ну тогда. ПЕРВЫЙ ВОПРОС: СкОлЬкО вСеГо ДнЕй В нЕдЕлЕ?'
	btn15.style.display = 'none';
	btn16.style.display = 'block';
}
btn16.onclick = function(){
	text3.innerHTML = 'МОЗГ КТУЛХУ: ОТЛИЧНО! Следующий вопрос: КаКиЕ лИнЗы НоСиТ гЛаЗ кТулХу?';
	btn16.style.display = 'none';
	btn17.style.display = 'block';
	boss.style.opacity = 90 + '%';
}
btn17.onclick = function(){
	text3.innerHTML = 'МОЗГ КТУЛХУ: СУПЕР! Следующий вопрос: П о Ч е М у К р И м З о Н с Т р А ш Н е Е п О р Ч и?'
	btn17.style.display = 'none';
	btn18.style.display = 'block';
	boss.style.opacity = 70 + '%';
}
btn18.onclick = function(){
	text3.innerHTML = 'МОЗГ КТУЛХУ: з а м е ч а т е л ь н о! с л е д у ю щ и й в о п р о с: П о Ч е М у .....?'
	btn18.style.display = 'none';
	btn19.style.display = 'block';
	boss.style.opacity = 30 + '%';
}
btn19.onclick = function(){
	text3.innerHTML = 'Пока вы рассматривали локацию, мозг ктулху улетел'
	btn19.style.display = 'none';
	btn20.style.display = 'block';
	boss.style.opacity = 0 + '%';
}
btn20.onclick = function(){
	text3.innerHTML = 'Кто-то: Да уж, думаю на этом мы и закончим.'
	btn20.style.display = 'none';
	btn21.style.display = 'block';
}
btn21.onclick = function(){
	loc41.style.display = 'none';
	end.style.display = 'block';
}