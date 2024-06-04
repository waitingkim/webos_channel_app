import {EventEmitter} from "events";

const emitter = new EventEmitter()

let defaultPath = '';

export default {event:emitter, path:defaultPath};