/*
 * @LastEditors: 尉旭胜(Riansin)
 * @Author: 尉旭胜(Riansin)
 */
import React, { useEffect, useState,useContext,useMemo } from 'react';
import { Context } from '../..';
import {observer} from "mobx-react-lite";
import { Outlet} from 'react-router-dom';
import './nav.css';
import TextChunk from '../chunk/text-chunk';
import ProgressBar from '../chunk/scrollBar';
import MusicChunk,{ MusicControl } from '../chunk/music-chunk';
import { style } from '@mui/system';

const unfold_class = {
    content_unfold: 'music-content-unfold',
    border_radius_init: 'border-radius-init',
}
const shrink_class = {
    content_unfold: '',
    border_radius_init: '',
}

function NavUI(props) {
    const navData = useContext(Context);
    useEffect(() => {
    
    })
    const [musicmouse, setMusicMousenode] = useState(false);
    const [MusicClose, setMusicClose] = useState({
        meck_close: 'meck-close-box',
        content_close: 'content-close-box'
    });
    const isMusic_paly = () => {
        const audio = document.querySelector('audio');
        navData.change_nav_music_paly(audio);
    }
    const change_nav_music_mouse = () => {
        setMusicMousenode((pre, newValue) => {
            newValue = !pre;
            return newValue
        })
    }
    const change_music_box = () => {
        setMusicClose({
            meck_close: 'meck-open-box',
            content_close:'content-open-box'
        })
    }
    const music_box_close = (e) => {
        setMusicClose({
            meck_close: 'meck-close-box',
            content_close:'content-close-box'
        })
        
    }
    const unfold = () => {
        if (!navData.music_unfold) {
            navData.set_music_unfold_class(unfold_class)
            navData.set_music_control_class(MusicControl.musicControlUnfoldClass)
            navData.change_music_unfold();
        } else {
            navData.set_music_unfold_class(shrink_class)
            navData.set_music_control_class(MusicControl.musicControlShrinkClass)
            navData.change_music_unfold();
        }
        
    }
    return (
        <>
        
        <nav className='nav'>
        <ProgressBar />
        <div className='nav-center-box'>
            <div className='nav-crumbs'>
                <TextChunk Class='nav-patn-box' content='' fontSize={20} svgwidth={22}  lineheight=' _'>
                    <svg t="1646639698239" class="icon" viewBox="0 0 1048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6029" width="200" height="200"><path d="M78.000005 648.75464c13.589506 148.829653 139.118478 265.783319 291.427372 265.783319 149.515269 0 273.222755-112.706945 290.557562-257.637802C441.22254 792.651958 255.420833 547.938514 78.000005 648.75464zM78.000005 648.75464c13.589506 148.829653 139.118478 265.783319 291.427372 265.783319 149.515269 0 273.222755-112.706945 290.557562-257.637802C441.22254 792.651958 255.420833 547.938514 78.000005 648.75464zM78.000005 648.75464c13.589506 148.829653 139.118478 265.783319 291.427372 265.783319 149.515269 0 273.222755-112.706945 290.557562-257.637802C441.22254 792.651958 255.420833 547.938514 78.000005 648.75464z" p-id="6030" fill="#707070"></path><path d="M709.635756 590.323856c-1.289366-14.07046-14.653745-48.044226-34.597983-69.062935l-216.234833-211.650421c-31.04711-27.567869-66.668399-29.287023-89.334631-29.287023-188.666964 0-341.620541 152.933111-341.620541 341.620541 0 188.646498 152.953577 341.600075 341.620541 341.600075s341.620541-152.953577 341.620541-341.600075C711.08885 611.281167 710.597663 600.720647 709.635756 590.323856zM369.468309 329.298911c17.999956 0 38.609343 1.289366 56.04648 16.260335l214.495212 209.951733c11.225669 12.19781 19.841907 33.789571 20.803815 39.315424 0.839111 8.912997 1.258667 18.020422 1.258667 27.097148 0 11.839653-0.706081 23.505343-2.087545 34.976606-17.334807 144.930857-141.042293 257.637802-290.557562 257.637802-152.308895 0-277.837866-116.953665-291.427372-265.783319-0.808412-8.841366-1.217734-17.785062-1.217734-26.831089C76.78227 460.56863 208.133854 329.298911 369.468309 329.298911z" p-id="6031" fill="#707070"></path><path d="M716.474511 474.748584c0 0-12.499685 22.74605-37.341466-1.488911-24.842805-24.234961-132.243907-129.011282-156.086941-152.266939-23.843034-23.236214 2.488681-36.34272 2.488681-36.34272l34.403554-20.453844c0 0 23.157419-12.656251 44.022633 7.718799s98.40931 95.999424 121.273041 118.314663 8.600889 47.15702 8.600889 47.15702L716.474511 474.748584z" p-id="6032" fill="#707070"></path><path d="M582.820488 39.480176l23.215748 47.039339 61.910025 8.992815c10.462283 1.547239 11.735275 6.191003 4.074805 14.243399l-44.394093 43.258223 10.246365 59.832713c1.37123 8.639774-6.955412 13.674441-14.32117 8.639774l-52.485375-27.38879-53.426817 28.074406c-7.150864 3.663436-14.497179 1.312902-13.165858-8.718569l10.050913-60.440557-43.161009-41.906435c-8.365528-7.699356-4.016477-14.713097 5.64251-15.987113l59.127655-8.581446c0 0 12.127202-24.607444 23.196305-47.000454C567.362425 24.473391 576.198674 24.707728 582.820488 39.480176z" p-id="6033" fill="#707070"></path><path d="M917.858101 235.455593l32.032554 64.887846 85.400019 12.401448c14.399965 2.13564 16.182564 8.522094 5.623068 19.631106l-61.243853 59.69559 14.164604 82.520435c1.90028 11.930727-9.619078 18.866696-19.787672 11.930727l-72.411193-37.772278-73.684186 38.733163c-9.894348 5.054109-20.023032 1.802042-18.181081-12.028964l13.851473-83.382059-59.558467-57.834196c-11.520381-10.618848-5.505387-20.297278 7.797593-22.060435l81.560574-11.833513c0 0 16.731056-33.932834 31.992645-64.847937C896.522167 214.747969 908.728163 215.080543 917.858101 235.455593z" p-id="6034" fill="#707070"></path></svg>
                        </TextChunk>
                        <TextChunk Class='' dbClick={change_music_box} onClick={isMusic_paly} MouseOver={change_nav_music_mouse} MouseOut={change_nav_music_mouse} isPreventDefault={true} title='单击—播放/暂停  双击-具体页面' content='' fontSize={20} svgwidth={22} lineheight=' _'>
                            {navData.music_paly ? musicmouse ?
                                <svg t="1646902808958" className="nav-music-cont" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1583" width="200" height="200"><path d="M910.8 303.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S129.8 720.8 129.8 509.2 301.4 126.1 513 126.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C654.6 78.9 585.9 61.5 513 61.5 265.7 61.5 65.3 262 65.3 509.2S265.7 956.9 513 956.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z" fill="#515151" p-id="1584"></path><path d="M385.4 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.6 0 32-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9zM578.9 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.5 0 31.9-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9z" fill="#515151" p-id="1585"></path><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z" fill="#515151" p-id="1586"></path></svg>
                                :
                                <svg t="1646896673563" className='nav-music-cont' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14381" width="200" height="200"><path d="M512 972.8C258.048 972.8 51.2 765.952 51.2 512S258.048 51.2 512 51.2s460.8 206.848 460.8 460.8c0 17.408-13.312 30.72-30.72 30.72s-30.72-13.312-30.72-30.72c0-220.16-179.2-399.36-399.36-399.36S112.64 291.84 112.64 512s179.2 399.36 399.36 399.36c17.408 0 30.72 13.312 30.72 30.72s-13.312 30.72-30.72 30.72z" p-id="14382" fill="#515151"></path><path d="M512 972.8C258.048 972.8 51.2 765.952 51.2 512S258.048 51.2 512 51.2s460.8 206.848 460.8 460.8c0 83.968-22.528 164.864-65.536 236.544-9.216 14.336-27.648 19.456-41.984 10.24-14.336-9.216-19.456-27.648-10.24-41.984 36.864-61.44 56.32-133.12 56.32-204.8 0-220.16-179.2-399.36-399.36-399.36S112.64 291.84 112.64 512s179.2 399.36 399.36 399.36c91.136 0 177.152-29.696 247.808-87.04 6.144-5.12 13.312-11.264 19.456-16.384 5.12-4.096 9.216-9.216 14.336-13.312 12.288-12.288 31.744-12.288 43.008 0 12.288 12.288 12.288 31.744 0 43.008-5.12 5.12-10.24 10.24-16.384 15.36-7.168 6.144-14.336 13.312-22.528 19.456C716.8 937.984 617.472 972.8 512 972.8z" p-id="14383" fill="#515151"></path><path d="M752.64 352.256c-9.216 0-18.432-4.096-24.576-11.264-41.984-53.248-102.4-89.088-169.984-101.376-16.384-3.072-27.648-18.432-24.576-35.84 3.072-16.384 18.432-27.648 35.84-24.576 81.92 14.336 155.648 57.344 206.848 122.88 10.24 13.312 8.192 32.768-5.12 43.008-5.12 5.12-11.264 7.168-18.432 7.168zM381.952 795.648c-23.552 0-47.104-6.144-68.608-18.432-31.744-18.432-55.296-48.128-64.512-83.968-9.216-35.84-5.12-72.704 13.312-104.448 18.432-31.744 48.128-55.296 83.968-64.512l73.728-19.456c35.84-9.216 72.704-5.12 104.448 13.312 31.744 18.432 55.296 48.128 64.512 83.968 9.216 35.84 5.12 72.704-13.312 104.448-18.432 31.744-48.128 55.296-83.968 64.512l-73.728 19.456c-11.264 3.072-23.552 5.12-35.84 5.12z m73.728-234.496c-7.168 0-13.312 1.024-19.456 3.072L362.496 583.68c-19.456 5.12-35.84 18.432-46.08 35.84s-13.312 38.912-7.168 58.368c5.12 19.456 18.432 35.84 35.84 46.08s38.912 13.312 58.368 7.168l73.728-19.456C495.616 706.56 512 693.248 522.24 675.84c10.24-17.408 13.312-38.912 7.168-58.368-5.12-19.456-18.432-35.84-35.84-46.08-11.264-7.168-24.576-10.24-37.888-10.24z" p-id="14384" fill="#515151"></path><path d="M563.2 665.6c-17.408 0-30.72-13.312-30.72-30.72V215.04c0-17.408 13.312-30.72 30.72-30.72s30.72 13.312 30.72 30.72v419.84c0 17.408-13.312 30.72-30.72 30.72z" p-id="14385" fill="#515151"></path></svg>
                                :
                                musicmouse ?
                                <svg t="1646896787599" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15618" width="200" height="200"><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z" fill="#515151" p-id="15619"></path><path d="M415.8 679.9c5.9 0 11.5-1.6 16.2-4.5l231.1-134.6c10.9-5.2 18.5-16.3 18.5-29.2 0-11.9-6.4-22.3-16-27.8L439.7 352.2c-5.8-6.7-14.4-10.9-23.9-10.9-17.6 0-31.8 14.4-31.8 32.1 0 0.6 0 1.2 0.1 1.8l-0.4 0.2 0.5 269c-0.1 1.1-0.2 2.2-0.2 3.4 0 17.7 14.3 32.1 31.8 32.1z" fill="#515151" p-id="15620"></path><path d="M909.8 306.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S128.8 723.8 128.8 512.2 300.4 129.1 512 129.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.6 81.9 584.9 64.5 512 64.5 264.7 64.5 64.3 265 64.3 512.2S264.7 959.9 512 959.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z" fill="#515151" p-id="15621"></path></svg>
                                :
                                <svg t="1646896673563" className='' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14381" width="200" height="200"><path d="M512 972.8C258.048 972.8 51.2 765.952 51.2 512S258.048 51.2 512 51.2s460.8 206.848 460.8 460.8c0 17.408-13.312 30.72-30.72 30.72s-30.72-13.312-30.72-30.72c0-220.16-179.2-399.36-399.36-399.36S112.64 291.84 112.64 512s179.2 399.36 399.36 399.36c17.408 0 30.72 13.312 30.72 30.72s-13.312 30.72-30.72 30.72z" p-id="14382" fill="#515151"></path><path d="M512 972.8C258.048 972.8 51.2 765.952 51.2 512S258.048 51.2 512 51.2s460.8 206.848 460.8 460.8c0 83.968-22.528 164.864-65.536 236.544-9.216 14.336-27.648 19.456-41.984 10.24-14.336-9.216-19.456-27.648-10.24-41.984 36.864-61.44 56.32-133.12 56.32-204.8 0-220.16-179.2-399.36-399.36-399.36S112.64 291.84 112.64 512s179.2 399.36 399.36 399.36c91.136 0 177.152-29.696 247.808-87.04 6.144-5.12 13.312-11.264 19.456-16.384 5.12-4.096 9.216-9.216 14.336-13.312 12.288-12.288 31.744-12.288 43.008 0 12.288 12.288 12.288 31.744 0 43.008-5.12 5.12-10.24 10.24-16.384 15.36-7.168 6.144-14.336 13.312-22.528 19.456C716.8 937.984 617.472 972.8 512 972.8z" p-id="14383" fill="#515151"></path><path d="M752.64 352.256c-9.216 0-18.432-4.096-24.576-11.264-41.984-53.248-102.4-89.088-169.984-101.376-16.384-3.072-27.648-18.432-24.576-35.84 3.072-16.384 18.432-27.648 35.84-24.576 81.92 14.336 155.648 57.344 206.848 122.88 10.24 13.312 8.192 32.768-5.12 43.008-5.12 5.12-11.264 7.168-18.432 7.168zM381.952 795.648c-23.552 0-47.104-6.144-68.608-18.432-31.744-18.432-55.296-48.128-64.512-83.968-9.216-35.84-5.12-72.704 13.312-104.448 18.432-31.744 48.128-55.296 83.968-64.512l73.728-19.456c35.84-9.216 72.704-5.12 104.448 13.312 31.744 18.432 55.296 48.128 64.512 83.968 9.216 35.84 5.12 72.704-13.312 104.448-18.432 31.744-48.128 55.296-83.968 64.512l-73.728 19.456c-11.264 3.072-23.552 5.12-35.84 5.12z m73.728-234.496c-7.168 0-13.312 1.024-19.456 3.072L362.496 583.68c-19.456 5.12-35.84 18.432-46.08 35.84s-13.312 38.912-7.168 58.368c5.12 19.456 18.432 35.84 35.84 46.08s38.912 13.312 58.368 7.168l73.728-19.456C495.616 706.56 512 693.248 522.24 675.84c10.24-17.408 13.312-38.912 7.168-58.368-5.12-19.456-18.432-35.84-35.84-46.08-11.264-7.168-24.576-10.24-37.888-10.24z" p-id="14384" fill="#515151"></path><path d="M563.2 665.6c-17.408 0-30.72-13.312-30.72-30.72V215.04c0-17.408 13.312-30.72 30.72-30.72s30.72 13.312 30.72 30.72v419.84c0 17.408-13.312 30.72-30.72 30.72z" p-id="14385" fill="#515151"></path></svg>
                            }
                        </TextChunk>
                <TextChunk Class=''  content={'解忧杂货店'} url={'/'} fontSize={15}></TextChunk>
            
        </div>
        <div className='nav-menu'>

            <TextChunk Class='nav-center' content='分享' url='/share' fontSize={14}></TextChunk>


            <TextChunk Class='nav-center' content='简历' url='/resume' fontSize={14}></TextChunk>


            <TextChunk Class='nav-center' content='➠' url='/share' fontSize={18}></TextChunk>


            <TextChunk Class='nav-center' content='➠' url='/share' fontSize={18}></TextChunk>

        </div>
        </div>
            <div className={`music-box ${MusicClose.meck_close} ${navData.music_unfold_class.border_radius_init}`} onClick={music_box_close} >
                {/* <div className={`music-box-content ${MusicClose.content_close}`}>
                    <MusicChunk></MusicChunk>
                </div> */}
                </div>
                <div className={`music-box-content ${MusicClose.content_close} ${navData.music_unfold_class.content_unfold}`} style={{backgroundColor:navData.music.album_main_color}}>
                    <MusicChunk onUnfold={unfold}></MusicChunk>
                </div>
        </nav>
        <Outlet></Outlet>
        </>);
}

const Nav = observer(NavUI)

export default Nav;
