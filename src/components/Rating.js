import React, { useState } from "react";
import { Button,Card,Stack} from 'react-bootstrap';
import { MdThumbUp,MdThumbDown,MdShare } from "react-icons/md";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

const Rating = props => {
    const { id ,img_src,camera} = props.item;

    const [isLiked, updateLike] = useState(false);
    const [isShare,setShare]=useState(false);

    const handleLike = () => {
      let currentLikedBands = props.likedBands;
      
      if (!isLiked) {
        
        updateLike(true);
        if (!currentLikedBands.includes(id))
          props.updateLikedBands(
            [...currentLikedBands, id]
           );
          
      } else {
        updateLike(false);
        if (currentLikedBands.includes(id))
          props.updateLikedBands(
            currentLikedBands
            .filter(band => band !== id)
            );
          }
    };

    
    const share=()=>{
      setShare(!isShare)
      
    }
   
    
    return (
      <div>
       <Stack direction="horizontal" gap={3}>
              
              <Button variant="success" onClick={handleLike} disabled={isLiked} size="lg"  ><MdThumbUp style={{fontSize:'30px',marginRight:'20px'}}/></Button>
              <div className="vr" />
              <Button variant="danger" onClick={handleLike} disabled={!isLiked} ><MdThumbDown style={{fontSize:'30px',marginRight:'20px'}}/></Button>
              <Button variant='light' size="sm">
              <MdShare style={{color:'blue',backgroundColor:'white',fontSize:'35px',borderRadius:'10px'}} onClick={share}/>
              </Button>
             </Stack> 
              {isShare&&(
                <Stack style={{backgroundColor:'white',marginLeft:'90px',marginRight:'0px',marginTop:'16px',borderRadius:'20px',float:'right'}} direction="horizontal" gap={2} >
              <FacebookShareButton
        url={img_src}
        quote={camera.full_name}
        hashtag={"#nasa"}
        description={""}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round /> 
        {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
      </FacebookShareButton>
      
      <br />
      <TwitterShareButton
        title={camera.full_name}
        url={img_src}
        hashtags={'none'}
      >
        <TwitterIcon size={32} round />
        
      </TwitterShareButton>
      </Stack>
              )}
              
              <Card.Text id="like" style={{paddingTop:'20px',fontSize:'16px',fontWeight:'bold',color:isLiked?'green':'brown'}}>  {!isLiked ? 'you disliked': 'you liked'  }</Card.Text>
             
        
      </div>
    );
  };
  export default Rating;