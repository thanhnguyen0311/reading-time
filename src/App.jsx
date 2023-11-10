import { useState } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Banner1 from "./assets/img/banner/banner1.jpg"
import Banner2 from "./assets/img/banner/banner2.jpg"
import Banner3 from "./assets/img/banner/banner3.jpg"
import Banner4 from "./assets/img/banner/banner4.jpg"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlider from 'hero-slider/dist/HeroSlider';
import { Slide, MenuNav, Overlay } from 'hero-slider'
import { useSelector } from 'react-redux'

function App() {

  const isSidebar = useSelector((state) => state.openSidebar.isOn)

  return (
    <div className='main-wrapper w-100'>
      <Header />
      {isSidebar && <Sidebar /> }
      <div className='main-content'
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",  
            paddingTop: "120px"
          }}>
        <div className='banner' >
          <HeroSlider
          width={"100%"}
            height={"100vh"}  
            autoplay
            controller={{
              initialSlide: 1,
              slidingDuration: 500,
              slidingDelay: 100,
              onSliding: (nextSlide) =>
                console.debug("onSliding(nextSlide): ", nextSlide),
              onBeforeSliding: (previousSlide, nextSlide) =>
                console.debug(
                  "onBeforeSliding(previousSlide, nextSlide): ",
                  previousSlide,
                  nextSlide
                ),
              onAfterSliding: (nextSlide) =>
                console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
          >
            <Overlay>
              <div className='wrapper'>
                <h1 className='overlay-banner'>
                검증받은 원서를 수업시간에 외국인 선생님과 1:1로 읽으면서
                듣기와 말하기가 모두가 되는 리딩타임 수업!
                </h1>
               
              </div>
            </Overlay>

            <Slide
              shouldRenderMask
              label="BANNER 1"
              background={{
                backgroundImageSrc: Banner1
              }}
            />

            <Slide
              shouldRenderMask
              label="BANNER 2"
              background={{
                backgroundImageSrc: Banner2
              }}
            />

            <Slide
              shouldRenderMask
              label="BANNER 3"
              background={{
                backgroundImageSrc: Banner3
              }}
            />

            <Slide
              shouldRenderMask
              label="BANNER 4"
              background={{
                backgroundImageSrc: Banner4
              }}
            />

            <MenuNav />
          </HeroSlider>
        </div>
      </div>
    </div>
  )
}

export default App
