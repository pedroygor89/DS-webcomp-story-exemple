/*! For license information please see 7.1db38735.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1057:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scopeCss",(function(){return scopeCss}));const _parenSuffix=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",_cssColonHostRe=new RegExp("(-shadowcsshost"+_parenSuffix,"gim"),_cssColonHostContextRe=new RegExp("(-shadowcsscontext"+_parenSuffix,"gim"),_cssColonSlottedRe=new RegExp("(-shadowcssslotted"+_parenSuffix,"gim"),_polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/,_shadowDOMSelectorsRe=[/::shadow/g,/::content/g],_polyfillHostRe=/-shadowcsshost/gim,_colonHostRe=/:host/gim,_colonSlottedRe=/::slotted/gim,_colonHostContextRe=/:host-context/gim,_commentRe=/\/\*\s*[\s\S]*?\*\//g,_commentWithHashRe=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_curlyRe=/([{}])/g,processRules=(input,ruleCallback)=>{const inputWithEscapedBlocks=escapeBlocks(input);let nextBlockIndex=0;return inputWithEscapedBlocks.escapedString.replace(_ruleRe,((...m)=>{const selector=m[2];let content="",suffix=m[4],contentPrefix="";suffix&&suffix.startsWith("{%BLOCK%")&&(content=inputWithEscapedBlocks.blocks[nextBlockIndex++],suffix=suffix.substring("%BLOCK%".length+1),contentPrefix="{");const rule=ruleCallback({selector:selector,content:content});return`${m[1]}${rule.selector}${m[3]}${contentPrefix}${rule.content}${suffix}`}))},escapeBlocks=input=>{const inputParts=input.split(_curlyRe),resultParts=[],escapedBlocks=[];let bracketCount=0,currentBlockParts=[];for(let partIndex=0;partIndex<inputParts.length;partIndex++){const part=inputParts[partIndex];"}"===part&&bracketCount--,bracketCount>0?currentBlockParts.push(part):(currentBlockParts.length>0&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%"),currentBlockParts=[]),resultParts.push(part)),"{"===part&&bracketCount++}currentBlockParts.length>0&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%"));return{escapedString:resultParts.join(""),blocks:escapedBlocks}},convertColonRule=(cssText,regExp,partReplacer)=>cssText.replace(regExp,((...m)=>{if(m[2]){const parts=m[2].split(","),r=[];for(let i=0;i<parts.length;i++){const p=parts[i].trim();if(!p)break;r.push(partReplacer("-shadowcsshost-no-combinator",p,m[3]))}return r.join(",")}return"-shadowcsshost-no-combinator"+m[3]})),colonHostPartReplacer=(host,part,suffix)=>host+part.replace("-shadowcsshost","")+suffix,colonHostContextPartReplacer=(host,part,suffix)=>part.indexOf("-shadowcsshost")>-1?colonHostPartReplacer(host,part,suffix):host+part+suffix+", "+part+" "+host+suffix,selectorNeedsScoping=(selector,scopeSelector)=>{const re=(scopeSelector=>(scopeSelector=scopeSelector.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+scopeSelector+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(scopeSelector);return!re.test(selector)},applyStrictSelectorScope=(selector,scopeSelector,hostSelector)=>{const className="."+(scopeSelector=scopeSelector.replace(/\[is=([^\]]*)\]/g,((_,...parts)=>parts[0]))),_scopeSelectorPart=p=>{let scopedP=p.trim();if(!scopedP)return"";if(p.indexOf("-shadowcsshost-no-combinator")>-1)scopedP=((selector,scopeSelector,hostSelector)=>{if(_polyfillHostRe.lastIndex=0,_polyfillHostRe.test(selector)){const replaceBy=`.${hostSelector}`;return selector.replace(_polyfillHostNoCombinatorRe,((_,selector)=>selector.replace(/([^:]*)(:*)(.*)/,((_,before,colon,after)=>before+replaceBy+colon+after)))).replace(_polyfillHostRe,replaceBy+" ")}return scopeSelector+" "+selector})(p,scopeSelector,hostSelector);else{const t=p.replace(_polyfillHostRe,"");if(t.length>0){const matches=t.match(/([^:]*)(:*)(.*)/);matches&&(scopedP=matches[1]+className+matches[2]+matches[3])}}return scopedP},safeContent=(selector=>{const placeholders=[];let content,index=0;return content=(selector=selector.replace(/(\[[^\]]*\])/g,((_,keep)=>{const replaceBy=`__ph-${index}__`;return placeholders.push(keep),index++,replaceBy}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((_,pseudo,exp)=>{const replaceBy=`__ph-${index}__`;return placeholders.push(exp),index++,pseudo+replaceBy})),{content:content,placeholders:placeholders}})(selector);let res,scopedSelector="",startIndex=0;const sep=/( |>|\+|~(?!=))\s*/g;let shouldScope=!((selector=safeContent.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(res=sep.exec(selector));){const separator=res[1],part=selector.slice(startIndex,res.index).trim();shouldScope=shouldScope||part.indexOf("-shadowcsshost-no-combinator")>-1;scopedSelector+=`${shouldScope?_scopeSelectorPart(part):part} ${separator} `,startIndex=sep.lastIndex}const part=selector.substring(startIndex);return shouldScope=shouldScope||part.indexOf("-shadowcsshost-no-combinator")>-1,scopedSelector+=shouldScope?_scopeSelectorPart(part):part,placeholders=safeContent.placeholders,scopedSelector.replace(/__ph-(\d+)__/g,((_,index)=>placeholders[+index]));var placeholders},scopeSelectors=(cssText,scopeSelectorText,hostSelector,slotSelector,commentOriginalSelector)=>processRules(cssText,(rule=>{let selector=rule.selector,content=rule.content;"@"!==rule.selector[0]?selector=((selector,scopeSelectorText,hostSelector,slotSelector)=>selector.split(",").map((shallowPart=>slotSelector&&shallowPart.indexOf("."+slotSelector)>-1?shallowPart.trim():selectorNeedsScoping(shallowPart,scopeSelectorText)?applyStrictSelectorScope(shallowPart,scopeSelectorText,hostSelector).trim():shallowPart.trim())).join(", "))(rule.selector,scopeSelectorText,hostSelector,slotSelector):(rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document"))&&(content=scopeSelectors(rule.content,scopeSelectorText,hostSelector,slotSelector));return{selector:selector.replace(/\s{2,}/g," ").trim(),content:content}})),scopeCssText=(cssText,scopeId,hostScopeId,slotScopeId,commentOriginalSelector)=>{const slotted=((cssText,slotScopeId)=>{const slotClass="."+slotScopeId+" > ",selectors=[];return cssText=cssText.replace(_cssColonSlottedRe,((...m)=>{if(m[2]){const compound=m[2].trim(),suffix=m[3],slottedSelector=slotClass+compound+suffix;let prefixSelector="";for(let i=m[4]-1;i>=0;i--){const char=m[5][i];if("}"===char||","===char)break;prefixSelector=char+prefixSelector}const orgSelector=prefixSelector+slottedSelector,addedSelector=`${prefixSelector.trimRight()}${slottedSelector.trim()}`;if(orgSelector.trim()!==addedSelector.trim()){const updatedSelector=`${addedSelector}, ${orgSelector}`;selectors.push({orgSelector:orgSelector,updatedSelector:updatedSelector})}return slottedSelector}return"-shadowcsshost-no-combinator"+m[3]})),{selectors:selectors,cssText:cssText}})(cssText=(cssText=>convertColonRule(cssText,_cssColonHostContextRe,colonHostContextPartReplacer))(cssText=(cssText=>convertColonRule(cssText,_cssColonHostRe,colonHostPartReplacer))(cssText=cssText.replace(_colonHostContextRe,"-shadowcsscontext").replace(_colonHostRe,"-shadowcsshost").replace(_colonSlottedRe,"-shadowcssslotted"))),slotScopeId);return cssText=(cssText=>_shadowDOMSelectorsRe.reduce(((result,pattern)=>result.replace(pattern," ")),cssText))(cssText=slotted.cssText),scopeId&&(cssText=scopeSelectors(cssText,scopeId,hostScopeId,slotScopeId)),{cssText:(cssText=(cssText=cssText.replace(/-shadowcsshost-no-combinator/g,`.${hostScopeId}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:slotted.selectors}},scopeCss=(cssText,scopeId,commentOriginalSelector)=>{const hostScopeId=scopeId+"-h",slotScopeId=scopeId+"-s",commentsWithHash=cssText.match(_commentWithHashRe)||[];cssText=(input=>input.replace(_commentRe,""))(cssText);const orgSelectors=[];if(commentOriginalSelector){const processCommentedSelector=rule=>{const placeholder=`/*!@___${orgSelectors.length}___*/`,comment=`/*!@${rule.selector}*/`;return orgSelectors.push({placeholder:placeholder,comment:comment}),rule.selector=placeholder+rule.selector,rule};cssText=processRules(cssText,(rule=>"@"!==rule.selector[0]?processCommentedSelector(rule):rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document")?(rule.content=processRules(rule.content,processCommentedSelector),rule):rule))}const scoped=scopeCssText(cssText,scopeId,hostScopeId,slotScopeId);return cssText=[scoped.cssText,...commentsWithHash].join("\n"),commentOriginalSelector&&orgSelectors.forEach((({placeholder:placeholder,comment:comment})=>{cssText=cssText.replace(placeholder,comment)})),scoped.slottedSelectors.forEach((slottedSelector=>{cssText=cssText.replace(slottedSelector.orgSelector,slottedSelector.updatedSelector)})),cssText}}}]);
//# sourceMappingURL=7.1db38735.iframe.bundle.js.map