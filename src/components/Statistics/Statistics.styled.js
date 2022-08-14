import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
width: 20vw;
min-width: 280px;
margin: 0 auto 40px auto;
padding: 12p
border-radius: 4px;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
`;
export const Title = styled.h2`
padding: 12px;
border: 1px solid #9e9e9e;
border-bottom: none;
font-size: 30px;
text-align: center;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
`;
export const StatisticsCatalogue = styled.ul`
display: flex;
background-color: #F1F2FA;
`;
export const StatsItem = styled.li`
width: calc(100% / 5);
display: flex;
align-items: center;
flex-direction: column;
padding: 8px;
border: 1px solid #9e9e9e;
span {
    background-color: white;
    color: #757575;
}
span ~ span {
    font-weight: bold;
    color: #000;
}
`;