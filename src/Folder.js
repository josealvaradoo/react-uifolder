import * as React from 'react'
import styled from 'styled-components'

const FolderUI = styled('div')`
    position: relative;
    display: flex;
    flex: 1;
    margin: 2rem;
    padding: 1rem;
    max-width: 150px;
    height: 70px;
    border: 1px solid #C0C0C0;
    border-radius: 4px;
    background-color: #CCCCCC;
    justify-content: center;
    align-items: center;
    transform: skewx(10deg);
    transition-duration: .3s;
    cursor: pointer;
    &:before {
        content: '';
        position: absolute;
        bottom: -1px;
        right: -11px;
        width: 100%;
        height: 115%;
        background-color: #EAEAEA;
        border-radius: 4px;
        border: 1px solid #DDD;
        transform: skewx(-10deg);
    }
    &:after {
				--height: 11px;
				--width: calc(4.5*var(--height));
        content: '';
        position: absolute;
        top: calc(-2*var(--height));
        right: -21px;
        width: var(--width);
        height: var(--height);
        border-radius: 4px 4px 0 0;
        border: 1px solid #DDD;
        border-bottom-color: #EAEAEA;
        background-color: #EAEAEA;
        transform: skew(-10deg);
    }
    &:hover {
        background-color: #BBBBBB;
        &:before,
        &:after {
            background-color: #F0F0F0;
        }
        &:after {
            border-bottom-color: transparent;
        }
    }
`

const FolderTitle = styled('p')`
    position: relative;
    z-index: 2;
    left: .5rem;
    bottom: .2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #666;
    transform: skewx(-10deg);
`

const Folder = ({name}) => (
  <FolderUI>
    <FolderTitle>{name.replace(/\b\w/g, letter => letter.toUpperCase())}</FolderTitle>
  </FolderUI>
)

export default Folder