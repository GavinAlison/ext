/**
 * Created by AVICINFO on 2016/7/12.
 */
var pws = new Ext.form.ComboBox({
    store: new Ext.data.SimpleStore({fields:[],data:[[]]}),
    applyTo: 'use_dept',
    width: 230,
    typeAhead: true,
    mode: 'local',
    triggerAction: 'all',
    editable: false,
    tpl: '<div style="height:200px"><div id="pws_tree"></div></div>',
    listeners: {
        expand: function(){
            pws_tree.render('pws_tree');
        }

    }
});
//创建树形结构
var pws_tree = new Ext.tree.TreePanel({
    border: false,
    autoScroll: true,
    animate: true,
    autoWidth: true,
    autoHeight: true,
    width:300,
    containerScroll: true,
    loader: new Ext.tree.TreeLoader({
        dataUrl:"${appPath}manage/organization/deptJson.dd"
    }),
    listeners: {
        click: function(node, event){
            if(node.getDepth()==0) return;
            var value = $("use_dept_id").value;
            if(pws.getValue() != ''){
                if(pws.getValue().indexOf(node.text) != -1){
                    pws.setValue(pws.getValue().replace(","+node.text,""));
                    pws.setValue(pws.getValue().replace(node.text+",",""));
                    pws.setValue(pws.getValue().replace(node.text,""));
                    $("use_dept_id").value = value.replace(","+node.id.split("_")[1],"");
                    $("use_dept_id").value = value.replace(node.id.split("_")[1]+",","");
                    $("use_dept_id").value = value.replace(node.id.split("_")[1],"");
                }else{
                    pws.setValue(pws.getValue()+","+node.text);
                    $("use_dept_id").value = $("use_dept_id").value+","+node.id.split("_")[1];
                }
            }else{
                pws.setValue(node.text);
                $("use_dept_id").value =node.id.split("_")[1];
            }
            //pws.collapse();
        },
        checkchange: function(node, checked){
            if(checked){
                node.getUI().addClass('complete');
            }else{
                node.getUI().removeClass('complete');
            }
        }
    }
});
var pws_root = new Ext.tree.AsyncTreeNode({
    id: 'dept_1',   //节点id
    text: '选择车间' //节点名称
});
pws_tree.setRootNode(pws_root);