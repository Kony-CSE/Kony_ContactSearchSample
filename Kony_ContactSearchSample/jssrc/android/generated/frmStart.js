//Form JS File
function frmStart_button68508228928_onClick_seq0(eventobject) {
    searchContacts.call(this);
};

function frmStart_seg1_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onclickSegRechargeContacts1.call(this);
};

function addWidgetsfrmStart() {
    var button68508228928 = new kony.ui.Button({
        "id": "button68508228928",
        "top": "18dp",
        "left": "276dp",
        "width": "140dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmStart_button68508228928_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var textbox268508228929 = new kony.ui.TextBox2({
        "id": "textbox268508228929",
        "top": "23dp",
        "left": "8dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Serch by name",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Focus",
        "focusSkin": "aaa",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var seg1box = new kony.ui.FlexContainer({
        "id": "seg1box",
        "isVisible": true,
        "orientation": null,
        "width": "90.0%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var seg1 = new kony.ui.SegmentedUI2({
        "id": "seg1",
        "top": "19.56%",
        "left": "4.0%",
        "width": "90%",
        "height": "78.0%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblContacts": "lblContacts",
            "lblPhoneno": "lblPhoneno"
        },
        "Location": "[18,88]",
        "rowTemplate": seg1box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": true,
        "onRowClick": frmStart_seg1_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblContacts = new kony.ui.Label({
        "id": "lblContacts",
        "top": "24.0%",
        "left": "5.0%",
        "width": "42%",
        "height": "40dp",
        "centerY": "45.0%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {
        "textCopyable": false
    });
    var lblPhoneno = new kony.ui.Label({
        "id": "lblPhoneno",
        "top": "39.03%",
        "right": "5.68%",
        "width": "31.36%",
        "height": "40dp",
        "centerY": "44.73%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {
        "textCopyable": false
    });
    seg1box.add(lblContacts, lblPhoneno);
    frmStart.add(button68508228928, textbox268508228929, seg1);
    frmStart.setDefaultUnit(kony.flex.DP);
};

function frmStartGlobals() {
    var MenuId = [];
    frmStart = new kony.ui.Form2({
        "id": "frmStart",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmStart
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};