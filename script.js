// 강아지 눈이 마우스를 따라가는 효과
document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    
    pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        
        // 눈의 중심점 계산
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        // 마우스와 눈 사이의 각도 계산
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        
        // 동공의 이동 거리 제한
        const distance = Math.min(5, 5);
        
        // 동공 위치 업데이트
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;
        
        pupil.style.transform = `translate(calc(-50% + ${pupilX}px), ${pupilY}px)`;
    });
});

// 카드 클릭 시 메시지 변경
const messages = [
    '멍멍! 안녕하세요!',
    '놀아줘요! 🦴',
    '배고파요~ 🍖',
    '산책 가고 싶어요! 🐕',
    '사랑해요! ❤️',
    '주인님 최고! 🌟'
];

let currentMessageIndex = 0;
const messageElement = document.querySelector('.message');
const card = document.querySelector('.card');

card.addEventListener('click', () => {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    messageElement.style.animation = 'none';
    setTimeout(() => {
        messageElement.textContent = messages[currentMessageIndex];
        messageElement.style.animation = 'messageFloat 2s ease-in-out infinite';
    }, 10);
});

// 강아지 짖는 소리 효과 (시각적)
let barkCount = 0;
setInterval(() => {
    const tongue = document.querySelector('.tongue');
    barkCount++;
    
    if (barkCount % 8 === 0) {
        tongue.style.animation = 'none';
        setTimeout(() => {
            tongue.style.animation = 'tongueWag 0.3s ease-in-out 3';
        }, 10);
    }
}, 1000);

// 버튼 기능
const puppy = document.querySelector('.puppy');
const btnSit = document.getElementById('btnSit');
const btnBark = document.getElementById('btnBark');
const btnJump = document.getElementById('btnJump');

let isAnimating = false;

// 앉아 버튼
btnSit.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isAnimating) return;
    
    isAnimating = true;
    puppy.classList.remove('barking', 'jumping');
    
    if (puppy.classList.contains('sitting')) {
        puppy.classList.remove('sitting');
        messageElement.textContent = '일어났어요!';
        isAnimating = false;
    } else {
        puppy.classList.add('sitting');
        messageElement.textContent = '앉았어요! 착하지? 🐕';
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
});

// 짖기 버튼
btnBark.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isAnimating) return;
    
    isAnimating = true;
    puppy.classList.remove('sitting', 'jumping');
    puppy.classList.add('barking');
    messageElement.textContent = '멍멍! 멍멍멍!! 🔊';
    
    setTimeout(() => {
        puppy.classList.remove('barking');
        isAnimating = false;
    }, 750);
});

// 점프 버튼
btnJump.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isAnimating) return;
    
    isAnimating = true;
    puppy.classList.remove('sitting', 'barking');
    puppy.classList.add('jumping');
    messageElement.textContent = '와! 신난다! ⭐✨';
    
    setTimeout(() => {
        puppy.classList.remove('jumping');
        isAnimating = false;
    }, 600);
});

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('🐕 귀여운 강아지가 당신을 환영합니다!');
    console.log('💡 카드를 클릭하면 강아지가 다른 말을 해요!');
    console.log('🖱️ 마우스를 움직이면 강아지가 쳐다봐요!');
    console.log('🎮 버튼을 눌러서 강아지와 놀아보세요!');
});

