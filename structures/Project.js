module.exports = class Project {
    constructor(name, url, description) {
        this.name = name;
        this.url = url;
        this.description = description;
    }

    toString() {
        return `${this.name}|${this.url}|${this.description}`;
    }
}