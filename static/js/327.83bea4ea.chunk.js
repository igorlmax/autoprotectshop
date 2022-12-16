"use strict";(self.webpackChunkinsurence_quote=self.webpackChunkinsurence_quote||[]).push([[327],{1327:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var r=t(9439),o=t(2791),a=t(3878),i=t(9199),s=t(181),d=t(5267);var c=t(4942),l=t(3366),u=t(7462),p=(t(8457),t(8182)),h=t(4419),f=t(277),x=t(5513),m=t(6752),Z=t(5354),g=t(6780),v=t(4142),b=t(7933),y=t(5878),j=t(1217);function w(e){return(0,j.Z)("MuiCollapse",e)}(0,y.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var C=t(184),R=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],S=(0,f.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.orientation],"entered"===t.state&&n.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,u.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===t.state&&(0,u.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})})),E=(0,f.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,n){return n.wrapper}})((function(e){var n=e.ownerState;return(0,u.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),M=(0,f.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,n){return n.wrapperInner}})((function(e){var n=e.ownerState;return(0,u.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),A=o.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiCollapse"}),r=t.addEndListener,a=t.children,i=t.className,s=t.collapsedSize,d=void 0===s?"0px":s,f=t.component,y=t.easing,j=t.in,A=t.onEnter,N=t.onEntered,q=t.onEntering,I=t.onExit,P=t.onExited,k=t.onExiting,G=t.orientation,T=void 0===G?"vertical":G,z=t.style,H=t.timeout,W=void 0===H?Z.x9.standard:H,D=t.TransitionComponent,V=void 0===D?m.ZP:D,B=(0,l.Z)(t,R),L=(0,u.Z)({},t,{orientation:T,collapsedSize:d}),F=function(e){var n=e.orientation,t=e.classes,r={root:["root","".concat(n)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(n)],wrapperInner:["wrapperInner","".concat(n)]};return(0,h.Z)(r,w,t)}(L),_=(0,v.Z)(),O=o.useRef(),Q=o.useRef(null),J=o.useRef(),K="number"===typeof d?"".concat(d,"px"):d,U="horizontal"===T,X=U?"width":"height";o.useEffect((function(){return function(){clearTimeout(O.current)}}),[]);var Y=o.useRef(null),$=(0,b.Z)(n,Y),ee=function(e){return function(n){if(e){var t=Y.current;void 0===n?e(t):e(t,n)}}},ne=function(){return Q.current?Q.current[U?"clientWidth":"clientHeight"]:0},te=ee((function(e,n){Q.current&&U&&(Q.current.style.position="absolute"),e.style[X]=K,A&&A(e,n)})),re=ee((function(e,n){var t=ne();Q.current&&U&&(Q.current.style.position="");var r=(0,g.C)({style:z,timeout:W,easing:y},{mode:"enter"}),o=r.duration,a=r.easing;if("auto"===W){var i=_.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),J.current=i}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[X]="".concat(t,"px"),e.style.transitionTimingFunction=a,q&&q(e,n)})),oe=ee((function(e,n){e.style[X]="auto",N&&N(e,n)})),ae=ee((function(e){e.style[X]="".concat(ne(),"px"),I&&I(e)})),ie=ee(P),se=ee((function(e){var n=ne(),t=(0,g.C)({style:z,timeout:W,easing:y},{mode:"exit"}),r=t.duration,o=t.easing;if("auto"===W){var a=_.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),J.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[X]=K,e.style.transitionTimingFunction=o,k&&k(e)}));return(0,C.jsx)(V,(0,u.Z)({in:j,onEnter:te,onEntered:oe,onEntering:re,onExit:ae,onExited:ie,onExiting:se,addEndListener:function(e){"auto"===W&&(O.current=setTimeout(e,J.current||0)),r&&r(Y.current,e)},nodeRef:Y,timeout:"auto"===W?null:W},B,{children:function(e,n){return(0,C.jsx)(S,(0,u.Z)({as:f,className:(0,p.Z)(F.root,i,{entered:F.entered,exited:!j&&"0px"===K&&F.hidden}[e]),style:(0,u.Z)((0,c.Z)({},U?"minWidth":"minHeight",K),z),ownerState:(0,u.Z)({},L,{state:e}),ref:$},n,{children:(0,C.jsx)(E,{ownerState:(0,u.Z)({},L,{state:e}),className:F.wrapper,ref:Q,children:(0,C.jsx)(M,{ownerState:(0,u.Z)({},L,{state:e}),className:F.wrapperInner,children:a})})}))}}))}));A.muiSupportAuto=!0;var N=A,q=t(6650);var I=o.createContext({}),P=t(4938);function k(e){return(0,j.Z)("MuiAccordion",e)}var G=(0,y.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),T=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],z=(0,f.ZP)(q.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,c.Z)({},"& .".concat(G.region),n.region),n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})((function(e){var n,t=e.theme,r={duration:t.transitions.duration.shortest};return n={position:"relative",transition:t.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},(0,c.Z)(n,"&.".concat(G.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,c.Z)(n,"&.".concat(G.disabled),{backgroundColor:(t.vars||t).palette.action.disabledBackground}),n}),(function(e){var n=e.theme,t=e.ownerState;return(0,u.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(n.vars||n).shape.borderRadius,borderBottomRightRadius:(n.vars||n).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&(0,c.Z)({},"&.".concat(G.expanded),{margin:"16px 0"}))})),H=o.forwardRef((function(e,n){var t,c=(0,x.Z)({props:e,name:"MuiAccordion"}),f=c.children,m=c.className,Z=c.defaultExpanded,g=void 0!==Z&&Z,v=c.disabled,b=void 0!==v&&v,y=c.disableGutters,j=void 0!==y&&y,w=c.expanded,R=c.onChange,S=c.square,E=void 0!==S&&S,M=c.TransitionComponent,A=void 0===M?N:M,q=c.TransitionProps,G=(0,l.Z)(c,T),H=(0,P.Z)({controlled:w,default:g,name:"Accordion",state:"expanded"}),W=(0,r.Z)(H,2),D=W[0],V=W[1],B=o.useCallback((function(e){V(!D),R&&R(e,!D)}),[D,R,V]),L=o.Children.toArray(f),F=(t=L,(0,a.Z)(t)||(0,i.Z)(t)||(0,s.Z)(t)||(0,d.Z)()),_=F[0],O=F.slice(1),Q=o.useMemo((function(){return{expanded:D,disabled:b,disableGutters:j,toggle:B}}),[D,b,j,B]),J=(0,u.Z)({},c,{square:E,disabled:b,disableGutters:j,expanded:D}),K=function(e){var n=e.classes,t={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,h.Z)(t,k,n)}(J);return(0,C.jsxs)(z,(0,u.Z)({className:(0,p.Z)(K.root,m),ref:n,ownerState:J,square:E},G,{children:[(0,C.jsx)(I.Provider,{value:Q,children:_}),(0,C.jsx)(A,(0,u.Z)({in:D,timeout:"auto"},q,{children:(0,C.jsx)("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region",className:K.region,children:O})}))]}))})),W=t(5953),D=t(803),V=t(4565),B=t(753);function L(e){return(0,j.Z)("MuiAccordionSummary",e)}var F=(0,y.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),_=["children","className","expandIcon","focusVisibleClassName","onClick"],O=(0,f.ZP)(B.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme,r=e.ownerState,o={duration:t.transitions.duration.shortest};return(0,u.Z)((n={display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],o)},(0,c.Z)(n,"&.".concat(F.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,c.Z)(n,"&.".concat(F.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,c.Z)(n,"&:hover:not(.".concat(F.disabled,")"),{cursor:"pointer"}),n),!r.disableGutters&&(0,c.Z)({},"&.".concat(F.expanded),{minHeight:64}))})),Q=(0,f.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,n){return n.content}})((function(e){var n=e.theme,t=e.ownerState;return(0,u.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&(0,c.Z)({transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest})},"&.".concat(F.expanded),{margin:"20px 0"}))})),J=(0,f.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,n){return n.expandIconWrapper}})((function(e){var n=e.theme;return(0,c.Z)({display:"flex",color:(n.vars||n).palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})},"&.".concat(F.expanded),{transform:"rotate(180deg)"})})),K=o.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiAccordionSummary"}),r=t.children,a=t.className,i=t.expandIcon,s=t.focusVisibleClassName,d=t.onClick,c=(0,l.Z)(t,_),f=o.useContext(I),m=f.disabled,Z=void 0!==m&&m,g=f.disableGutters,v=f.expanded,b=f.toggle,y=(0,u.Z)({},t,{expanded:v,disabled:Z,disableGutters:g}),j=function(e){var n=e.classes,t=e.expanded,r=e.disabled,o=e.disableGutters,a={root:["root",t&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,h.Z)(a,L,n)}(y);return(0,C.jsxs)(O,(0,u.Z)({focusRipple:!1,disableRipple:!0,disabled:Z,component:"div","aria-expanded":v,className:(0,p.Z)(j.root,a),focusVisibleClassName:(0,p.Z)(j.focusVisible,s),onClick:function(e){b&&b(e),d&&d(e)},ref:n,ownerState:y},c,{children:[(0,C.jsx)(Q,{className:j.content,ownerState:y,children:r}),i&&(0,C.jsx)(J,{className:j.expandIconWrapper,ownerState:y,children:i})]}))}));function U(e){return(0,j.Z)("MuiAccordionDetails",e)}(0,y.Z)("MuiAccordionDetails",["root"]);var X=["className"],Y=(0,f.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),$=o.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiAccordionDetails"}),r=t.className,o=(0,l.Z)(t,X),a=t,i=function(e){var n=e.classes;return(0,h.Z)({root:["root"]},U,n)}(a);return(0,C.jsx)(Y,(0,u.Z)({className:(0,p.Z)(i.root,r),ref:n,ownerState:a},o))})),ee=t(1131),ne=t(8331),te=(0,t(225).Z)(H)((function(){return{backgroundColor:"#f7f7f9",boxShadow:"none"}})),re=function(){var e=o.useState(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1],i=(0,ne.useTranslation)(),s=((0,v.Z)(),function(e){return function(n,t){a(!!t&&e)}});return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(W.ZP,{container:!0,style:{backgroundColor:"#f7f7f9"},children:(0,C.jsxs)(D.Z,{maxWidth:"lg",style:{height:540,marginTop:"35px"},children:[(0,C.jsx)(V.Z,{align:"center",variant:"h2",pb:3,children:"FAQs"}),(0,C.jsxs)(te,{expanded:"panel1"===t,onChange:s("panel1"),children:[(0,C.jsx)(K,{expandIcon:(0,C.jsx)(ee.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:(0,C.jsx)(V.Z,{children:i("fq.1panelHeading")})}),(0,C.jsx)($,{children:(0,C.jsx)(V.Z,{children:i("fq.1panelParagraph")})})]}),(0,C.jsxs)(te,{expanded:"panel2"===t,onChange:s("panel2"),children:[(0,C.jsx)(K,{expandIcon:(0,C.jsx)(ee.Z,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:(0,C.jsx)(V.Z,{children:i("fq.2panelHeading")})}),(0,C.jsx)($,{children:(0,C.jsx)(V.Z,{children:i("fq.2panelParagraph")})})]}),(0,C.jsxs)(te,{expanded:"panel3"===t,onChange:s("panel3"),children:[(0,C.jsx)(K,{expandIcon:(0,C.jsx)(ee.Z,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:(0,C.jsx)(V.Z,{children:i("fq.3panelHeading")})}),(0,C.jsx)($,{children:(0,C.jsx)(V.Z,{children:i("fq.3panelParagraph")})})]}),(0,C.jsxs)(te,{expanded:"panel4"===t,onChange:s("panel4"),children:[(0,C.jsx)(K,{expandIcon:(0,C.jsx)(ee.Z,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:(0,C.jsx)(V.Z,{children:i("fq.4panelHeading")})}),(0,C.jsx)($,{children:(0,C.jsx)(V.Z,{children:i("fq.4panelParagraph")})})]}),(0,C.jsxs)(te,{expanded:"panel5"===t,onChange:s("panel5"),children:[(0,C.jsx)(K,{expandIcon:(0,C.jsx)(ee.Z,{}),"aria-controls":"panel5bh-content",id:"panel5bh-header",children:(0,C.jsx)(V.Z,{children:i("fq.5panelHeading")})}),(0,C.jsx)($,{children:(0,C.jsx)(V.Z,{children:i("fq.5panelParagraph")})})]})]})})})}},1131:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=i}}]);
//# sourceMappingURL=327.83bea4ea.chunk.js.map