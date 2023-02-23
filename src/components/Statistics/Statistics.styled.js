import styled from "styled-components";

export const Section = styled.section`
    width: 360px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 2px grey;
    border-radius: 2px;
   :last-child{
    margin-bottom: 0;
   } 
`
export const Title = styled.h2`
    text-align: center;
    background-color: antiquewhite;
    padding: 20px 0;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
    background-color: lightblue;

    display: flex;
    justify-content: center;
    gap: 25px;
`
export const DataList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px 0;

`
export const Percentage = styled.span`
    font-size: 20px;
`