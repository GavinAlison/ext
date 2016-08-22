﻿Ext.tree.ColumnTree=Ext.extend(Ext.tree.TreePanel,{borderWidth:Ext.isBorderBox?0:2,cls:"x-column-tree",scrollOffset:18,onRender:function(){Ext.tree.ColumnTree.superclass.onRender.apply(this,arguments);this.headers=this.body.createChild({cls:"x-tree-headers "},this.body.dom);var D=this.columns,E;var B=0;for(var C=0,A=D.length;C<A;C++){E=D[C];B+=E.width;this.headers.createChild({cls:"x-tree-hd "+(E.cls?E.cls+"-hd":""),cn:{cls:"x-tree-hd-text",html:E.header},style:"width:"+(E.width-this.borderWidth)+"px;"})}this.headers.createChild({cls:"x-tree-hd ",cn:{html:""},style:"width:"+this.scrollOffset+"px;"});B+=this.scrollOffset;this.headers.createChild({cls:"x-clear"});this.headers.setWidth(B);B-=this.scrollOffset;this.innerCt.setWidth(B)}});Ext.tree.ColumnTreeNodeUI=Ext.extend(Ext.tree.TreeNodeUI,{focus:Ext.emptyFn,renderElements:function(C,M,I,N){this.indentMarkup=C.parentNode?C.parentNode.ui.getChildIndent():"";var O=C.getOwnerTree();var L=O.columns;var K=O.borderWidth;var J=L[0];var D=typeof M.checked=="boolean";if(typeof this.checkModel!="undefined"){D=(!this.onlyLeafCheckable||C.isLeaf())}var A=M.href?M.href:Ext.isGecko?"":"#";var B=['<li class="x-tree-node"><div ext:tree-node-id="',C.id,'" class="x-tree-node-el x-tree-node-leaf x-unselectable ',M.cls,'" unselectable="on">','<div class="x-tree-col" style="width:',J.width-K,'px;">','<span class="x-tree-node-indent">',this.indentMarkup,"</span>",'<img src="',this.emptyIcon,'" class="x-tree-ec-icon x-tree-elbow">','<img src="',M.icon||this.emptyIcon,'" class="x-tree-node-icon',(M.icon?" x-tree-node-inline-icon":""),(M.iconCls?" "+M.iconCls:""),'" unselectable="on">',D?('<input class="x-tree-node-cb" type="checkbox" '+(M.checked?'checked="checked" />':"/>")):"",'<a hidefocus="on" class="x-tree-node-anchor" href="',A,'" tabIndex="1" ',M.hrefTarget?' target="'+M.hrefTarget+'"':"",">",'<span unselectable="on">',C.text||(M[J.dataIndex]?(J.renderer?J.renderer(M[J.dataIndex],C,M):M[J.dataIndex]):""),"&nbsp;</span></a>","</div>"];for(var E=1,H=L.length;E<H;E++){J=L[E];B.push('<div class="x-tree-col ',(J.cls?J.cls:""),'" style="width:',J.width-K,'px;">','<div class="x-tree-col-text">',(M[J.dataIndex]?(J.renderer?J.renderer(M[J.dataIndex],C,M):M[J.dataIndex]):""),"&nbsp;</div>","</div>")}B.push('<div class="x-clear"></div>',"</div>",'<ul class="x-tree-node-ct" style="display:none;"></ul>',"</li>");if(N!==true&&C.nextSibling&&C.nextSibling.ui.getEl()){this.wrap=Ext.DomHelper.insertHtml("beforeBegin",C.nextSibling.ui.getEl(),B.join(""))}else{this.wrap=Ext.DomHelper.insertHtml("beforeEnd",I,B.join(""))}this.elNode=this.wrap.childNodes[0];this.ctNode=this.wrap.childNodes[1];var G=this.elNode.firstChild.childNodes;this.indentNode=G[0];this.ecNode=G[1];this.iconNode=G[2];var F=3;if(D){this.checkbox=G[3];F++}this.anchor=G[F];this.textNode=G[F].firstChild}});Ext.ux.ColumnTreeCheckNodeUI=function(){this.checkModel="multiple";this.onlyLeafCheckable=false;Ext.ux.ColumnTreeCheckNodeUI.superclass.constructor.apply(this,arguments)};Ext.extend(Ext.ux.ColumnTreeCheckNodeUI,Ext.tree.ColumnTreeNodeUI,{renderElements:function(F,C,E,B){var D=F.getOwnerTree();this.checkModel=D.checkModel||this.checkModel;this.onlyLeafCheckable=D.onlyLeafCheckable||false;Ext.ux.ColumnTreeCheckNodeUI.superclass.renderElements.apply(this,arguments);var A=(!this.onlyLeafCheckable||F.isLeaf());if(A){Ext.fly(this.checkbox).on("click",this.check.createDelegate(this,[null]))}},check:function(F){var G=this.node;var C=G.getOwnerTree();this.checkModel=C.checkModel||this.checkModel;if(F===null){F=this.checkbox.checked}else{this.checkbox.checked=F}G.attributes.checked=F;C.fireEvent("check",G,F);if(!this.onlyLeafCheckable){if(this.checkModel=="cascade"||this.checkModel=="parentCascade"){var B=G.parentNode;if(B!==null){this.parentCheck(B,F)}}if(this.checkModel=="cascade"||this.checkModel=="childCascade"){if(!G.expanded&&!G.childrenRendered){G.expand(false,false,this.childCheck)}else{this.childCheck(G)}}}else{if(this.checkModel=="single"){var A=C.getChecked();for(var D=0;D<A.length;D++){var E=A[D];if(E.id!=G.id){E.getUI().checkbox.checked=false;E.attributes.checked=false;C.fireEvent("check",E,false)}}}}},childCheck:function(D){var A=D.attributes;if(!A.leaf){var C=D.childNodes;var E;for(var B=0;B<C.length;B++){E=C[B].getUI();if(E.checkbox.checked^A.checked){E.check(A.checked)}}}},parentCheck:function(C,B){var D=C.getUI().checkbox;if(typeof D=="undefined"){return }if(!(B^D.checked)){return }if(!B&&this.childHasChecked(C)){return }D.checked=B;C.attributes.checked=B;C.getOwnerTree().fireEvent("check",C,B);var A=C.parentNode;if(A!==null){this.parentCheck(A,B)}},childHasChecked:function(B){var C=B.childNodes;if(C||C.length>0){for(var A=0;A<C.length;A++){if(C[A].getUI().checkbox.checked){return true}}}return false},toggleCheck:function(C){var A=this.checkbox;if(A){var B=(C===undefined?!A.checked:C);this.check(B)}}});