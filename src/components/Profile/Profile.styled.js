import styled from "styled-components"

export const Card = styled.div`
    box-shadow: 0px 0px 2px grey;
    border-radius: 4px;

    width: 300px;
    height: 300px;
    padding-top: 20px;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`
export const Name = styled.p`
    font-weight: bold;
    font-style: 20px;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;

    list-style: none;
    background-color: lightgray;
    border-top: 1px solid gray;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    border-right: 1px solid gray;
    
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 16px;

    :last-child{
        border: 0px
}
`
export const Span = styled.span`
    font-weight: 700;
`
