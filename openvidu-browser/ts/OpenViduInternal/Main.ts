import { OpenViduInternal } from './OpenViduInternal';

//This export with --standalone option allows using OpenVidu from bowser with namespace
//export { OpenVidu } from './OpenVidu';

//This "hack" allows to use OpenVidu from the global space window
if(window){
    window["OpenViduInternal"] = OpenViduInternal;
}

//Command to generate bundle.js without namespace
//watchify Main.ts -p [ tsify ] --exclude kurento-browser-extensions --debug -o ../static/js/OpenVidu.js -v