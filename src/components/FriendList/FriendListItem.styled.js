import styled from "styled-components";
export const Indicator = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 5px;

    background-color: ${props =>{
        console.log(props.isOnline)
        if(props.isOnline){ return "green" }
        else{ return "red" }
        
    }};
`
export const Card = styled.li`
    box-shadow: 0px 0px 8px grey;
    border-radius: 3px;
    width: 250px;
    padding-top: 10px;
    padding-bottom: 5px;

    display: flex;
    align-items: center;
    gap: 10px;
`
export const Title = styled.p`
    font-size: 22px;
    font-weight: 500;
`