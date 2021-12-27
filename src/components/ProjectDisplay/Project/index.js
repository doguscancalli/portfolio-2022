import React, { useReducer, useRef } from 'react'
import styled from 'styled-components'
import animate from '../../../utils/animate'

// Components
import Image from './Image'
import Title from './Title'

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'MOUSE/ENTER':
      return { ...state, active: true }
    case 'MOUSE/LEAVE':
      return { ...state, active: false }
    case 'CHANGE/OPACITY':
      return { ...state, opacity: action.payload }
    case 'MOUSE/COORDS':
      return { ...state, parallaxPos: action.payload }
    case 'CHANGE/ROTATION':
      return { ...state, rotationPosition: action.payload }
    case 'CHANGE/SCALE':
      return { ...state, rotationPosition: action.payload }
    default:
      throw new Error()
  }
}

const Project = ({ project, index }) => {
  const {
    title,
    url,
    image: {
      fluid: { src: image },
    },
  } = project

  const projectItem = useRef(null)

  const [state, dispatch] = useReducer(reducer, initialState)

  const easeMethod = 'linear'

  const parallax = e => {
    const speed = -5
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    dispatch({ type: 'MOUSE/COORDS', payload: { x, y } })
  }

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: 'CHANGE/OPACITY', payload: newOpacity })
        callback()
      },
      onComplete: () => {},
      duration,
      easeMethod,
    })
  }
  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newScale, callback) => {
        dispatch({ type: 'CHANGE/SCALE', payload: newScale })
        callback()
      },
      onComplete: () => {},
      duration,
      easeMethod,
    })
  }

  const handleRotation = (currentRotation, duration) => {
    // Generates random number between -15 and 15
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1)

    animate({
      fromValue: currentRotation,
      toValue: newRotation,
      onUpdate: (newRotation, callback) => {
        dispatch({ type: 'CHANGE/ROTATION', payload: newRotation })
        callback()
      },
      onComplete: () => {},
      duration,
      easeMethod,
    })
  }

  const handleMouseEnter = () => {
    projectItem.current.addEventListener('mousemove', parallax)
    dispatch({ type: 'MOUSE/ENTER' })
    handleOpacity(0, 1, 500)
    handleScale(0.8, 1, 500)
    handleRotation(initialState.rotationPosition, 500)
  }

  const handleMouseLeave = () => {
    projectItem.current.removeEventListener('mousemove', parallax)
    dispatch({ type: 'MOUSE/LEAVE' })
    handleOpacity(1, 0, 800)
    handleScale(1, initialState.scale, 500)
    handleRotation(initialState.rotationPosition, 500)
  }

  return (
    <StyledProject
      ref={projectItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title title={title} url={url} index={index} />
      <Image
        src={image}
        opacity={state.opacity}
        parallaxPos={state.parallaxPos}
        rotationPosition={state.rotationPosition}
        scale={state.scale}
      />
    </StyledProject>
  )
}

const StyledProject = styled.li`
  display: flex;
  cursor: pointer;
  position: relative;
  margin-bottom: 2.083vw;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    .title-wrapper {
      .title {
        &.clone {
          clip-path: inset(0 0 0 0);
        }
      }
    }
  }
`

export default Project
