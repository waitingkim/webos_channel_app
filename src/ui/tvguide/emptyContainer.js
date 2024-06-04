import styled from "styled-components"
import React from "react";

const EmptyContainerLayout = styled.div`
    width: 446px;
    height: 363px;
    //margin: 18px 40px 30px 9px;
    //padding: 10px;
    background-color: transparent;
`

const EmptyContainer = ({isFocus, content}) => {

    return (
        <div>
            <EmptyContainerLayout/>
        </div>
    );
}

export default EmptyContainer