import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard({title, description, imageUrl, link}) {

    function Redir(link){
        window.location.href = link
    }

    return ( <>
           <div className={"flex bg-[#f7f7f7] w-[80%] mt-4 rounded-md border border-solid border-gray-200 p-[10px] max-h-48"} onClick={()=>Redir(link)}>
               <img className={"rounded-md w-[30%]"}   src={imageUrl} />
                <div className={"ml-4 h-[80%]"}>
                    <span className={"text-left p-[15px] "}>
                    <h1 className={"text-[#77d5e1]  text-xl"}>{title}</h1>
                    </span>

                    <p className={'text-left'}>{description}</p>
                </div>
           </div>
        </>
    );
}
