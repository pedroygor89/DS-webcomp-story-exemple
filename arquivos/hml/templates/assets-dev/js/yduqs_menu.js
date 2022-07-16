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
            let skipMenu = video.getAttribute('skip-menu');

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

                    if (skipMenu === null) {
                        skipMenu = false;
                    } else {
                        skipMenu = true;
                    }

                    let anchor = 'mod' + moduleId + 'vid' + indexVideoCounter;
                    video.setAttribute('id', anchor);
                    finalList['modules'].push({
                        'module': 'modulo_' + moduleId,
                        'playlist': [{
                            'id': anchor,
                            'title_video': videoTitle,
                            'mod_num': moduleId,
                            'type': 'video',
                            'skip_menu': skipMenu
                        }]
                    });
                }
            }

        })

        playlistVideos.forEach(playlist => {

            playlistVideoCounter++;

            let closestTitle = playlist.getAttribute('title_gallery');
            let skipMenu = playlist.getAttribute('skip-menu');

            if (closestTitle !== null) {
                var playlistTitle = closestTitle;
            } else {
                var playlistTitle = 'Playlist ' + playlistVideoCounter;
            }

            if (skipMenu === null) {
                skipMenu = false;
            } else {
                skipMenu = true;
            }

            let anchor = 'mod' + moduleId + 'pl' + playlistVideoCounter;
            playlist.setAttribute('id', anchor);
            finalList['modules'].push({
                'module': 'modulo_' + moduleId,
                'playlist': [{
                    'id': anchor,
                    'title_video': playlistTitle,
                    'mod_num': moduleId,
                    'type': 'playlist',
                    'skip_menu': skipMenu
                }]
            });
        })

    }
})

detailedMenu.initialize(finalList);