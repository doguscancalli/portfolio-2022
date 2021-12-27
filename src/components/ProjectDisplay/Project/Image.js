import React from 'react'
import styled from 'styled-components'

const Image = ({
  src,
  title,
  opacity,
  parallaxPos,
  scale,
  rotationPosition,
}) => {
  return (
    <StyledImage
      style={{
        opacity,
        transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale})`,
      }}
    >
      <img src={src} alt={title || 'Proje Resmi'} />
    </StyledImage>
  )
}

const StyledImage = styled.div`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  width: 30vw;
  z-index: -1;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Image
