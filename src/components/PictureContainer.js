import React, {
    useState,
    useEffect
  } from "react";
import axios from "axios";
import {
    Col,
    Row,
    Card,
    Container
  } from 'react-bootstrap';
  
  import Rating from './Rating';

  const ImageContainer =()=>{

  const [data, setData] = useState([]);

  const [likedBands, updateLikedBands] = useState([]);

  const styles = {
      row: {
          marginBottom: 20,
          marginTop: 20,
      },
      col: {
          marginRight: -20,

      },
      br: {
          borderRadius: 20,
          width: '18rem'
      }
  }



  const fetchData = async () => {
      try {
          const res = await axios.get(
              "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=t6p3bUynsAH2pO5wHnA9hbeZmuT6FUbby03zEzJw"

          );
          const datas = res.data;

          setData(datas);
      } catch (error) {
          console.log(error);
      }


  };



  //console.log(data);

  const x = data.photos

  console.log(x);

  useEffect(() => {
      fetchData();
  }, []);




    return(
        <Container fluid = {true} style = {styles.col} >
        <Row xs = {1}
        sm = {2}
        md = {3}
        lg = {4}
        xl = {4}> 
        {
            data.length === 0 ? ( 
                <div >
                null 
                </div>
            ) : (
                x.map((item) => ( <
                    Col style = {
                        styles.row
                    } >
                    
                    <Card style = {styles.br}  key = {item.id } >
                    
                    <Card.Img variant = "top"
                    style = {{ borderRadiusTop: 2 }}
                    src = {item.img_src}
                    height = '200'
                    width = '200' / >
                    
                    <Card.Body>
                    
                    <Card.Title>
                     { item.camera.full_name } 
                    </Card.Title>
  
                    
                    <Card.Text >
                    launch date: { item.rover.launch_date} 
                    </Card.Text> 
                    <Card.Text >
                    landing date: { item.rover.landing_date } 
                    </Card.Text> 
                    <Card.Text >
                    Rover name: { item.rover.name} 
                    </Card.Text> 
                    
                    <Rating 
                    key = {item.id }
                    item ={item} 
                    updateLikedBands = {updateLikedBands}
                    likedBands = {likedBands}
  
                    />
  
                    
                    </Card.Body>
                    </Card > 
                    </Col> 
                ))
            )
        } 
        </Row> 
        </Container > 
    )

}
export default ImageContainer;