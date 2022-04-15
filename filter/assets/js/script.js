const circles = document.querySelectorAll('.circle');

console.log(circles);
for(let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('mousedown', (event) => {
        
        circles[i].addEventListener('mousemove', () => {
            const rect = document.body;
            // console.log(rect);
        })
    });
}