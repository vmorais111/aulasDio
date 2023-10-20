import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display:flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    background-color:#ccc5b9;
    width:30%;
    border-style: solid;
    border-width: 0.01px;
    border-radius:5px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`