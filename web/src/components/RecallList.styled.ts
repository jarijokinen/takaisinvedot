import styled from 'styled-components';

export const RecallList = styled.ul`
  display: block;
  list-style-type: none;
`;

export const Item = styled.li`
  background: #1976d2;
  border-radius: 10px;
  display: block;
  list-style-type: none;
  margin: 5px 0;
  padding: 10px 20px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ItemLink = styled.a`
  color: #fff;
  display: inline-block;
  line-height: 1.35;
  margin: 10px 0;
  text-decoration: none;
  @media (min-width: 768px) {
    flex: 1 auto;
    width: 70%;
  }
`;

export const ItemDate = styled.div`
  color: #d1c4e9;
  line-height: 1.35;
  margin: 10px 0;
  @media (min-width: 768px) {
    flex: 1 auto;
    width: 15%;
  }
`;

export const ItemSource = styled.div`
  color: #d1c4e9;
  line-height: 1.35;
  margin: 10px 0;
  @media (min-width: 768px) {
    flex: 1 auto;
    width: 15%;
  }
`;
