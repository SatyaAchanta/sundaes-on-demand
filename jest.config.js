module.exports = {
    testMatch: ["**/*.test.js(x)"],
    transform: {
        "^.+\\.jsx$": "babel-jest",
        "^.+\\.css$": ["jest-transform-css", { modules: true }]
    }
}