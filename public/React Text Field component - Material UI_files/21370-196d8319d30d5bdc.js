"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21370],{576657:function(e,t,n){n.d(t,{R:function(){return u},g:function(){return r}});var o=n(827378),u=o.createContext(null);function r(){var e=o.useContext(u);if(null==e)throw Error("No TabsContext provided");return e}},855451:function(e,t,n){n.d(t,{B:function(){return l}});var o=n(25778),u=n(827378),r=n(402045),i=n(651265);function l(e,t){var n=u.useContext(i.s);if(null===n)throw Error("useCompoundItem must be used within a useCompoundParent");var l=n.registerItem,a=u.useState("function"==typeof e?void 0:e),c=(0,o.Z)(a,2),s=c[0],d=c[1];return(0,r.Z)(function(){var n=l(e,t),o=n.id,u=n.deregister;return d(o),u},[l,t,e]),{id:s,index:void 0!==s?n.getItemIndex(s):-1,totalItemCount:n.totalSubitemCount}}},651265:function(e,t,n){n.d(t,{Y:function(){return f},s:function(){return d}});var o=n(25778),u=n(379002),r=n.n(u),i=n(199981),l=n.n(i),a=n(751506),c=n.n(a),s=n(827378),d=s.createContext(null);function f(){var e=s.useState(new(l())),t=(0,o.Z)(e,2),n=t[0],u=t[1],i=s.useRef(new(c())),a=s.useCallback(function(e){i.current.delete(e),u(function(t){var n=new(l())(t);return n.delete(e),n})},[]),d=s.useCallback(function(e,t){var n;return n="function"==typeof e?e(i.current):e,i.current.add(n),u(function(e){var o=new(l())(e);return o.set(n,t),o}),{id:n,deregister:function(){return a(n)}}},[a]),f=s.useMemo(function(){var e;return(e=r()(n.keys()).map(function(e){var t=n.get(e);return{key:e,subitem:t}})).sort(function(e,t){var n=e.subitem.ref.current,o=t.subitem.ref.current;return null===n||null===o||n===o?0:n.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}),new(l())(e.map(function(e){return[e.key,e.subitem]}))},[n]),v=s.useCallback(function(e){return r()(f.keys()).indexOf(e)},[f]);return{contextValue:s.useMemo(function(){return{getItemIndex:v,registerItem:d,totalSubitemCount:n.size}},[v,d,n.size]),subitems:f}}d.displayName="CompoundComponentContext"},286380:function(e,t,n){n.d(t,{x:function(){return g}});var o=n(295649),u=n(827378),r=n(734501),i=n(678340),l=n(576657),a=n(881953),c=n(855451),s=n(612898),d=n(7581),f=n(476593);function v(e){return e.size}function g(e){var t=e.value,n=e.rootRef,g=e.disabled,m=void 0!==g&&g,b=e.id,h=u.useRef(null),C=(0,r.Z)(b),I=(0,l.g)(),p=I.value,x=I.selectionFollowsFocus,Z=I.getTabPanelId,k=u.useMemo(function(){return{disabled:m,ref:h,id:C}},[m,h,C]),V=(0,c.B)(null!=t?t:v,k),R=V.id,F=V.index,w=V.totalItemCount,P=(0,s.J)({item:R}),T=P.getRootProps,M=P.highlighted,S=P.selected,y=(0,d.U)({disabled:m,focusableWhenDisabled:!x,type:"button"}),E=y.getRootProps,N=y.rootRef,z=y.active,D=y.focusVisible,_=y.setFocusVisible,O=(0,i.Z)(h,n,N),j=void 0!==R?Z(R):void 0;return{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a._)(e),n=(0,f.f)(T,E);return(0,o.Z)((0,o.Z)((0,o.Z)({},e),n(t)),{},{role:"tab","aria-controls":j,"aria-selected":S,id:C,ref:O})},active:z,focusVisible:D,highlighted:M,index:F,rootRef:O,selected:S||R===p,setFocusVisible:_,totalTabsCount:w}}},487513:function(e,t,n){n.d(t,{X:function(){return l}});var o=n(827378),u=n(576657),r=n(651265),i=n(824246);function l(e){var t=e.value,n=e.children,l=t.direction,a=t.getItemIndex,c=t.onSelected,s=t.orientation,d=t.registerItem,f=t.registerTabIdLookup,v=t.selectionFollowsFocus,g=t.totalSubitemCount,m=t.value,b=t.getTabId,h=t.getTabPanelId,C=o.useMemo(function(){return{getItemIndex:a,registerItem:d,totalSubitemCount:g}},[d,a,g]),I=o.useMemo(function(){return{direction:l,getTabId:b,getTabPanelId:h,onSelected:c,orientation:s,registerTabIdLookup:f,selectionFollowsFocus:v,value:m}},[l,b,h,c,s,f,v,m]);return(0,i.jsx)(r.s.Provider,{value:C,children:(0,i.jsx)(u.R.Provider,{value:I,children:n})})}},255328:function(e,t,n){n.d(t,{Y:function(){return a}});var o=n(295649),u=n(25778),r=n(827378),i=n(775033),l=n(651265);function a(e){var t=e.value,n=e.defaultValue,a=e.onChange,c=e.orientation,s=e.direction,d=e.selectionFollowsFocus,f=(0,i.Z)({controlled:t,default:n,name:"Tabs",state:"value"}),v=(0,u.Z)(f,2),g=v[0],m=v[1],b=r.useCallback(function(e,t){m(t),null==a||a(e,t)},[a,m]),h=(0,l.Y)(),C=h.subitems,I=h.contextValue,p=r.useRef(function(){}),x=r.useCallback(function(e){var t;return null===(t=C.get(e))||void 0===t?void 0:t.id},[C]),Z=r.useCallback(function(e){return p.current(e)},[]),k=r.useCallback(function(e){p.current=e},[]);return{contextValue:(0,o.Z)({direction:void 0===s?"ltr":s,getTabId:Z,getTabPanelId:x,onSelected:b,orientation:void 0===c?"horizontal":c,registerTabIdLookup:k,selectionFollowsFocus:void 0!==d&&d,value:g},I)}}},953156:function(e,t,n){n.d(t,{W:function(){return l}});var o=n(827378),u=n(150920),r=n(651265),i=n(824246);function l(e){var t=e.value,n=e.children,l=t.dispatch,a=t.getItemIndex,c=t.getItemState,s=t.registerItem,d=t.totalSubitemCount,f=o.useMemo(function(){return{dispatch:l,getItemState:c,getItemIndex:a}},[l,a,c]),v=o.useMemo(function(){return{getItemIndex:a,registerItem:s,totalSubitemCount:d}},[s,a,d]);return(0,i.jsx)(r.s.Provider,{value:v,children:(0,i.jsx)(u.Z.Provider,{value:f,children:n})})}},794820:function(e,t,n){n.d(t,{F:function(){return g}});var o=n(295649),u=n(379002),r=n.n(u),i=n(827378),l=n(576657),a=n(132594),c=n(651265),s=n(35141),d=n(619124),f=n(492045);function v(e,t){if(t.type===a.m.valueChange)return(0,o.Z)((0,o.Z)({},e),{},{highlightedValue:t.value});var n=(0,d.R$)(e,t),u=t.context.selectionFollowsFocus;if(t.type===f.F.itemsChange){if(n.selectedValues.length>0)return(0,o.Z)((0,o.Z)({},n),{},{highlightedValue:n.selectedValues[0]});(0,d.Rl)(null,"reset",t.context)}return u&&null!=n.highlightedValue?(0,o.Z)((0,o.Z)({},n),{},{selectedValues:[n.highlightedValue]}):n}function g(e){var t,n=e.rootRef,u=(0,l.g)(),d=u.direction,f=u.onSelected,g=u.orientation,m=void 0===g?"horizontal":g,b=u.value,h=u.registerTabIdLookup,C=u.selectionFollowsFocus,I=(0,c.Y)(),p=I.subitems,x=I.contextValue;h(i.useCallback(function(e){var t;return null===(t=p.get(e))||void 0===t?void 0:t.id},[p]));var Z=i.useMemo(function(){return r()(p.keys())},[p]),k=i.useCallback(function(e){var t,n;return null==e?null:null!==(t=null===(n=p.get(e))||void 0===n?void 0:n.ref.current)&&void 0!==t?t:null},[p]),V="rtl"===(void 0===d?"ltr":d),R=i.useCallback(function(e,t){var n;f(e,null!==(n=t[0])&&void 0!==n?n:null)},[f]),F=i.useMemo(function(){return void 0===b?{}:null!=b?{selectedValues:[b]}:{selectedValues:[]}},[b]),w=i.useCallback(function(e){var t,n;return null!==(t=null===(n=p.get(e))||void 0===n?void 0:n.disabled)&&void 0!==t&&t},[p]),P=(0,s.s)({controlledProps:F,disabledItemsFocusable:!C,focusManagement:"DOM",getItemDomElement:k,isItemDisabled:w,items:Z,rootRef:n,onChange:R,orientation:"vertical"===m?"vertical":V?"horizontal-rtl":"horizontal-ltr",reducerActionContext:i.useMemo(function(){return{selectionFollowsFocus:C||!1}},[C]),selectionMode:"single",stateReducer:v}),T=P.contextValue,M=P.dispatch,S=P.getRootProps,y=P.state,E=y.highlightedValue,N=P.rootRef;return i.useEffect(function(){void 0!==b&&null!=b&&M({type:a.m.valueChange,value:b})},[M,b]),{contextValue:i.useMemo(function(){return(0,o.Z)((0,o.Z)({},x),T)},[x,T]),dispatch:M,getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)((0,o.Z)((0,o.Z)({},e),S(e)),{},{"aria-orientation":"vertical"===m?"vertical":void 0,role:"tablist"})},highlightedValue:E,isRtl:V,orientation:m,rootRef:N,selectedValue:null!==(t=y.selectedValues[0])&&void 0!==t?t:null}}},132594:function(e,t,n){n.d(t,{m:function(){return o}});var o={valueChange:"valueChange"}},476593:function(e,t,n){n.d(t,{f:function(){return u}});var o=n(295649);function u(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=(0,o.Z)((0,o.Z)({},n),e(n));return(0,o.Z)((0,o.Z)({},u),t(u))}}}}]);