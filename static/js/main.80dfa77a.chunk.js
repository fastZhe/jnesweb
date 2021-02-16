(this["webpackJsonpjsnes-web"]=this["webpackJsonpjsnes-web"]||[]).push([[0],{39:function(t,e,a){t.exports=a(71)},51:function(t,e,a){},67:function(t,e,a){},68:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var n=a(10),o=a.n(n),s=a(0),r=a.n(s),i=a(14),l=a.n(i),h=a(22),p=a(13),m=a(11),d=(a(51),a(73));var c={ROMS:{owlia:{name:"The Legends of Owlia",description:r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.gradualgames.com/p/the-legends-of-owlia_1.html",target:"_blank",rel:"noopener noreferrer"},"Owlia by Gradual Games")," ","/"," ",r.a.createElement("a",{href:"http://www.infiniteneslives.com/owlia.php",target:"_blank",rel:"noopener noreferrer"},"Buy the cartridge")),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/owlia.nes"},nomolos:{name:"Nomolos: Storming the Catsle",description:r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.gradualgames.com/p/nomolos-storming-catsle.html",target:"_blank",rel:"noopener noreferrer"},"Monolos by Gradual Games")," ","/"," ",r.a.createElement("a",{href:"http://www.infiniteneslives.com/nomolos.php",target:"_blank",rel:"noopener noreferrer"},"Buy the cartridge")),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/nomolos.nes"},croom:{name:"Concentration Room",description:r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.pineight.com/croom/README",target:"_blank",rel:"noopener noreferrer"},"Concentration Room")," ","by Damian Yerrick"),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/croom/croom.nes"},lj65:{name:"LJ65",description:r.a.createElement("span",null,r.a.createElement("a",{href:"http://harddrop.com/wiki/LJ65",target:"_blank",rel:"noopener noreferrer"},"Concentration Room")," ","by Damian Yerrick"),url:"https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/lj65/lj65.nes"}},GOOGLE_ANALYTICS_CODE:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_ANALYTICS_CODE,SENTRY_URI:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SENTRY_URI};var u={getRomInfoByHash:function(t){return this.load().find(e=>e.hash===t)},save:function(t){return function(t){return new Promise((e,a)=>{var n=new FileReader;n.onload=e,n.readAsBinaryString(t)})}(t).then((function(t){const e=t.target.result;return function(t){const e=new ArrayBuffer(t.length);for(var a=new Uint8Array(e),n=0;n<t.length;n++)a[n]=t.charCodeAt(n);return crypto.subtle.digest("SHA-1",e).then(t=>Array.from(new Uint8Array(t)).map(t=>t.toString(16).padStart(2,"0")).join(""))}(e).then(t=>({hash:t,byteString:e}))})).then(({hash:e,byteString:a})=>{const n=localStorage.getItem("savedRomInfo"),o=n?JSON.parse(n):[],s={name:t.name,hash:e,added:Date.now()},r=JSON.stringify(o.concat([s]));return localStorage.setItem("savedRomInfo",r),localStorage.setItem("blob-"+e,a),s})},load:function(){return localStorage.getItem("savedRomInfo")&&JSON.parse(localStorage.getItem("savedRomInfo"))||[]},delete:function(t){const e=this.load();localStorage.removeItem("blob-"+t),localStorage.setItem("savedRomInfo",JSON.stringify(e.filter(e=>e.hash!==t)))}};class g extends s.Component{constructor(t){super(t),this.deleteRom=t=>{u.delete(t),this.updateLibrary()},this.updateLibrary=()=>{this.setState({romLibrary:u.load()})},this.handleDragOver=t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"},this.handleDrop=t=>{t.preventDefault();const e=t.dataTransfer.items?t.dataTransfer.items[0].getAsFile():t.dataTransfer.files[0];u.save(e).then(t=>{this.updateLibrary(),this.props.history.push({pathname:"run/local-"+t.hash})})},this.state={romLibrary:u.load()}}render(){return r.a.createElement("div",{className:"drop-zone",onDragOver:this.handleDragOver,onDrop:this.handleDrop},r.a.createElement("div",{className:"container ListPage py-4"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("header",{className:"mb-4"},r.a.createElement("h1",{className:"mb-3"},"JSNES"),r.a.createElement("p",null,"A JavaScript NES emulator."," ",r.a.createElement("a",{href:"https://github.com/bfirsh/jsnes"},"Source on GitHub."))),r.a.createElement(d.a,{className:"mb-4"},Object.keys(c.ROMS).sort().map(t=>r.a.createElement(p.b,{key:t,to:"/run/"+encodeURIComponent(t),className:"list-group-item"},c.ROMS[t].name,r.a.createElement("span",{className:"float-right"},"\u203a")))),r.a.createElement("p",null,"Or, drag and drop a ROM file onto the page to play it. (Google may help you find them.)"),this.state.romLibrary.length>0?r.a.createElement("div",null,r.a.createElement("p",null,"Previously played:"),r.a.createElement(d.a,{className:"mb-4"},this.state.romLibrary.sort((t,e)=>new Date(e.added)-new Date(t.added)).map(t=>r.a.createElement(p.b,{key:t.hash,to:"run/local-"+t.hash,className:"list-group-item"},t.name,r.a.createElement("span",{onClick:e=>{e.preventDefault(),this.deleteRom(t.hash)},className:"delete",title:"Delete"},"\xd7"),r.a.createElement("span",{className:"float-right"},"\u203a"))))):null))))}}var f=g,y=a(78),C=a(79),b=a(38),v=a(80),w=a(74),B=a(75),T=a(76),E=a(77),N=a(3);class k extends s.Component{constructor(t){super(t),this.state={playerOneButton:"",playerTwoButton:"",waitingForKey:0},this.handleClick=this.handleClick.bind(this)}componentDidMount(){var t=this.props.keys,e=this.props.button,a=[];for(var n in t)1===t[n][0]&&t[n][1]===e?(a[0]=t[n][2],console.log(a[0])):2===t[n][0]&&t[n][1]===e&&(a[1]=t[n][2]);this.setState({playerOneButton:a[0],playerTwoButton:a[1]})}componentDidUpdate(t,e){var a,n,o=this.props.keys,s=this.props.button,r=[];for(var i in o)1===o[i][0]&&o[i][1]===s?(r[0]=o[i][2],console.log(r[0])):2===o[i][0]&&o[i][1]===s&&(r[1]=o[i][2]);var l=(t,e)=>t.buttons.filter(t=>t.buttonId===e)[0],h=(t,e)=>e.buttons.filter(e=>!t||!t.buttons.some(t=>t.buttonId===e.buttonId))[0],p=0,m=0,d=t=>"button"===t.type?"Btn-"+t.code:"axis"===t.type?"Axis-"+t.code+" "+t.value:void 0;if(this.props.gamepadConfig&&this.props.gamepadConfig.playerGamepadId){const e=this.props.gamepadConfig.playerGamepadId;e[0]&&(r[0]="",a=l(this.props.gamepadConfig.configs[e[0]],s),n=h(t.gamepadConfig.configs[e[0]],this.props.gamepadConfig.configs[e[0]]),a?r[0]=d(a):n&&n.buttonId===this.props.prevButton&&(p||(p=1,m=1))),e[1]&&(r[1]="",a=l(this.props.gamepadConfig.configs[e[1]],s),n=h(t.gamepadConfig.configs[e[1]],this.props.gamepadConfig.configs[e[1]]),a?r[1]=d(a):n&&n.buttonId===this.props.prevButton&&(p||(p=2,m=2)))}var c={};p&&this.props.handleClick([m,this.props.button]),e.playerOneButton===r[0]&&e.playerTwoButton===r[1]||(c.playerOneButton=r[0],c.playerTwoButton=r[1]),p?c.waitingForKey=p:1===e.waitingForKey?this.props.currentPromptButton!==this.props.button&&(c.waitingForKey=0):2===e.waitingForKey&&this.props.currentPromptButton!==this.props.button&&(c.waitingForKey=0),Object.keys(c).length>0&&this.setState(c)}handleClick(t){console.log("pppppp"),this.props.handleClick([t,this.props.button]),this.setState({waitingForKey:t})}render(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.buttonName),r.a.createElement("td",{onClick:()=>this.handleClick(1)},1===this.state.waitingForKey?"Press key or button...":this.state.playerOneButton),r.a.createElement("td",{onClick:()=>this.handleClick(2)},2===this.state.waitingForKey?"Press key or button...":this.state.playerTwoButton))}}var S=k;const O="../img/nes_controller.png";class D extends s.Component{constructor(t){super(t),this.state={gamepadConfig:t.gamepadConfig,keys:t.keys,button:void 0,modified:!1},this.handleKeyDown=this.handleKeyDown.bind(this),this.handleGamepadButtonDown=this.handleGamepadButtonDown.bind(this),this.listenForKey=this.listenForKey.bind(this),this.state.gamepadConfig=this.state.gamepadConfig||{},this.state.gamepadConfig.playerGamepadId=this.state.gamepadConfig.playerGamepadId||[null,null],this.state.gamepadConfig.configs=this.state.gamepadConfig.configs||{},this.state.controllerIcon=this.state.gamepadConfig.playerGamepadId.map(t=>t?O:"../img/keyboard.png"),this.state.controllerIconAlt=this.state.gamepadConfig.playerGamepadId.map(t=>t?"gamepad":"keyboard"),this.state.currentPromptButton=-1}componentWillUnmount(){this.state.modified&&(this.props.setKeys(this.state.keys),this.props.setGamepadConfig(this.state.gamepadConfig)),this.removeKeyListener()}listenForKey(t){var e=t[1];console.log("ppppppp"),this.removeKeyListener(),this.setState({button:t,currentPromptButton:e}),this.props.promptButton(this.handleGamepadButtonDown),document.addEventListener("keydown",this.handleKeyDown)}handleGamepadButtonDown(t){console.log("kkkkkkkkiiiiiiiiiii00000"),this.removeKeyListener();var e=this.state.button;const a=e[0],n=e[1],o=t.gamepadId,s=this.state.gamepadConfig,r=s.playerGamepadId.slice(0),i={};r[a-1]=o;const l={code:t.code,type:t.type,buttonId:n,value:t.value};i[o]={buttons:(s.configs[o]||{buttons:[]}).buttons.filter(t=>t.buttonId!==n).concat([l])};const h=Object.assign({},s.configs,i);this.setState({gamepadConfig:{configs:h,playerGamepadId:r},currentPromptButton:-1,controllerIcon:r.map(t=>t?O:"../img/keyboard.png"),modified:!0})}handleKeyDown(t){this.removeKeyListener();var e=this.state.button,a=this.state.keys,n={};for(var o in a)a[o][0]===e[0]&&a[o][1]===e[1]||(n[o]=a[o]);const s=this.state.gamepadConfig.playerGamepadId.slice(0);s[e[0]-1]=null,console.log("----",n,this.state.gamepadConfig),this.setState({keys:Object(b.a)({},n,{[t.keyCode]:[...e.slice(0,2),t.key.length>1?t.key:String(t.key).toUpperCase()]}),button:void 0,gamepadConfig:{configs:this.state.gamepadConfig.configs,playerGamepadId:s},currentPromptButton:-1,controllerIcon:s.map(t=>t?O:"../img/keyboard.png"),controllerIconAlt:s.map(t=>t?"gamepad":"keyboard"),modified:!0})}removeKeyListener(){this.props.promptButton(null),document.removeEventListener("keydown",this.handleKeyDown)}render(){return r.a.createElement(v.a,{isOpen:this.props.isOpen,toggle:this.props.toggle,className:"ControlsModal"},r.a.createElement(w.a,{toggle:this.props.toggle},"Controls"),r.a.createElement(B.a,null,r.a.createElement(T.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Button"),r.a.createElement("th",null,"Player 1",r.a.createElement("img",{className:"controller-icon",src:this.state.controllerIcon[0],alt:this.state.controllerIconAlt[0]})),r.a.createElement("th",null,"Player 2",r.a.createElement("img",{className:"controller-icon",src:this.state.controllerIcon[1],alt:this.state.controllerIconAlt[1]})))),r.a.createElement("tbody",null,r.a.createElement(S,{buttonName:"Left",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_LEFT,prevButton:N.Controller.BUTTON_SELECT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"Right",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_RIGHT,prevButton:N.Controller.BUTTON_LEFT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"Up",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_UP,prevButton:N.Controller.BUTTON_RIGHT,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"Down",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_DOWN,prevButton:N.Controller.BUTTON_UP,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"A",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_A,prevButton:N.Controller.BUTTON_DOWN,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"B",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_B,prevButton:N.Controller.BUTTON_A,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"Start",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_START,prevButton:N.Controller.BUTTON_B,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig}),r.a.createElement(S,{buttonName:"Select",currentPromptButton:this.state.currentPromptButton,button:N.Controller.BUTTON_SELECT,prevButton:N.Controller.BUTTON_START,keys:this.state.keys,handleClick:this.listenForKey,gamepadConfig:this.state.gamepadConfig})))),r.a.createElement(E.a,null,r.a.createElement(y.a,{outline:!0,color:"primary",onClick:this.props.toggle},"Close")))}}var U=D;class I{constructor(t){this.onAnimationFrame=t=>{this.requestAnimationFrame();let e=t%this.interval,a=t-e;if(!this.lastFrameTime)return void(this.lastFrameTime=a);let n=Math.round((a-this.lastFrameTime)/this.interval);if(0===n)return;this.generateFrame(),this.onWriteFrame();let o=this.interval-e;for(let s=1;s<n;s++)setTimeout(()=>{this.generateFrame()},s*o/n)},this.onGenerateFrame=t.onGenerateFrame,this.onWriteFrame=t.onWriteFrame,this.onAnimationFrame=this.onAnimationFrame.bind(this),this.running=!0,this.interval=1e3/60.098,this.lastFrameTime=!1}start(){this.running=!0,this.requestAnimationFrame()}stop(){this.running=!1,this._requestID&&window.cancelAnimationFrame(this._requestID),this.lastFrameTime=!1}requestAnimationFrame(){this._requestID=window.requestAnimationFrame(this.onAnimationFrame)}generateFrame(){this.onGenerateFrame(),this.lastFrameTime+=this.interval}}class _{constructor(t){this.disableIfGamepadEnabled=t=>{var e=this;return(a,n)=>{if(!e.gamepadConfig)return t(a,n);var o=e.gamepadConfig.playerGamepadId;return o&&o[a-1]?void 0:t(a,n)}},this._getPlayerNumberFromGamepad=t=>this.gamepadConfig.playerGamepadId[0]===t.id?1:this.gamepadConfig.playerGamepadId[1]===t.id?2:1,this.poll=()=>{const t=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads(),e=[];for(let a=0;a<t.length;a++){const n=t[a],o=this.gamepadState[a];if(!n)continue;if(!o){this.gamepadState[a]=n;continue}const s=n.buttons,r=o.buttons;if(this.buttonCallback){for(let t=0;t<n.axes.length;t++){const e=n.axes[t],a=o.axes[t];-1===e&&-1!==a&&this.buttonCallback({gamepadId:n.id,type:"axis",code:t,value:e}),1===e&&1!==a&&this.buttonCallback({gamepadId:n.id,type:"axis",code:t,value:e})}for(let t=0;t<s.length;t++){const e=s[t],a=r[t];e.pressed&&!a.pressed&&this.buttonCallback({gamepadId:n.id,type:"button",code:t})}}else if(this.gamepadConfig){let t=this._getPlayerNumberFromGamepad(n);if(e.length<2&&(-1!==e.indexOf(t)&&(t++,t>2&&(t=1)),e.push(t),this.gamepadConfig.configs[n.id])){const e=this.gamepadConfig.configs[n.id].buttons;for(let a=0;a<e.length;a++){const i=e[a];if("button"===i.type){const e=i.code,a=s[e],n=r[e];a.pressed&&!n.pressed?this.onButtonDown(t,i.buttonId):!a.pressed&&n.pressed&&this.onButtonUp(t,i.buttonId)}else if("axis"===i.type){const e=i.code,a=n.axes[e],s=o.axes[e];a===i.value&&s!==i.value&&this.onButtonDown(t,i.buttonId),a!==i.value&&s===i.value&&this.onButtonUp(t,i.buttonId)}}}}this.gamepadState[a]={buttons:s.map(t=>({pressed:t.pressed})),axes:n.axes.slice(0)}}},this.promptButton=t=>{this.buttonCallback=t?e=>{this.buttonCallback=null,t(e)}:t},this.loadGamepadConfig=()=>{var t;try{(t=localStorage.getItem("gamepadConfig"))&&(t=JSON.parse(t))}catch(e){console.log("Failed to get gamepadConfig from localStorage.",e)}this.gamepadConfig=t},this.setGamepadConfig=t=>{try{localStorage.setItem("gamepadConfig",JSON.stringify(t)),this.gamepadConfig=t}catch(e){console.log("Failed to set gamepadConfig in localStorage")}},this.startPolling=()=>{if(!navigator.getGamepads&&!navigator.webkitGetGamepads)return{stop:()=>{}};let t=!1;const e=()=>{t||(this.poll(),requestAnimationFrame(e))};return requestAnimationFrame(e),{stop:()=>{t=!0}}},this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp,this.gamepadState=[],this.buttonCallback=null}}const P={88:[1,N.Controller.BUTTON_A,"X"],89:[1,N.Controller.BUTTON_B,"Y"],90:[1,N.Controller.BUTTON_B,"Z"],17:[1,N.Controller.BUTTON_SELECT,"Right Ctrl"],13:[1,N.Controller.BUTTON_START,"Enter"],38:[1,N.Controller.BUTTON_UP,"Up"],40:[1,N.Controller.BUTTON_DOWN,"Down"],37:[1,N.Controller.BUTTON_LEFT,"Left"],39:[1,N.Controller.BUTTON_RIGHT,"Right"],103:[2,N.Controller.BUTTON_A,"Num-7"],105:[2,N.Controller.BUTTON_B,"Num-9"],99:[2,N.Controller.BUTTON_SELECT,"Num-3"],97:[2,N.Controller.BUTTON_START,"Num-1"],104:[2,N.Controller.BUTTON_UP,"Num-8"],98:[2,N.Controller.BUTTON_DOWN,"Num-2"],100:[2,N.Controller.BUTTON_LEFT,"Num-4"],102:[2,N.Controller.BUTTON_RIGHT,"Num-6"]};class F{constructor(t){this.loadKeys=()=>{var t;try{(t=localStorage.getItem("keys"))&&(t=JSON.parse(t))}catch(e){console.log("Failed to get keys from localStorage.",e)}this.keys=t||P},this.setKeys=t=>{try{localStorage.setItem("keys",JSON.stringify(t)),this.keys=t}catch(e){console.log("Failed to set keys in localStorage")}},this.handleKeyDown=t=>{var e=this.keys[t.keyCode];console.log("key",e),e&&(this.onButtonDown(e[0],e[1]),t.preventDefault())},this.handleKeyUp=t=>{var e=this.keys[t.keyCode];e&&(this.onButtonUp(e[0],e[1]),t.preventDefault())},this.handleKeyPress=t=>{t.preventDefault()},console.log("options",t),window.nes={SELECT:()=>{t.onButtonDown(1,2),setTimeout(()=>{t.onButtonUp(1,2)},100)},START:()=>{t.onButtonDown(1,3),setTimeout(()=>{t.onButtonUp(1,3)},100)},A:()=>{t.onButtonDown(1,0),setTimeout(()=>{t.onButtonUp(1,0)},100)},B:()=>{t.onButtonDown(1,1),setTimeout(()=>{t.onButtonUp(1,1)},100)},LEFT:()=>{t.onButtonDown(1,6),setTimeout(()=>{t.onButtonUp(1,6)},100)},RIGHT:()=>{t.onButtonDown(1,7),setTimeout(()=>{t.onButtonUp(1,7)},100)},UP:()=>{t.onButtonDown(1,4),setTimeout(()=>{t.onButtonUp(1,4)},100)},BOTTOM:()=>{t.onButtonDown(1,5),setTimeout(()=>{t.onButtonUp(1,5)},100)}},this.onButtonDown=t.onButtonDown,this.onButtonUp=t.onButtonUp}}a(67);class R extends s.Component{constructor(...t){super(...t),this.setBuffer=t=>{for(var e=0,a=0;a<240;++a)for(var n=0;n<256;++n)e=256*a+n,this.buf32[e]=4278190080|t[e]},this.writeBuffer=()=>{this.imageData.data.set(this.buf8),this.context.putImageData(this.imageData,0,0)},this.fitInParent=()=>{let t=this.canvas.parentNode,e=t.clientWidth,a=t.clientHeight;256/240<e/a?(this.canvas.style.width="".concat(Math.round(a*(256/240)),"px"),this.canvas.style.height="".concat(a,"px")):(this.canvas.style.width="".concat(e,"px"),this.canvas.style.height="".concat(Math.round(e/(256/240)),"px"))},this.handleMouseDown=t=>{if(!this.props.onMouseDown)return;let e=256/parseFloat(this.canvas.style.width),a=this.canvas.getBoundingClientRect(),n=Math.round((t.clientX-a.left)*e),o=Math.round((t.clientY-a.top)*e);this.props.onMouseDown(n,o)}}render(){return r.a.createElement("canvas",{className:"Screen",width:256,height:240,onMouseDown:this.handleMouseDown,onMouseUp:this.props.onMouseUp,ref:t=>{this.canvas=t}})}componentDidMount(){this.initCanvas()}componentDidUpdate(){this.initCanvas()}initCanvas(){this.context=this.canvas.getContext("2d"),this.imageData=this.context.getImageData(0,0,256,240),this.context.fillStyle="black",this.context.fillRect(0,0,256,240),this.buf=new ArrayBuffer(this.imageData.data.length),this.buf8=new Uint8ClampedArray(this.buf),this.buf32=new Uint32Array(this.buf);for(var t=0;t<this.buf32.length;++t)this.buf32[t]=4278190080}screenshot(){var t=new Image;return t.src=this.canvas.toDataURL("image/png"),t}}var A=R,G=a(37),x=a.n(G);const L=(t,e)=>{console.error(t),o.a.captureException(t,{extra:e})};class K{constructor({onBufferUnderrun:t}){this.writeSample=(t,e)=>{this.buffer.size()/2>=this.bufferSize&&this.buffer.deqN(this.bufferSize/2),this.buffer.enq(t),this.buffer.enq(e)},this.onaudioprocess=t=>{var e=t.outputBuffer.getChannelData(0),a=t.outputBuffer.getChannelData(1),n=e.length;this.buffer.size()<2*n&&this.onBufferUnderrun&&this.onBufferUnderrun(this.buffer.size(),2*n);try{var o=this.buffer.deqN(2*n)}catch(t){this.buffer.size();for(var s=0;s<n;s++)e[s]=0,a[s]=0;return}for(var r=0;r<n;r++)e[r]=o[2*r],a[r]=o[2*r+1]},this.onBufferUnderrun=t,this.bufferSize=8192,this.buffer=new x.a(2*this.bufferSize)}getSampleRate(){if(!window.AudioContext)return 44100;let t=new window.AudioContext,e=t.sampleRate;return t.close(),e}start(){window.AudioContext&&(this.audioCtx=new window.AudioContext,this.scriptNode=this.audioCtx.createScriptProcessor(1024,0,2),this.scriptNode.onaudioprocess=this.onaudioprocess,this.scriptNode.connect(this.audioCtx.destination))}stop(){this.scriptNode&&(this.scriptNode.disconnect(this.audioCtx.destination),this.scriptNode.onaudioprocess=null,this.scriptNode=null),this.audioCtx&&(this.audioCtx.close().catch(L),this.audioCtx=null)}}class M extends s.Component{constructor(...t){super(...t),this.start=()=>{this.frameTimer.start(),this.speakers.start(),this.fpsInterval=setInterval(()=>{},1e3)},this.stop=()=>{this.frameTimer.stop(),this.speakers.stop(),clearInterval(this.fpsInterval)}}render(){return r.a.createElement(A,{ref:t=>{this.screen=t},onGenerateFrame:()=>{this.nes.frame()},onMouseDown:(t,e)=>{this.nes.zapperMove(t,e),this.nes.zapperFireDown()},onMouseUp:()=>{this.nes.zapperFireUp()}})}componentDidMount(){this.fitInParent(),this.speakers=new K({onBufferUnderrun:(t,e)=>{this.props.paused||(console.log("Buffer underrun, running another frame to try and catch up"),this.frameTimer.generateFrame(),this.speakers.buffer.size()<e&&(console.log("Still buffer underrun, running a second frame"),this.frameTimer.generateFrame()))}}),this.nes=new N.NES({onFrame:this.screen.setBuffer,onStatusUpdate:console.log,onAudioSample:this.speakers.writeSample,sampleRate:this.speakers.getSampleRate()}),window.nes=this.nes,this.frameTimer=new I({onGenerateFrame:o.a.wrap(this.nes.frame),onWriteFrame:o.a.wrap(this.screen.writeBuffer)}),this.gamepadController=new _({onButtonDown:this.nes.buttonDown,onButtonUp:this.nes.buttonUp}),this.gamepadController.loadGamepadConfig(),this.gamepadPolling=this.gamepadController.startPolling(),this.keyboardController=new F({onButtonDown:this.gamepadController.disableIfGamepadEnabled(this.nes.buttonDown),onButtonUp:this.gamepadController.disableIfGamepadEnabled(this.nes.buttonUp)}),this.keyboardController.loadKeys(),document.addEventListener("keydown",this.keyboardController.handleKeyDown),document.addEventListener("keyup",this.keyboardController.handleKeyUp),document.addEventListener("keypress",this.keyboardController.handleKeyPress),this.nes.loadROM(this.props.romData),this.start()}componentWillUnmount(){this.stop(),document.removeEventListener("keydown",this.keyboardController.handleKeyDown),document.removeEventListener("keyup",this.keyboardController.handleKeyUp),document.removeEventListener("keypress",this.keyboardController.handleKeyPress),this.gamepadPolling.stop(),window.nes=void 0}componentDidUpdate(t){this.props.paused!==t.paused&&(this.props.paused?this.stop():this.start())}fitInParent(){this.screen.fitInParent()}}var j=M;a(68);class q extends s.Component{constructor(t){super(t),this.load=()=>{if(this.props.match.params.slug){const t=this.props.match.params.slug,e=/^local-/.test(t),a=t.split("-")[1],n=e?u.getRomInfoByHash(a):c.ROMS[t];if(!n)return void this.setState({error:"No such ROM: ".concat(t)});if(e){this.setState({romName:n.name});const t=localStorage.getItem("blob-"+a);this.handleLoaded(t)}else this.setState({romName:n.description}),this.currentRequest=function(t,e,a){var n=new XMLHttpRequest;return n.open("GET",t),n.overrideMimeType("text/plain; charset=x-user-defined"),n.onload=function(){if(200===this.status){if(n.responseText.match(/^<!doctype html>/i))return e(new Error("Page not found"));e(null,this.responseText)}else 0===this.status||e(new Error(n.statusText))},n.onerror=function(){e(new Error(n.statusText))},n.onprogress=a,n.send(),n}(n.url,(t,e)=>{t?this.setState({error:"Error loading ROM: ".concat(t.message)}):this.handleLoaded(e)},this.handleProgress)}else if(this.props.location.state&&this.props.location.state.file){let t=new FileReader;t.readAsBinaryString(this.props.location.state.file),t.onload=e=>{this.currentRequest=null,this.handleLoaded(t.result)}}else this.setState({error:"No ROM provided"})},this.handleProgress=t=>{t.lengthComputable&&this.setState({loadedPercent:t.loaded/t.total*100})},this.handleLoaded=t=>{this.setState({running:!0,loading:!1,romData:t})},this.handlePauseResume=()=>{this.setState({paused:!this.state.paused})},this.layout=()=>{let t=parseFloat(window.getComputedStyle(this.navbar).height);this.screenContainer.style.height="".concat(window.innerHeight-t,"px"),this.emulator&&this.emulator.fitInParent()},this.toggleControlsModal=()=>{this.setState({controlsModalOpen:!this.state.controlsModalOpen})},this.state={romName:null,romData:null,running:!1,paused:!1,controlsModalOpen:!1,loading:!0,loadedPercent:3,error:null}}render(){return r.a.createElement("div",{className:"RunPage"},r.a.createElement("nav",{className:"navbar navbar-expand",ref:t=>{this.navbar=t}},r.a.createElement("ul",{className:"navbar-nav",style:{width:"200px"}},r.a.createElement("li",{className:"navitem"},r.a.createElement(p.b,{to:"/",className:"nav-link"},"\u2039 Back"))),r.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},r.a.createElement("li",{className:"navitem"},r.a.createElement("span",{className:"navbar-text mr-3"},this.state.romName))),r.a.createElement("ul",{className:"navbar-nav",style:{width:"200px"}},r.a.createElement("li",{className:"navitem"},r.a.createElement(y.a,{outline:!0,color:"primary",onClick:this.toggleControlsModal,className:"mr-3"},"Controls"),r.a.createElement(y.a,{outline:!0,color:"primary",onClick:this.handlePauseResume,disabled:!this.state.running},this.state.paused?"Resume":"Pause")))),this.state.error?this.state.error:r.a.createElement("div",{className:"screen-container",ref:t=>{this.screenContainer=t}},this.state.loading?r.a.createElement(C.a,{value:this.state.loadedPercent,style:{position:"absolute",width:"70%",left:"15%",top:"48%"}}):this.state.romData?r.a.createElement(j,{romData:this.state.romData,paused:this.state.paused,ref:t=>{this.emulator=t}}):null,this.state.controlsModalOpen&&r.a.createElement(U,{isOpen:this.state.controlsModalOpen,toggle:this.toggleControlsModal,keys:this.emulator.keyboardController.keys,setKeys:this.emulator.keyboardController.setKeys,promptButton:this.emulator.gamepadController.promptButton,gamepadConfig:this.emulator.gamepadController.gamepadConfig,setGamepadConfig:this.emulator.gamepadController.setGamepadConfig})))}componentDidMount(){window.addEventListener("resize",this.layout),this.layout(),this.load()}componentWillUnmount(){window.removeEventListener("resize",this.layout),this.currentRequest&&this.currentRequest.abort()}}var W=q;a(69);class z extends s.Component{constructor(t){super(t),this.recordPageview=({location:t})=>(h.a.pageview(t.pathname),null),this.state={error:null},c.GOOGLE_ANALYTICS_CODE&&h.a.initialize(c.GOOGLE_ANALYTICS_CODE)}render(){return this.state.error?r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},"Oops - there has been an error. It has been logged to the console."))):r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{exact:!0,path:"/",component:f}),r.a.createElement(m.a,{exact:!0,path:"/run",component:W}),r.a.createElement(m.a,{exact:!0,path:"/run/:slug",component:W}),r.a.createElement(m.a,{path:"/",render:this.recordPageview})))}componentDidCatch(t,e){this.setState({error:t}),L(t,e)}}var H=z;a(70);c.SENTRY_URI&&o.a.config(c.SENTRY_URI).install(),o.a.context((function(){l.a.render(r.a.createElement(H,null),document.getElementById("root"))}))}},[[39,1,2]]]);
//# sourceMappingURL=main.80dfa77a.chunk.js.map