module.exports = class Language {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    toString() {
        return `${this.name}|${this.level}`;
    }
}