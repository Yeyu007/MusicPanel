/*
 * File: app/store/SingerStore.js
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

Ext.define('DBMusic.store.SingerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.singer',

    requires: [
        'DBMusic.model.AblumList'
    ],

    config: {
        data: [
            {
                title: '中国内地'
            },
            {
                title: '中国香港'
            },
            {
                title: '中国台湾'
            },
            {
                title: '欧美国家'
            },
            {
                title: '韩国'
            },
            {
                title: '日本'
            },
            {
                title: '其他'
            },
            
        ],
        model: 'DBMusic.model.AblumList',
        storeId: 'SingerStore'
    }
});