/*
 * File: app/view/MyNavigationView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MusicApp.view.MyNavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mynavigationview',

    requires: [
        'MusicApp.view.StyleList',
        'MusicApp.view.AreaList',
        'MusicApp.view.SingerList',
        'Ext.navigation.Bar',
        'Ext.field.Search',
        'Ext.tab.Panel',
        'Ext.dataview.List',
        'Ext.tab.Bar'
    ],

    config: {
        height: '85%',
        width: '100%',
        navigationBar: {
            docked: 'top',
            itemId: 'mynavigationbar',
            width: '100%',
            items: [
                {
                    xtype: 'searchfield',
                    centered: false,
                    height: 48,
                    id: 'searchTab',
                    itemId: 'searchField',
                    width: '100%',
                    label: '',
                    labelWidth: 0,
                    name: 'mysearchfield',
                    placeHolder: '  搜索音乐、歌手等'
                }
            ]
        },
        items: [
            {
                xtype: 'tabpanel',
                height: '100%',
                layout: {
                    type: 'card',
                    animation: 'fade'
                },
                items: [
                    {
                        xtype: 'styleList',
                        title: '风格'
                    },
                    {
                        xtype: 'areaList',
                        title: '地区'
                    },
                    {
                        xtype: 'singerList',
                        title: '歌手'
                    }
                ],
                tabBar: {
                    docked: 'top',
                    height: '11%',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    }
                }
            }
        ],
        listeners: [
            {
                fn: 'onNavigationviewBack',
                event: 'back'
            }
        ]
    },

    onNavigationviewBack: function(navigationview, eOpts) {
         this.getSearchTab().hide();
    }

});