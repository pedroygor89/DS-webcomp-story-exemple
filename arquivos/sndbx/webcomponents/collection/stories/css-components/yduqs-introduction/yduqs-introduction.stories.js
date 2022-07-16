import { html } from 'lit-html';
export default {
  title: 'Componentes/Introdução',
};
const Template = ({}) => html `
    <section class="w-100">
        <div class="container">
            <yduqs-title topic_icon="meeting_room"  topic_title="Introdução"></yduqs-title>
    
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>
                    
                    <div>
                        <p class="c-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis. 
                            Etiam congue euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis.
                            Etiam congue euismod congue.
                        </p>
                    </div>
                </div>
            </div>        
        </div>
    </section>        
`;
export const Default = Template.bind({});
Default.storyName = 'Texto';
const TemplateTextBox = ({}) => html `
    <section class="w-100">
        <div class="container">
            <yduqs-title topic_icon="meeting_room"  topic_title="Introdução"></yduqs-title>
    
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>
                    
                    <div>
                        <p class="c-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis. 
                            Etiam congue euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis.
                            Etiam congue euismod congue.
                        </p>
                    </div>

                </div>
            </div>        
        </div>
    </section>        
`;
export const TextBox = TemplateTextBox.bind({});
TextBox.storyName = 'Texto com caixa de aviso';
const TemplateImage = ({}) => html `
    <section class="w-100">
        <div class="container">
            <yduqs-title topic_icon="meeting_room"  topic_title="Introdução"></yduqs-title>
    
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>
                    
                    <div>
                        <p class="c-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis. 
                            Etiam congue euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis.
                            Etiam congue euismod congue.
                        </p>
                    </div>

                    <div class="box-legenda">
                        
                        <div class="full">
                            <yduqs-image
                                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                alt="Fuji-san" width="100%" height="415">
                            </yduqs-image>
                        </div>
                        
                        <p class="text-legenda">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>

                        <hr class="linha-legenda-feedback">
                    </div>
                </div>
            </div>        
        </div>
    </section>        
`;
export const Image = TemplateImage.bind({});
Image.storyName = 'Imagem';
const TemplateImageBox = ({}) => html `
    <section class="w-100">
        <div class="container">
            <yduqs-title topic_icon="meeting_room"  topic_title="Introdução"></yduqs-title>
    
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>
                    
                    <div>
                        <p class="c-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis. 
                            Etiam congue euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis.
                            Etiam congue euismod congue.
                        </p>
                    </div>

                    <div class="box-legenda">
                        
                        <div class="full">
                            <yduqs-image
                                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                alt="Fuji-san" width="100%" height="415">
                            </yduqs-image>
                        </div>
                        
                        <p class="text-legenda">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>

                        <hr class="linha-legenda-feedback">
                    </div>

                </div>
            </div>        
        </div>
    </section>        
`;
export const ImageBox = TemplateImageBox.bind({});
ImageBox.storyName = 'Imagem com caixa de aviso';
const TemplateVideo = ({}) => html `
    <section class="w-100">
        <div class="container">
            <yduqs-title topic_icon="meeting_room"  topic_title="Introdução"></yduqs-title>
    
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>
                    
                    <div>
                        <p class="c-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis. 
                            Etiam congue euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis.
                            Etiam congue euismod congue.
                        </p>
                    </div>

                    <div class="box-legenda">
                        <div class="full">
                            <yduqs-video-player 
                            src="https://play.yduqs.videolib.live/index.html?token=27efc41292214362beddde52d341a3f6" 
                            videoId="video_29"
                            width="auto"
                            height="auto"
                            covered="false">
                            </yduqs-video-player>
                        </div>
                    </div>

                </div>
            </div>        
        </div>
    </section>        
`;
export const Video = TemplateVideo.bind({});
Video.storyName = 'Video';
const TemplateVideoBox = ({}) => html `
    <section class="w-100">
        <div class="container">
            <yduqs-title topic_icon="meeting_room"  topic_title="Introdução"></yduqs-title>
    
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>
                    
                    <div>
                        <p class="c-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis. 
                            Etiam congue euismod congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. 
                            Fusce sit amet elementum sapien, eu mollis nibh. Vestibulum consectetur augue pulvinar libero fermentum, ac malesuada sapien mattis.
                            Etiam congue euismod congue.
                        </p>
                    </div>

                    <div class="box-legenda">
                        <div class="full">
                            <yduqs-video-player 
                            src="https://play.yduqs.videolib.live/index.html?token=27efc41292214362beddde52d341a3f6" 
                            videoId="video_29"
                            width="auto"
                            height="auto"
                            covered="false">
                            </yduqs-video-player>
                        </div>
                    </div>

                </div>
            </div>        
        </div>
    </section>        
`;
export const VideoBox = TemplateVideoBox.bind({});
VideoBox.storyName = 'Vídeo com caixa de aviso';
