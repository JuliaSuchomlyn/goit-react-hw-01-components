import styled from "@emotion/styled";

export const Container = styled.div`
display: block;
margin: 0 auto;
max-width: 300px;
border: 1px solid #9e9e9e;
border-radius: 4px;

line-height: 1.17;
`;
export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 30px;
margin-bottom: 24px;
`;
export const Avatar = styled.img`
display: block;
border-radius: 50%;
width: 200px;
margin: auto;
background-color: #fff;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);

`;
export const UserName = styled.p`
font-size: 24px;
padding: 30px 0 0 0;
margin: 0;
text-align: center;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);

`;
export const UserTag = styled.p`
color: #757575;
padding: 10px 0 0 0;
margin: 0;
font-size: 16px;
text-align: center;
`;
export const UserLocation = styled.p`
color: #757575;
padding: 10px 0 0 0;
margin: 0;
font-size: 16px;
text-align: center;
`;
export const Stats = styled.ul`
overflow: hidden;
margin: 0;
padding: 0;
list-style: none;
display: flex;
justify-content: center;
align-item: center;
background-color: #F1F2FA;

`;
export const StatsItem = styled.li`
border-top: 1px solid rgba(33, 33, 33, 0.2);
padding: 8px;
width: calc(100% / 3);
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;
font-size: 14px;
&:not(:last-child) {
    border-right: 1px solid rgba(33, 33, 33, 0.2);
};
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);

`;
export const StatsLabel = styled.span`
color: #757575;
margin-bottom: 6px;
text-align: center;
`;
export const StatsQuantity = styled.span`
text-align: center;
font-weight: bold;
`;
