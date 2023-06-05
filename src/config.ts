const url_local = "http://localhost:4500/";
const url_render = "https://homeclick.onrender.com/";

const localConnection = true;

export const url_def = localConnection ? url_local : url_render;
