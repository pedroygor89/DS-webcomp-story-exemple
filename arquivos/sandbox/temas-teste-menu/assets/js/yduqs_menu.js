/* fetch('./json/videos.json')
    .then(response => response.json())
    .then(json => {
        const menu = document.querySelector('#menu');
        menu.initialize(json);
}) */

const detailedMenu = document.querySelector('#menu');
const finalList = { 'modules': [] };

let modulesWithVideos = document.querySelectorAll('module');

modulesWithVideos.forEach((module) => {
    preModuleId = module.getAttribute('id');
    let moduleId = preModuleId.replace("modulo", "");
    moduleId = parseInt(moduleId);

    if (preModuleId !== 'apresentacao' && preModuleId !== 'conclusao') {
        const htmlVideos = module.querySelectorAll('yduqs-video-player');
        const playlistVideos = module.querySelectorAll('yduqs-module-video');
        let indexVideoCounter = 0;
        let playlistVideoCounter = 0;

        htmlVideos.forEach(video => {

            let insideModuleVideo = video.closest('.container');

            if (insideModuleVideo !== null) {
                let isInsideModuleVideo = insideModuleVideo.getElementsByTagName('yduqs-gallery-video');
                isItThough = isInsideModuleVideo.length;

                if (isItThough === 0) {

                    indexVideoCounter++;

                    let closestContainer = video.closest('.container');
                    let closestTitle = closestContainer.querySelector('yduqs-title');

                    if (closestTitle !== null) {
                        closestTitle = closestTitle.getAttribute('topic_title');
                    }

                    if (closestTitle !== null) {
                        var videoTitle = closestTitle;
                    } else {
                        var videoTitle = 'Vídeo ' + indexVideoCounter;
                    }

                    let anchor = 'mod' + moduleId + 'vid' + indexVideoCounter;
                    video.setAttribute('id', anchor);
                    finalList['modules'].push({
                        'module': 'modulo_' + moduleId,
                        'playlist': [{
                            'id': anchor,
                            'title_video': videoTitle,
                            'mod_num': moduleId,
                            'type': 'video'
                        }]
                    });
                }
            }

        })

        playlistVideos.forEach(playlist => {

            playlistVideoCounter++;

            let closestTitle = playlist.getAttribute('title_gallery');

            if (closestTitle !== null) {
                var playlistTitle = closestTitle;
            } else {
                var playlistTitle = 'Playlist ' + playlistVideoCounter;
            }

            let anchor = 'mod' + moduleId + 'pl' + playlistVideoCounter;
            playlist.setAttribute('id', anchor);
            finalList['modules'].push({
                'module': 'modulo_' + moduleId,
                'playlist': [{
                    'id': anchor,
                    'title_video': playlistTitle,
                    'mod_num': moduleId,
                    'type': 'playlist'
                }]
            });
        })

    }
})

detailedMenu.initialize(finalList);

fetch('./json/videos.json')
    .then(response => response.json())
    .then(json => {
        document.querySelectorAll('yduqs-playlist-video').forEach(playlist => {
            playlist.initialize(json);
        })
    })