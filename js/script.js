function triggerGlitch() {
    const glitch = document.querySelector(".glitch-layer");

    const roll = Math.random();
    let barCount;
    if (roll < 0.50) {
        barCount = Math.floor(Math.random() * 2) + 1;
    }
    else if (roll < 0.85) {
        barCount = Math.floor(Math.random() * 2) + 3;
    }
    else {
        barCount = Math.floor(Math.random() * 2) + 5;
    }
    for (let index = 0; index < barCount; index++) {
        const bar = document.createElement("div");
        bar.classList.add("glitch-bar");
        glitch.appendChild(bar);

        console.log("BARRA CRIADA!", bar);



        const barWidth = Math.random() * 60 + 10;
        bar.style.width = `${barWidth}%`;


        const y = Math.random() * 100;
        bar.style.top = `${y}%`;

        const x = Math.random() * 100;
        bar.style.left = `${x}%`;

        const axis = Math.random() < 0.5 ? "x" : "y";
        let displacementX = 0;
        let displacementY = 0;
        
        bar.style.transform = "translate(0, 0)";

        setTimeout(() => {
            bar.style.transform =
                `translate(${displacementX}px, ${displacementY}px)`;
        }, 15);

        const duration = Math.random() * 200 + 150;

        setTimeout(() => {
            bar.remove();
        }, duration);

    }



    const nextGlitch = Math.random() * 7000 + 3000;
    setTimeout(triggerGlitch, nextGlitch);
}

triggerGlitch();
console.log("JS tá on!")