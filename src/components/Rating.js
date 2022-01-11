import React, { useState } from "react";
import { Button,Card,Stack} from 'react-bootstrap';
import { MdThumbUp,MdThumbDown } from "react-icons/md";

const Rating = props => {
    const { id } = props.item;

    const [isLiked, updateLike] = useState(false);

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
    return (
      <div>
       <Stack direction="horizontal" gap={3}>
              
              <Button variant="primary" onClick={handleLike} disabled={isLiked} size="lg" active ><MdThumbUp style={{fontSize:'30px',marginRight:'20px'}}/></Button>
              <div className="vr" />
              <Button variant="outline-danger" onClick={handleLike} disabled={!isLiked} ><MdThumbDown style={{fontSize:'30px',marginRight:'20px'}}/></Button>
              </Stack>
              <Card.Text style={{paddingTop:'20px',fontSize:'16px',fontWeight:'bold',color:isLiked?'green':'brown'}}>You {isLiked ? "liked" : "disliked"} </Card.Text>
             
        
      </div>
    );
  };
  export default Rating;