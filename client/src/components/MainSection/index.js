import React from "react";
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Image from 'react-bootstrap/Image';

import Main1 from '../../images/2000.png';
import largeCloud from '../../images/3.png';
import Main3 from '../../images/4.png';
import Main4 from '../../images/5.png';
import Main5 from '../../images/6.png';
import profilePic from '../../images/7.png';
import Main7 from '../../images/8.png';
import Main8 from '../../images/9.png';
import Main9 from '../../images/10.png';
import document from '../../images/11.png';

import './style.scss';

const Sticky2Styled = styled.div`
  overflow: hidden;
  
  
  .sticky, MainSection {
    height: 100vh;
    // background: linear-gradient(180deg, #e4f5fc 0%,#bfe8f9 26%,#9fd8ef 59%,#0068f2 100%);
    // background-color: #e4f5fc;
    background: white
    
      }
  }
    width: 100%;
    & .animation, .animation2,.animation3,
    .animation4,.animation5,.animation6,.animation7,
    .animation8,.animation9,.animation10 {
      width: 100%;
      height: 100%;
      position: absolute;
      
      & Image {
        // opacity: 0;
        // position: relative;
        // width: 300px;
        // height: 300px;
       
        
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h1 {
        font-size: 40px;
        position: absolute;
        bottom: 20%;
        left: 25%;
        margin: 0;
       
      }  
       
        
      
    }
    .heading2 {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 20px;
        position: absolute;
        bottom: 10%;
        left: 33%;
        margin: 0;
        text-align:center;
       
      }
       
        
      
    }
  }
`;

const MainSection = () => {



    return(
        //  <div className='dbSetup'>
       
            <div className='dbSetup2'>
            
<Sticky2Styled>
    
    <Controller>
      <Scene
        triggerHook="onLeave"
        triggerElement={null}
        duration={4500}
        pin
        
      >
        {(progress) => (

          <div className="sticky">
              <div className='dbSetup'>
            <Timeline totalProgress={progress} paused>
           
              <Tween
                  from={{ opacity: 0, x: '50%', top: '10%' }}
                  to={{  opacity: 1, rotation: 360, x: '10%', top: '0',duration: 1.5}}
              >
                  
                <div className="animation">
                <div className='dbSetup2'>
                <Image style={{ width:'800px',height:'600px', position:'relative', opacity:1,}}
             src={ Main1 }></Image>
            
             
                </div>
                </div>
                
              </Tween>
              <Timeline 
                target={
                    <div className="animation2">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={largeCloud}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{ opacity: 0, y:-100, duration: 1 }}
                  to={{ opacity: 1, duration: 2, ease: "elastic.out(1, 0.3)", y: 0, delay:1 }}
                />
                {/* <Tween
                  from={{ y: '-150%',delay:1 }}
                 
                /> */}
              </Timeline>
              <Timeline 
                target={
                    <div className="animation3">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={Main3}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{ opacity: 0, y:-100, duration: 1 }}
                  to={{  opacity: 1, duration: 2, ease: "elastic.out(1, 0.3)", y: 0, delay:.7 }}
                />
               
              </Timeline>
              <Timeline 
                target={
                    <div className="animation4">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={Main4}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{  opacity: 0, y:-100, duration: 1 }}
                  to={{ opacity: 1, duration: 2.5, ease: "back.out(1.7)", y: 0}}
                />
                {/* <Tween
                  from={{ y: '-100%' }}
                /> */}
              </Timeline>
              <Timeline 
                target={
                    <div className="animation5">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={Main5}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{   opacity: 0, y:-100, duration: 1  }}
                  to={{  opacity: 1, duration: 2.5, ease: "back.out(1.7)", y: 0 }}
                />
               
              </Timeline>
              <Timeline 
                target={
                    <div className="animation6">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={profilePic}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{  opacity: 0, y:-100, duration: 1 }}
                  to={{  opacity: 1, duration: 2.5, ease: "back.out(1.7)", y: 0 }}
                />
             
              </Timeline>
              <Timeline 
                target={
                    <div className="animation7">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={Main7}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{  opacity: 0, y:-100, duration: 1 }}
                  to={{ opacity: 1, duration: 2.5, ease: "back.out(1.7)", y: 0 }}
                />
              
              </Timeline>
              <Timeline 
                target={
                    <div className="animation8">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={Main8}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{   opacity: 0, y:-100, duration: 1  }}
                  to={{ opacity: 1, duration: 2, ease: "back.out(1.7)", y: 0 }}
                />
               
              </Timeline>
              <Timeline 
                target={
                    <div className="animation9">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={Main9}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{  opacity: 0, y:-100, duration: 1  }}
                  to={{ opacity: 1, duration: 1, ease: "back.out(1.7)", y: 0 }}
                />
               
              </Timeline>
              <Timeline 
                target={
                    <div className="animation10">
                        <div className='dbSetup2'>
                     <Image style={{ width:'800px',height:'600px', position:'relative',opacity:1,}} src={document}></Image>
                     </div>
                    </div>
                }
              >
                <Tween
                  from={{  opacity: 0, y:-100, duration: 1  }}
                  to={{ opacity: 1, duration: 2, ease:  "bounce.out", y: 0  }}
                />
                
              </Timeline>
              
              
            </Timeline>
          </div>
          </div>
        )}
      </Scene>
    </Controller>
     
    
  </Sticky2Styled>
        
     </div>
    
    )
};

export default MainSection;