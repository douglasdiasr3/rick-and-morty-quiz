import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  height: 222px;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  input{
    width:100%;
    height: 36px;
    border:none;
    background-color: ${({ theme }) => theme.colors.mainBg};
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);     
  }  

  button{     
    height: 36px;
    width: 100%;
    margin-top:20px;
    border-radius: 4px;
    color: #FFFFFF;   
    letter-spacing: 1.25px;
    text-align: center;
    cursor: pointer;
    background:  ${({ theme }) => theme.colors.destaque}; 
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
  }

`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.DivInput = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.contrastText};
    border-radius: 3.5px;
    height: 38px;
    width: 100%;
`;
Widget.SpanDestaque = styled.span`
   font-weight:bold;
   color: ${({ theme }) => theme.colors.destaque};   
   padding-left:5px;
`;

export default Widget;
