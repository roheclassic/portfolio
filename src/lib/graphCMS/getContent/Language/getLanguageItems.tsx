import { graphCMSClient } from 'lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getLanguageItems = async () => {
  const { languages }: { languages: Profile.Language.Items } =
    await graphCMSClient.request(gql`
      query Query_Languages {
        languages {
          id
          name
          detail
        }
      }
    `);

  return languages;
};

export default getLanguageItems;
