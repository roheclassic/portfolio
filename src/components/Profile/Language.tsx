import siteMeta from 'components/config';

const Language = ({
  languageItems,
}: {
  languageItems: Profile.Language.Items;
}) => (
  <section>
    <h3 className="text-4xl">{siteMeta.author}</h3>
    <ul className="py-2 px-4">
      {languageItems.map((item) => (
        <li key={item.id} className="my-2">
          <div className="space-y-2 md:space-y-0 md:flex md:flex-wrap md:items-center md:gap-2">
            <div>
              <span className="c-badge c-badge--theme">
                {item.name}
              </span>
            </div>
            <div className="p-2">{item.detail}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Language;
