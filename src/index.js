Ext.ns('iw');

iw.UI = Ext.extend(Ext.Panel, {
  fullscreen: true,
  layout: 'card',
  initComponent: function () {
    this.navigationBar = new Ext.Toolbar({
      ui: 'dark',
      dock: 'top',
      title: 'iWriteDown'
    });
    this.dockedItems = [this.navigationBar];
    iw.UI.superclass.initComponent.call(this);
  },
});

iw.Main = {
  init: function () {
    this.ui = new iw.UI();
  }
}
Ext.regApplication({
  name: 'iWriteDown',
  phoneStartupScreen: 'resources/img/phone-startup.png',
  phoneIcon: 'resources/img/apple-touch-icon.png',
  glossOnIcon: false,
  launch: function () {
    iw.Main.init();
  }
});