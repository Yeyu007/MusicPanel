/*
 * File: app/view/MainView.js
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

Ext.define('MusicApp.view.MainView', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',

    requires: [
        'Ext.dataview.List',
        'Ext.Toolbar',
        'Ext.field.Search',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'mainView',
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                itemId: 'list',
                emptyText: 'No Matching Items',
                itemTpl: [
                    '<div>{firstName} {lastName}</div>'
                ],
                store: 'People',
                grouped: true,
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        itemId: 'toolbar',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'searchfield',
                                height: 48,
                                itemId: 'searchField',
                                width: 320,
                                label: '',
                                name: 'mysearchfield'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});