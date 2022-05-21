import styled from 'styled-components/native';
import {Row, Title} from '../../layouts';

interface CommentAmountProps {
  isIncome: boolean;
}

export const CommentRow = styled(Row)`
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Comment = styled(Title)`
  color: #000;
  width: 70%;
`;

export const CommentAmount = styled(Title)<CommentAmountProps>`
  color: ${({isIncome}) => (isIncome ? 'green' : 'red')};
`;
