# Steps for query

1. familiarize with graphql
1. generate code in webui (aka scaffold)
   1. `mst-gql --format ts --roots Pokemon http://localhost:5000/graphql`
1. create fragment
1. create request query (RootStore)
1. useQuery (UI/Page)
1. add observer (for awesomeness)

# Steps for Mutations

1. familiarize with gql (mutation)
1. scaffold when api changes
1. update/create fragments
1. create mutate action (RootStore)
1. wire to UI/page
1. don't forget obs for awesomeness
