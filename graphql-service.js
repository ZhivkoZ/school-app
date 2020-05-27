import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {
    async getStudent(responseFields) {
        const response = await graphQLClient.query({
            query: gql `
            query {
                students {
                    ${responseFields}
                }
            }
            `
        })
        return response;
    },
    async addStudent(variables, responseFields) {
        const response = await graphQLClient.mutate({
            mutation: gql ` mutation($name: String!, $subject: String!, $level: String!){
                addStudent(name: $name, subject: $subject, level: $level){
                    ${responseFields}
                }                
            }`,
             variables
        })
        return response;
    }
}