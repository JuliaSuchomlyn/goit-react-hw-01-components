import styled from "@emotion/styled";


export const TransactionTable = styled.table`
min-width: 280px;
width: 40vw;
margin: 0 auto 40px auto;
border: 1px solid #9e9e9e;
border-radius: 4px;
box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
th {
    border-bottom: 1px solid #9e9e9e;
    padding: 8px;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
}
`;
export const Tablebody = styled.tbody`
`;
export const TableLine = styled.tr`
color: #757575;

:nth-child(odd) {
    background-color: #F1F2FA;
    
}
`;
export const TableCell = styled.td`
padding: 8px;
text-align: center;

:first-letter {
    text-transform: uppercase;
}
`;