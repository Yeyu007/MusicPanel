/*
 * File: app/model/MusicList.js
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

Ext.define('MusicApp.model.MusicList', {
    extend: 'Ext.data.Model',
    alias: 'model.music',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'type',
                type: 'string'
            },
            {
                name: 'authorName',
                type: 'string'
            },
            {
                name: 'image',
                type: 'string'
            },
            {
                name: 'pubdate',
                type: 'string'
            },
            {
                name: 'publisher',
                type: 'string'
            },
            {
                name: 'singer',
                type: 'string'
            },
            {
                name: 'songId',
                type: 'string'
            },
            {
                name: 'album',
                type: 'string'
            }
        ]
    }
});