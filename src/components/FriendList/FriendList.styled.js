import styled from "@emotion/styled";

export const FriendsCatalogue = styled.ul`
margin-left: auto;
margin-right: auto;
display: inline-block;
outline: 1px solid green;
`;
export const FriendsItem = styled.li`
display: flex;
outline: 1px solid red;
`;
export const Status = styled.span`
border-radius: 50%;
width: 10px;
height: 10px;
margin-right: 15px;
display: inline-block;
background-color: ${props => (props.status ? "green" : "red")};
`;
export const Avatar = styled.img`
`;
export const Name = styled.p`
outline: 1px solid yellow;
`;
