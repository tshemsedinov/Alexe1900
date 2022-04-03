module.exports = class Scill {
    constructor(name, level) {
        this.name = name;
        this.level = [...new Array(level)].map((elem) => '⭐').join('');
    }

    toString() {
        return `${this.name}|${this.level}`;
    }
}