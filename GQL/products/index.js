import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($skip: Float, $take: Float) {
    products(skip: $skip, take: $take) {
      name
      id
      image
      amount
      currency
    }
  }
`;
