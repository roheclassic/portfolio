import type { NextPage, GetStaticProps } from 'next';

// lib
import { setSiteMap } from 'lib/setStitemap';
import { createOgpImage } from 'lib/util/createOgpImage';
import {
  aboutMe,
  carreer,
  skill,
  qualification,
  language,
} from 'lib/graphCMS/getContent';
import github from 'lib/github/getContent';
import qiita from 'lib/qiita/getContent';

// components
import siteMeta from 'components/config';
import Layout from 'layout';
import MyHead from 'components/MyHead';
import Profile from 'components/Profile';
import Skill from 'components/Skill';
import Works from 'components/Works';
import ContactForm from 'components/ContactForm';

type PageProps = {
  profileItem: {
    aboutMeItems?: Profile.AboutMe.Items;
    carreerItems?: Profile.Carreer.Items;
    qualifications?: Profile.Qualification.Items;
    languageItems?: Profile.Language.Items;
  };
  skillLists?: Skill.Collections;
  worksItem: {
    githubRepos?: Works.GitHub.Repositories;
    qiitaArticles?: Works.Qiita.Article[];
  };
  ogpImagePath: string;
};

const TopPage: NextPage<PageProps> = (props) => {
  const {
    profileItem,
    skillLists,
    worksItem,
    ogpImagePath,
  } = props;
  const { aboutMeItems, carreerItems, qualifications, languageItems } =
    profileItem;
  const { githubRepos, qiitaArticles } = worksItem;
  return (
    <Layout>
      <MyHead ogpImagePath={ogpImagePath} />
      <Profile
        aboutMeItems={aboutMeItems}
        carreerItems={carreerItems}
        qualifications={qualifications}
        languageItems={languageItems}
      />
      <Skill skillLists={skillLists} />
      <Works
        githubRepos={githubRepos}
        qiitaArticles={qiitaArticles}
      />
      <ContactForm />
    </Layout>
  );
};

export default TopPage;

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  const aboutMeItems = await aboutMe.getAboutMeItems();
  const carreerItems = await carreer.getCarreers();
  const skillLists = await skill.getSkillLists();
  const qualifications =
    await qualification.getQualifications();
  const languageItems = await language.getLanguageItems();
  const githubRepos = await github.repo.getRepositories();
  const qiitaArticles = await qiita.article.getArticles();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  process.env.NODE_ENV === 'production' &&
    setSiteMap(new Date());

  const ogpImagePath = await createOgpImage(siteMeta.title);

  return {
    props: {
      profileItem: {
        aboutMeItems,
        carreerItems,
        qualifications,
        languageItems,
      },
      skillLists,
      worksItem: {
        githubRepos,
        qiitaArticles,
      },
      ogpImagePath,
    },
  };
};
