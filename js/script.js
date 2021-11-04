

import ApolloClient, { gql } from 'apollo-boost';

// const client = new ApolloClient({
// 	uri: 'https://graphqlzero.almansi.me/api',
// });
// client
// 	.query({
// 		query: gql`
// 			{
// 				user(id: 4) {
// 					id
//                     username
//                     address {
//                         geo {
//                             lat
//                             lng
//                         }
//                     }
// 				}
// 			}
// 		`,
// 	})
//     .then(console.log);
    




async function makeGQLCall() {
	const gqlUrl = 'https://graphqlzero.almansi.me/api';

	const client = new ApolloClient({
		uri: gqlUrl,
	});

	const json = await client.query({
		query: gql`
			{
				posts {
					data {
						id
						title
					}
				}
			}
		`,
	});
	console.log(json.data.posts.data);
}

makeGQLCall();

