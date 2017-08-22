/*
 * File: app/controller/SearchMusicController.js
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

Ext.define('MusicApp.controller.SearchMusicController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            myView: 'mynavigationview',
            searchTab: '#searchTab'
        },

        control: {
            "list#styleList": {
                itemtap: 'onStyleListItemTap'
            }
        }
    },

    onStyleListItemTap: function(dataview, index, target, record, e, eOpts) {
         var musicStore = Ext.create('Ext.data.Store',{
                    model:'MusicApp.model.MusicList'
                });

                $.ajax({
                    type: "GET",
                    url: "http://tingapi.ting.baidu.com/v1/restserver/ting",
                    dataType:'jsonp',
                    data: {method:"baidu.ting.billboard.billList",type:record.data.id,size:10,offset:0},
                    success: function(data){
                        var songList = data.song_list;
        //                 console.log(songList);
                		for(var i=0;i<songList.length;i++){

                			//创建模型实例
                            var musicOne = Ext.create('MusicApp.model.MusicList');
                			musicOne.set('name',songList[i].title);
                			musicOne.set('type',songList[i].code_type);
                            musicOne.set('image',songList[i].pic_small);
                			musicOne.set('authorName',songList[i].artist_name);
                			musicOne.set('pubdate',songList[i].publishtime);
                			musicOne.set('songId',songList[i].song_id);
                            musicOne.set('album',songList[i].album_title);
                            musicOne.set('lrc',songList[i].lrclink);
                            musicStore.add(musicOne);
                		}
                    }
                });

        this.getSearchTab().hide();
                this.getMyView().push({

                    title:record.data.title,
                    xtype:'music',
                    store:musicStore,
                     itemTpl: [
                            '<table cellspacing="10">',
                				'<tr><td rowspan="3" width=80><image src="{image}" width=50 height=50></td></tr>',
                				'<tr><td><p style="font:16px Arial,Helvetica,sans-serif">{name}</p></td></tr>',
                				'<tr><td><p style="font:13px Arial,Helvetica,sans-serif">{authorName} - {album}</p></td></tr>',

                			'</table>'
                        ]
                });


    }

});