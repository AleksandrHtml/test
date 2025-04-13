
type ContactsPropsType = {
  title: string
  contactInfo: string
  href: string
}

export const Contact = (props: ContactsPropsType) => {
  return (
    <div>
      <span>{props.title}</span>
      <a href={props.href}>{props.contactInfo}</a>
    </div>
  );
};

