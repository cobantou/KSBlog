/**
 * Created by pengshuo on 17/7/7.
 */
interface Config {
    github: {
        readonly clientId: string;
        readonly clientSecret: string;
    }
}

const config: Config = {
    github: {
        clientId: "6b0a36a2d9cb96d9f4a5",
        clientSecret: "0563d83c9be7b06d5e39b62e6fae2a3008210aa1"
    }
}

/*
 module.exports = config;
 */

export default config;

