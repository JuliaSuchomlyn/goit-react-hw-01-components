import styled from "@emotion/styled";

export const FriendsCatalogue = styled.ul`
width: 20vw;
min-width: 280px;
margin: 0 auto 40px auto;


`;
export const FriendsItem = styled.li`
display: flex;
align-items: center;
padding: 12px;
margin-bottom: 12px;
border: 1px solid #9e9e9e;
border-radius: 4px;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
`;
export const Status = styled.span`
border-radius: 50%;
width: 20px;
height: 20px;
margin-right: 24px;
background-color: ${props => (props.status ? "green" : "red")};
`;
export const Avatar = styled.img`
display: block;
border-radius: 20%;
width: 30%;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
`;
export const Name = styled.p`
margin-left: auto;
font-size: 30px;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
`;
