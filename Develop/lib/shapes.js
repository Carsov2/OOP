// Base class for shapes
class Shape {
    constructor(bgColor, textColor, text) {
        this.size = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }
        render() {
            return `${this.size}
            <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
            <text x="150" y="115" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
        }
    
}

class Triangle extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

        render() {
            return `${this.size}
            <polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />
            <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
        }
}

class Square extends Shape {
    constructor(bgColor, textColor, text) {
        super(bgColor, textColor, text);
    }

        render() {
            return `${this.size}
            <rect x="90" y="40" width="120" height="120" fill="${this.bgColor}" />
            <text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
        }
}

module.exports = { Circle, Triangle, Square };