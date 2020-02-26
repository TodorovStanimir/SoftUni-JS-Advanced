

class SpaceShip extends HTMLElement {
    shadow;
    directionsMap = {
        up: 0,
        right: 90,
        left: -90,
        down: 180,
    }
    options = {
        "dir": "right",
        "t": "0",
        "l": "0",
        "engine": "off"
    }

    constructor() {
        super();
        this.options = { ...this.options, ...this.options || {} };
        console.log("constructed")
    }

    adoptedCallback() {
        console.log('attached');
    }

    connectedCallback() {
        this.shadow = this.attachShadow({ mode: "closed" });
        const div = document.createElement("div");

        ["generic", "dir", "t", "l", "engine"].forEach(x => {
            const style = document.createElement("style");
            style.id = x;
            this.shadow.appendChild(style);
        })

        this.setAttribute("dir", this.options.dir);
        this.setAttribute("t", 0);
        this.setAttribute("l", 0);
        this.setAttribute("engine", "off")

        this.renderStyles("generic")

        this.shadow.appendChild(div);
    }

    disconnectedCallback() {
        console.log('disconected');
    }

    renderStyles(id, params) {
        this.shadow.querySelector(`#${id}`)
        this.textContent = this[`renderStyles_${id}`](params);
    }

    renderStyles_dir(dir) {
        return
        div`{
                transform: rotate(${})
            }`
    }

    const style = document.createElement("style")
    style.textContent =
        div`{
            display: block;
            position: absolute;
            height: 210px;
            width: 210px;
            background - repeat: no - repeat;
            background - size: 420px 210px;

            transition - delay: 0s;
            transition - duration: 100ms;
            transition - property: transform;
            transition - timing - function: linear;

            background - image: url(/assets/ship - sprite.gif);

            top: 0;
            left: 0;
            background - position-x: 0 0;
            background - position-y: 0 0;
            transform: rotate(90deg);
        }`;



        // this.render

        this.shadow.appendChild(style);
this.shadow.appendChild(div);
    }





renderStyles_t({ t }) {
    return
    div`{
        top: ${t}px;
    }`
}

renderStyles_l() {
    return div`{
        left: ${l}px
    }`
}

renderStyles_engine() {
    return
    div`{
            background
        }`
}

    static get observedAttributes() {
    return ["dir", "t", "l", "engine"]
}

attributeChangeCallback(name, _, newValue) {
    this.renderStyles
}
}

const keysMap = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right"
}

const actionsMap = {
    Space: (ship) => {
        ship.setAttribute("engine", ship.getAttribute("engine") === "off" ? "on" : "off");
    },
}

function handleKeybord(ship, keys, actions, e) {
    if (typeof keys[e.code] !== 'undefined') {
        ship.setAttribute("dir", keys[e.code]);
    }

    if (typeof actions[e.code] === 'function') {
        actions[e.code](ship);
    }
}

window.customElements.define('space-ship', SpaceShip)

function makeDecision(dir, dirCompare, speed, dimmension, shipAttribute, starsDirection, ship) {
    if (dir === dirCompare) {
        let delta = Number(currentPosition) + speed;
        if (delta > window[dimmension] - 260) {
            delta = window[dimmension] - 260
            ship.setAttribute("engine", "off")
        }
        animateStars(delta * -1, dir)
        ship.setAttribute("l", left)
    }
}

function animate(ship, stars) {

    if (ship.getAttribute("engine") == "on") {
        const dir = ship.getAttribute("dir");

        const l = ship.getAttribute("l");

        const t = ship.getAttribute("t");

        const speed = 10;
        if (dir === 'right') {
            let left = Number(l) + speed;
            if (left > window.innerWidth - 260) {
                left = window.innerWidth - 260
                ship.setAttribute("engine", "off")
            }
            animateStars(left * -1, dir)
            ship.setAttribute("l", left)
        }

        if (dir === 'left') {
            let left = Number(l) - speed;
            if (left < 0) {
                left = 0
                ship.setAttribute("engine", "off")
            }
            animateStars(left * -1, dir)
            ship.setAttribute("l", left)
        }

        if (dir === 'down') {
            let left = Number(t) + speed;
            if (top > window.innerHeight - 260) {
                top = window.innerHeight - 260
                ship.setAttribute("engine", "off")
            }
            animateStars(top * -1, dir)
            ship.setAttribute("t", top)
        }

        if (dir === 'up') {
            let left = Number(t) - speed;
            if (top < 0) {
                top = 0
                ship.setAttribute("engine", "off")
            }
            animateStars(top * -1, dir)
            ship.setAttribute("t", top)
        }


    }
    requestAnimationFrame(animate.bind(undefined, ship))
}

function animateStars(stars, step, dir) {
    stars.forEach(x => {
        x[0].style[`backgroundPosition${}`] = `step.`
    })
}

const asteroid ={
    width = 100,
    asteroid.style.height = "100px";
    asteroid.style.background = "cyan";
    asteroid.style.position = "absolute";
    asteroid.style.top = "50px";
    asteroid.style.left = "500px";
}

function main() {
    const ship = new SpaceShip();
    const stars = [
        [document.all.far, 1],
        [document.all.mid, 4],
        [document.all.near, 8]
    ]

    const asteroid = document.createElement('div');
    asteroid.style.width = "100px";
    asteroid.style.height = "100px";
    asteroid.style.background = "cyan";
    asteroid.style.position = "absolute";
    asteroid.style.top = "50px";
    asteroid.style.left = "500px";

    document.body.appendChild(new SpaceShip())
    document.addEventListener("keydown", handleKeybord.bind(undefined, ship, keysMap, actionsMap))

    requestAnimationFrame(animate.bind(undefined, ship))
}

main()
