(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1171:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1172);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1173:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(380).configure)([__webpack_require__(1174),__webpack_require__(1181)],module,!1)}).call(this,__webpack_require__(107)(module))},1174:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1175};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1174},1175:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(28),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(213),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(502),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(503),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(1176),__webpack_require__(1177),__webpack_require__(1178),__webpack_require__(1179),__webpack_require__(504)),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__);__webpack_require__(1180);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"persian-tools"},"Persian Tools"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"PersianTools.js is a standalone, library-agnostic JavaScript that enables some of the Persian features for use in the JavaScript."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",{className:"link-item",href:"https://persian-tools.js.org/",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong",null,"Documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",{className:"link-item",href:"https://github.com/persian-tools",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong",null,"Organization"),"See more about Persian tools")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",{className:"link-item",href:"https://github.com/persian-tools/react-persian-tools",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong",null,"Project repository"),"View the source and add issues"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",{className:"tip"},"Contributing"),"Thank you for your interest in contributing! Please feel free to put up a PR for any issue or feature request.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("br",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("br",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",{className:"tip"},"License"),"This project is licensed under the MIT License"))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta},1176:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.3f9a1398.svg"},1177:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.d3dc567b.svg"},1178:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.e3812c4f.svg"},1179:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.5ba97e9b.svg"},1180:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.66f4b748.svg"},1181:function(module,exports,__webpack_require__){var map={"./stories/Commas/AddCommas.stories.tsx":1182,"./stories/Commas/RemoveCommas.stories.tsx":1185,"./stories/Digits/DigitsArToEn.stories.tsx":1186,"./stories/Digits/DigitsArToFa.stories.tsx":1187,"./stories/Digits/DigitsEnToFa.stories.tsx":1188,"./stories/Digits/DigitsFaToEn.stories.tsx":1189,"./stories/HalfSpace.stories.tsx":1194,"./stories/NationalId.stories.tsx":1195,"./stories/NumberToWords.stories.tsx":1196,"./stories/WordsToNumber.stories.tsx":1197};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1181},1182:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_modules_Commas__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(132),_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);__webpack_exports__.default={title:"Example/AddCommas",component:_modules_Commas__WEBPACK_IMPORTED_MODULE_1__.a,decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null))}]};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Commas__WEBPACK_IMPORTED_MODULE_1__.a,args)}.bind({});Default.args={children:"30000000"}},1183:function(module,exports,__webpack_require__){},1184:function(module,exports,__webpack_require__){},1185:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_modules_Commas__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(132),_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);__webpack_exports__.default={title:"Example/RemoveCommas",component:_modules_Commas__WEBPACK_IMPORTED_MODULE_1__.b,decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null))}]};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Commas__WEBPACK_IMPORTED_MODULE_1__.b,args)}.bind({});Default.args={children:"30,000,000"}},1186:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_modules_Digits__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);__webpack_exports__.default={title:"Example/DigitsArToEn",component:_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.a,decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null))}]};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.a,args)}.bind({});Default.args={children:"٠١٢٣٤٥٦٧٨٩"}},1187:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_modules_Digits__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);__webpack_exports__.default={title:"Example/DigitsArToFa",component:_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.b,decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null))}]};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.b,args)}.bind({});Default.args={children:"٠١٢٣٤٥٦٧٨٩"}},1188:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_modules_Digits__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);__webpack_exports__.default={title:"Example/DigitsEnToFa",component:_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.c,decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null))}]};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.c,args)}.bind({});Default.args={children:"123۴۵۶"}},1189:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_modules_Digits__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);__webpack_exports__.default={title:"Example/DigitsFaToEn",component:_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.d,decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null))}]};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Digits__WEBPACK_IMPORTED_MODULE_1__.d,args)}.bind({});Default.args={children:"123۴۵۶"}},1194:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),persian_tools_module=__webpack_require__(50),HalfSpace_HalfSpace=function HalfSpace(_ref){var children=_ref.children,converted=Object(persian_tools_module.h)(children);if(null==converted)throw new Error;return react_default.a.createElement(react.Fragment,null,converted.toString())};try{HalfSpace_HalfSpace.displayName="HalfSpace",HalfSpace_HalfSpace.__docgenInfo={description:"",displayName:"HalfSpace",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/HalfSpace/index.tsx#HalfSpace"]={docgenInfo:HalfSpace_HalfSpace.__docgenInfo,name:"HalfSpace",path:"src/modules/HalfSpace/index.tsx#HalfSpace"})}catch(__react_docgen_typescript_loader_error){}var StoryWrapper=__webpack_require__(40),Default=(__webpack_exports__.default={title:"Example/HalfSpace",component:HalfSpace_HalfSpace,decorators:[function(Story){return react_default.a.createElement(StoryWrapper.a,null,react_default.a.createElement(Story,null))}]},function Template(args){return react_default.a.createElement(HalfSpace_HalfSpace,args)}.bind({}));Default.args={children:"نمی ‌خواهی درخت ها را ببینیم؟"}},1195:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),persian_tools_module=__webpack_require__(50),NationalId_NationalId=function NationalId(_ref){var children=_ref.children,converted=Object(persian_tools_module.j)(children);if(null==converted)throw new Error;return react_default.a.createElement(react.Fragment,null,converted.toString())};try{NationalId_NationalId.displayName="NationalId",NationalId_NationalId.__docgenInfo={description:"",displayName:"NationalId",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/NationalId/index.tsx#NationalId"]={docgenInfo:NationalId_NationalId.__docgenInfo,name:"NationalId",path:"src/modules/NationalId/index.tsx#NationalId"})}catch(__react_docgen_typescript_loader_error){}var StoryWrapper=__webpack_require__(40),Default=(__webpack_exports__.default={title:"Example/NationalId",component:NationalId_NationalId,argTypes:{children:{defaultValue:"Button"}},decorators:[function(Story){return react_default.a.createElement(StoryWrapper.a,null,react_default.a.createElement(Story,null))}]},function Template(args){return react_default.a.createElement(NationalId_NationalId,args)}.bind({}));Default.args={children:"0499370899"}},1196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Ordinal",(function(){return Ordinal}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(214),persian_tools_module=__webpack_require__(50),NumberToWords_NumberToWords=function NumberToWords(_ref){var children=_ref.children,restProps=Object(objectWithoutProperties.a)(_ref,["children"]),converted=persian_tools_module.a.convert(children,restProps);if(null==converted)throw new Error;return react_default.a.createElement(react.Fragment,null,converted.toString())};try{NumberToWords_NumberToWords.displayName="NumberToWords",NumberToWords_NumberToWords.__docgenInfo={description:"",displayName:"NumberToWords",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}},ordinal:{defaultValue:null,description:"",name:"ordinal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/NumberToWords/index.tsx#NumberToWords"]={docgenInfo:NumberToWords_NumberToWords.__docgenInfo,name:"NumberToWords",path:"src/modules/NumberToWords/index.tsx#NumberToWords"})}catch(__react_docgen_typescript_loader_error){}var StoryWrapper=__webpack_require__(40),NumberToWords_stories_Template=(__webpack_exports__.default={title:"Example/NumberToWords",component:NumberToWords_NumberToWords,decorators:[function(Story){return react_default.a.createElement(StoryWrapper.a,null,react_default.a.createElement(Story,null))}]},function Template(args){return react_default.a.createElement(NumberToWords_NumberToWords,args)}),Default=NumberToWords_stories_Template.bind({});Default.args={children:"500,443"};var Ordinal=NumberToWords_stories_Template.bind({});Ordinal.args={children:"500,443",ordinal:!0}},1197:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"AddCommas",(function(){return AddCommas})),__webpack_require__.d(__webpack_exports__,"Digits",(function(){return Digits})),__webpack_require__.d(__webpack_exports__,"Fuzzy",(function(){return Fuzzy}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(214),persian_tools_module=__webpack_require__(50),WordsToNumber_WordsToNumber=function WordsToNumber(_ref){var children=_ref.children,restProps=Object(objectWithoutProperties.a)(_ref,["children"]),converted=persian_tools_module.b.convert(children,restProps);if(null==converted)throw new Error;return react_default.a.createElement(react.Fragment,null,converted.toString())};try{WordsToNumber_WordsToNumber.displayName="WordsToNumber",WordsToNumber_WordsToNumber.__docgenInfo={description:"",displayName:"WordsToNumber",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}},digits:{defaultValue:null,description:"",name:"digits",required:!1,type:{name:'"en" | "fa"'}},addCommas:{defaultValue:null,description:"",name:"addCommas",required:!1,type:{name:"boolean"}},fuzzy:{defaultValue:null,description:"",name:"fuzzy",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/WordsToNumber/index.tsx#WordsToNumber"]={docgenInfo:WordsToNumber_WordsToNumber.__docgenInfo,name:"WordsToNumber",path:"src/modules/WordsToNumber/index.tsx#WordsToNumber"})}catch(__react_docgen_typescript_loader_error){}var StoryWrapper=__webpack_require__(40),WordsToNumber_stories_Template=(__webpack_exports__.default={title:"Example/WordsToNumber",component:WordsToNumber_WordsToNumber,decorators:[function(Story){return react_default.a.createElement(StoryWrapper.a,null,react_default.a.createElement(Story,null))}]},function Template(args){return react_default.a.createElement(WordsToNumber_WordsToNumber,args)}),Default=WordsToNumber_stories_Template.bind({});Default.args={children:"سه هزار و دویست و پنجاه"};var AddCommas=WordsToNumber_stories_Template.bind({});AddCommas.args={children:"سه هزار و دویست و پنجاه",addCommas:!0};var Digits=WordsToNumber_stories_Template.bind({});Digits.args={children:"سه هزار و دویست و پنجاه",digits:"fa"};var Fuzzy=WordsToNumber_stories_Template.bind({});Fuzzy.args={children:"سه هزار و دویشت و پنجاه",fuzzy:!0}},132:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AddCommas_AddCommas})),__webpack_require__.d(__webpack_exports__,"b",(function(){return RemoveCommas_RemoveCommas}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),persian_tools_module=__webpack_require__(50),AddCommas_AddCommas=function AddCommas(_ref){var children=_ref.children,converted=Object(persian_tools_module.c)(children);if(null==converted)throw new Error;return react_default.a.createElement(react.Fragment,null,converted.toString())};try{AddCommas_AddCommas.displayName="AddCommas",AddCommas_AddCommas.__docgenInfo={description:"",displayName:"AddCommas",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Commas/AddCommas.tsx#AddCommas"]={docgenInfo:AddCommas_AddCommas.__docgenInfo,name:"AddCommas",path:"src/modules/Commas/AddCommas.tsx#AddCommas"})}catch(__react_docgen_typescript_loader_error){}var RemoveCommas_RemoveCommas=function RemoveCommas(_ref){var children=_ref.children,converted=Object(persian_tools_module.i)(children);if(null==converted)throw new Error;return react_default.a.createElement(react.Fragment,null,converted.toString())};try{RemoveCommas_RemoveCommas.displayName="RemoveCommas",RemoveCommas_RemoveCommas.__docgenInfo={description:"",displayName:"RemoveCommas",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Commas/RemoveCommas.tsx#RemoveCommas"]={docgenInfo:RemoveCommas_RemoveCommas.__docgenInfo,name:"RemoveCommas",path:"src/modules/Commas/RemoveCommas.tsx#RemoveCommas"})}catch(__react_docgen_typescript_loader_error){}try{AddCommas.displayName="AddCommas",AddCommas.__docgenInfo={description:"",displayName:"AddCommas",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Commas/index.tsx#AddCommas"]={docgenInfo:AddCommas.__docgenInfo,name:"AddCommas",path:"src/modules/Commas/index.tsx#AddCommas"})}catch(__react_docgen_typescript_loader_error){}try{RemoveCommas.displayName="RemoveCommas",RemoveCommas.__docgenInfo={description:"",displayName:"RemoveCommas",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Commas/index.tsx#RemoveCommas"]={docgenInfo:RemoveCommas.__docgenInfo,name:"RemoveCommas",path:"src/modules/Commas/index.tsx#RemoveCommas"})}catch(__react_docgen_typescript_loader_error){}},40:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),StoryWrapper=(__webpack_require__(1183),__webpack_require__(1184),function StoryWrapper(_ref){var children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"story-wrapper"},children)});__webpack_exports__.a=StoryWrapper;try{StoryWrapper.displayName="StoryWrapper",StoryWrapper.__docgenInfo={description:"",displayName:"StoryWrapper",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/wrapper/StoryWrapper.tsx#StoryWrapper"]={docgenInfo:StoryWrapper.__docgenInfo,name:"StoryWrapper",path:"src/stories/wrapper/StoryWrapper.tsx#StoryWrapper"})}catch(__react_docgen_typescript_loader_error){}},502:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.d43eb968.svg"},503:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.8104e6f5.svg"},504:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.3452b916.svg"},508:function(module,exports,__webpack_require__){__webpack_require__(509),__webpack_require__(728),__webpack_require__(729),__webpack_require__(891),__webpack_require__(1109),__webpack_require__(1142),__webpack_require__(1150),__webpack_require__(1162),__webpack_require__(1164),__webpack_require__(1169),__webpack_require__(1171),module.exports=__webpack_require__(1173)},594:function(module,exports){},677:function(module,exports){},70:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return DigitsArToFa})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DigitsArToEn})),__webpack_require__.d(__webpack_exports__,"c",(function(){return DigitsEnToFa})),__webpack_require__.d(__webpack_exports__,"d",(function(){return DigitsFaToEn}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_persian_tools_persian_tools__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),DigitsArToFa=function DigitsArToFa(_ref){var children=_ref.children,converted=Object(_persian_tools_persian_tools__WEBPACK_IMPORTED_MODULE_1__.e)(children);if(null==converted)throw new Error;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,converted.toString())},DigitsArToEn=function DigitsArToEn(_ref2){var children=_ref2.children,converted=Object(_persian_tools_persian_tools__WEBPACK_IMPORTED_MODULE_1__.d)(children);if(null==converted)throw new Error;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,converted.toString())},DigitsEnToFa=function DigitsEnToFa(_ref3){var children=_ref3.children,converted=Object(_persian_tools_persian_tools__WEBPACK_IMPORTED_MODULE_1__.f)(children);if(null==converted)throw new Error;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,converted.toString())},DigitsFaToEn=function DigitsFaToEn(_ref4){var children=_ref4.children,converted=Object(_persian_tools_persian_tools__WEBPACK_IMPORTED_MODULE_1__.g)(children);if(null==converted)throw new Error;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,converted.toString())};try{DigitsArToFa.displayName="DigitsArToFa",DigitsArToFa.__docgenInfo={description:"",displayName:"DigitsArToFa",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Digits/index.tsx#DigitsArToFa"]={docgenInfo:DigitsArToFa.__docgenInfo,name:"DigitsArToFa",path:"src/modules/Digits/index.tsx#DigitsArToFa"})}catch(__react_docgen_typescript_loader_error){}try{DigitsArToEn.displayName="DigitsArToEn",DigitsArToEn.__docgenInfo={description:"",displayName:"DigitsArToEn",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Digits/index.tsx#DigitsArToEn"]={docgenInfo:DigitsArToEn.__docgenInfo,name:"DigitsArToEn",path:"src/modules/Digits/index.tsx#DigitsArToEn"})}catch(__react_docgen_typescript_loader_error){}try{DigitsEnToFa.displayName="DigitsEnToFa",DigitsEnToFa.__docgenInfo={description:"",displayName:"DigitsEnToFa",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Digits/index.tsx#DigitsEnToFa"]={docgenInfo:DigitsEnToFa.__docgenInfo,name:"DigitsEnToFa",path:"src/modules/Digits/index.tsx#DigitsEnToFa"})}catch(__react_docgen_typescript_loader_error){}try{DigitsFaToEn.displayName="DigitsFaToEn",DigitsFaToEn.__docgenInfo={description:"",displayName:"DigitsFaToEn",props:{children:{defaultValue:null,description:"Main input text",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modules/Digits/index.tsx#DigitsFaToEn"]={docgenInfo:DigitsFaToEn.__docgenInfo,name:"DigitsFaToEn",path:"src/modules/Digits/index.tsx#DigitsFaToEn"})}catch(__react_docgen_typescript_loader_error){}},729:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(380)}},[[508,1,2]]]);
//# sourceMappingURL=main.b4a3bbb791b11d7f1424.bundle.js.map