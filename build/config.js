"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let config = {
    github: {}
};
if (process.env.NODE_ENV === "prod") {
    config.github = {
        clientId: "b1afdf616ca9e769dcbd",
        clientSecret: "66a77d79876c133788114cd302d4bf3adfbed23e"
    };
}
else {
    config.github = {
        clientId: "6b0a36a2d9cb96d9f4a5",
        clientSecret: "0563d83c9be7b06d5e39b62e6fae2a3008210aa1"
    };
}
/*
 module.exports = config;
 */
exports.default = config;
