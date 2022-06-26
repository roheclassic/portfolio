import AboutMe from 'components/Profile/AboutMe';
import Carreer from 'components/Profile/Carreer';
import Qualification from 'components/Profile/Qualification';
import Language from 'components/Profile/Language';

const Profile = (props: {
  aboutMeItems: Profile.AboutMe.Items;
  carreerItems: Profile.Carreer.Items;
  qualifications: Profile.Qualification.Items;
  languageItems: Profile.Language.Items;
}) => {
  const { aboutMeItems, carreerItems, qualifications,languageItems } =
    props;
  return (
    <div>
      <h2 className="c-heading__main-section" id="profile">
        プロフィール
      </h2>
      <section
        className="p-2 my-4 border-2 border-gray 
      divide-y-2 divide-gray divide-dashed"
      >
        <AboutMe aboutMeItems={aboutMeItems} />
        <Carreer carreerItems={carreerItems} />
        <Qualification qualifications={qualifications} />
        <Language languageItems={languageItems} />
      </section>
    </div>
  );
};

export default Profile;
