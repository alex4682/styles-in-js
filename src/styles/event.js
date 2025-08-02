import styled from 'styled-components';

export const EventStyle = styled.div`
  border: 1px solid #dabfa8;
  border-radius: 8px;
  background-color: #fbe5d8;
  width: 28.5%;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & h2 {
    font-size: 20px;
    color: #474445;
}
    & ul {
    list-style: none;
    padding: 0;
    & :nth-child(1) {
        & svg{
        fill: #9b6254;
        }
`;
export const EventWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  background-color: #e2e6ea;
  border: 1px solid #abaeaf;
  align-items: center;
  padding: 30px;
  gap: 30px 50px;
  border-radius: 8px;
`;

export const EventTitle = styled.div`
  list-style: none;
  background-color: #d5e5f4;
  border: 1px solid #80a5ca;
  width: 1260px;
  margin-bottom: 30px;
  border-radius: 8px;
  & h1 {
    text-align: center;
    padding: 10px;
    font-size: 30px;
    color: #70808f;
  }
`;