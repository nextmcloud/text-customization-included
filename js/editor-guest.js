(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{358:function(e,t,a){"use strict";var n=a(68);a.n(n).a},359:function(e,t,a){(e.exports=a(46)(!1)).push([e.i,"form.guest-name-dialog[data-v-754ab6dc] {\n  display: flex;\n  max-width: 200px;\n  margin: auto;\n  margin-top: -2px;\n  padding: 3px;\n}\nform.guest-name-dialog[data-v-754ab6dc] img {\n    margin: 0 !important;\n}\nform.guest-name-dialog input[type=text][data-v-754ab6dc] {\n    flex-grow: 1;\n}\nform.guest-name-dialog label[data-v-754ab6dc] {\n    padding: 3px;\n    height: 32px;\n}\n",""])},364:function(e,t,a){"use strict";a.r(t);var n=a(49),s=a.n(n),i=a(85),o={name:"GuestNameDialog",components:{Avatar:a.n(i).a},directives:{tooltip:s.a},props:{syncService:{type:Object,default:null}},data:function(){return{guestName:"",guestNameBuffered:""}},computed:{avatarUrl:function(){var e=OC.generateUrl("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+e}},beforeMount:function(){this.guestName=this.syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName:function(){var e=this,t=this.syncService.session.guestName;this.syncService.updateSession(this.guestName).then(function(){localStorage.setItem("nick",e.guestName),e.updateBufferedGuestName()}).catch(function(a){e.guestName=t})},updateBufferedGuestName:function(){this.guestNameBuffered=this.guestName}}},u=(a(358),a(5)),r=Object(u.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("text","Enter your name so other users can see who is editing"),expression:"t('text', 'Enter your name so other users can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(t){return t.preventDefault(),e.setGuestName()}}},[a("label",[a("avatar",{attrs:{url:e.avatarUrl,"disable-tooltip":!0,size:32}})],1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":e.t("text","Edit guest name")},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}}),e._v(" "),a("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":e.t("text","Save guest name")}})])},[],!1,null,"754ab6dc",null);t.default=r.exports},68:function(e,t,a){var n=a(359);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(47).default)("2efd7c60",n,!0,{})}}]);
//# sourceMappingURL=editor-guest.js.map?v=bee5bba0399ebafc0656