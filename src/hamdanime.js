

export function cursor(bgColor="black",cursorWidth=50, delay=100, blendMode = 'difference', clipPath) {
    const cursorDiv = document.createElement("div");

    switch (clipPath){
        case "triangle":
            clipPath = ` polygon(50% 0%, 0% 100%, 100% 100%)`;
            break;
        
        case "parallelogram":
            clipPath = ` polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);`
            break;
        
        case "kite":
            clipPath = ` polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);`
            break;
        
        case "octagon":
            clipPath = `  polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);`
            break;
        
        case "pentagon":
            clipPath = ` polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);`
            break;
        
        case "hexagon":
            clipPath = ` polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);`
            break;
        
        case "heptagon":
            clipPath = `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);`
            break;
        
        case "nonagon":
            clipPath = `polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);`
            break;
        
        case "decagon":
            clipPath = `polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);`
            break;
        
        case "bevel":
            clipPath = `polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);`
            break;
        
        case "rabbet":
            clipPath = `polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);`
            break;
        
        case "cross":
            clipPath = ` polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);`
            break;
        
        case "star":
            clipPath = `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);`
            break;

        default:
            clipPath = `circle(50% at 50% 50%);`


    }

    cursorDiv.style.cssText = `position: absolute; background-color: ${bgColor}; height: ${cursorWidth}px; width: ${cursorWidth}px;transition: ${delay}ms; mix-blend-mode: ${blendMode}; clip-path: ${clipPath};`
    document.body.appendChild(cursorDiv);

    document.addEventListener('mousemove', (e) => {
        cursorDiv.style.left = e.x + 'px';
        cursorDiv.style.top = e.y + 'px';
    })
}
