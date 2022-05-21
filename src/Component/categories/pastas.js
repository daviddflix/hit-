import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { ArrowGo, Container, ContainerInfo, Img, Like, MainContainer, NavLink, Title } from "./styles";
import Rating from '@mui/material/Rating';





export default function Pastas(){

    const productos = useSelector(state => state.food)
    console.log('productos:', productos)
    const dispatch = useDispatch()
    const [value, setValue] = useState(5);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  


    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      height: '90vh'
    };
   
 
    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
        
          
           <h3>ELIGE TU HIT</h3>
           <div>
           {
              productos? productos.map(p => {
                 return(
                   <NavLink key={p.id}   to={`/detail/${p.id}`} style={{textDecoration:'none', }}>
                 
                  <Container >
                  <Img src={`https://hit-pasta.herokuapp.com/${p.picture_url}`} />
                  
                        <ContainerInfo >
                          <Title>{p.title}</Title>
                             <Rating
                              name="size-small"
                              value={value}
                              onChange={(event, newValue) => {
                              setValue(newValue);
                              }}
                              />
                          <h4 style={{margin: '7px', color: '#282828'}}>$ {p.price}</h4>
                        </ContainerInfo>
                        <Like/>
                        <ArrowGo/>
                </Container>
                  </NavLink>
                 
                 )
               }): <Loading/>
           }
           </div>

           <div>
     
    
    </div>
          
        </MainContainer>
    )
}