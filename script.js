const audio_one = new Audio();
audio_one.src = 'audio/one.mp3';

const audio_two = new Audio();
audio_two.src = 'audio/two.mp3';

const audio_three = new Audio();
audio_three.src = 'audio/seven.mp3';

const audio_four = new Audio();
audio_four.src = 'audio/four.mp3';

const audio_five = new Audio();
audio_five.src = 'audio/five.mp3';

const audio_six = new Audio();
audio_six.src = 'audio/six.mp3';

const playButton = document.querySelectorAll('.section_three_play');

let playIcone = document.getElementById('fa-solid_one');
let playIcone_two = document.getElementById('fa-solid_two');
let playIcone_three = document.getElementById('fa-solid_three');
let playIcone_four = document.getElementById('fa-solid_four');
let playIcone_five = document.getElementById('fa-solid_five');
let playIcone_six = document.getElementById('fa-solid_six');

playButton[0].addEventListener('click',function(){
    audio_one.play()
    playIcone.classList.remove('fa-play');
    playIcone.classList.add('fa-pause');
    this.addEventListener('click',function(){
        audio_one.pause()
        playIcone.classList.remove('fa-pause');
        playIcone.classList.add('fa-play');
    })
})
playButton[1].addEventListener('click',function(){
    audio_two.play()
    playIcone_two.classList.remove('fa-play');
    playIcone_two.classList.add('fa-pause');
    this.addEventListener('click',function(){
        audio_two.pause()
        playIcone_two.classList.remove('fa-pause');
        playIcone_two.classList.add('fa-play');
    })
})
playButton[2].addEventListener('click',function(){
    audio_three.play()
    playIcone_three.classList.remove('fa-play');
    playIcone_three.classList.add('fa-pause');
    this.addEventListener('click',function(){
        audio_three.pause()
        playIcone_three.classList.remove('fa-pause');
        playIcone_three.classList.add('fa-play');
    })
})
playButton[3].addEventListener('click',function(){
    audio_four.play()
    playIcone_four.classList.remove('fa-play');
    playIcone_four.classList.add('fa-pause');
    this.addEventListener('click',function(){
        audio_four.pause()
        playIcone_four.classList.remove('fa-pause');
        playIcone_four.classList.add('fa-play');
    })
})
playButton[4].addEventListener('click',function(){
    audio_five.play()
    playIcone_five.classList.remove('fa-play');
    playIcone_five.classList.add('fa-pause');
    this.addEventListener('click',function(){
        audio_five.pause()
        playIcone_five.classList.remove('fa-pause');
        playIcone_five.classList.add('fa-play');
    })
})
playButton[5].addEventListener('click',function(){
    audio_six.play()
    playIcone_six.classList.remove('fa-play');
    playIcone_six.classList.add('fa-pause');
    this.addEventListener('click',function(){
        audio_six.pause()
        playIcone_six.classList.remove('fa-pause');
        playIcone_six.classList.add('fa-play');
    })
})