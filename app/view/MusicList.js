/*
 * File: app/view/MusicList.js
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

Ext.define('MusicApp.view.MusicList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.music',

    config: {
        listeners: [
            {
                fn: 'onListItemTap',
                event: 'itemtap'
            }
        ]
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {

        $.ajax({
            type: "GET",
            url: "http://ting.baidu.com/data/music/links",
            dataType:'jsonp',
            data: {songIds:record.data.songId},
            success: function(data){
        //         console.log(data);
                var oneSong = data.data.songList[0];
                if(oneSong != undefined){
                    $.ajax({
                        url:oneSong.lrcLink,
                        dataType:'text',
                        data:'',
                        jsonp:'callback',
                        success:function(result) {
                            var db = Ext.create('MusicApp.model.DbModel');
                            db.set('name',oneSong.songName);
                            db.set('singer',oneSong.artistName);
                            db.set('src',oneSong.songLink);
                            db.set('img',oneSong.songPicSmall);
                            db.set('lrc',result);
                            window.localStorage.setItem(record.data.songId,JSON.stringify(db.data));
                            getPlater().refreshMusicList();
//                          player.playFinal();
                        },
                        timeout:3000
                    });
                }

            }
        });




    }

});