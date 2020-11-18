import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin-bottom:20px;
    line-height:23px;
    padding:5px 0;
    box-sizing:border-box;
`;
function Career({Careers}) {
    return(
        <Wrap>
            <h3>{Careers.company}</h3>
            <h4>{Careers.job}</h4>
            <p>{Careers.day}</p>
        </Wrap>
    );
}


function ListCareer() {
    const CareerLists = [
        {
            id:1,
            company:'퍼플스(주)',
            day:'2020.09 ~ current',
            job: 'WEB PUBLISHER'
        },
        {
            id:2,
            company:'(주)탑코',
            day:'2019.01 ~ 2020.02',
            job:''
        }
    ];
    return(
        <>
        {CareerLists.map(Careers =>(
            <Career key={Careers.id} Careers={Careers}/>
        ))}
        </>
    );
}
export default ListCareer;