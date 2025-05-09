import styled from "styled-components";

type ContactsPropsType = {
  title: string
  contactInfo: string
  href: string
}

export const Contact = (props: ContactsPropsType) => {
  return (
    <StyledContact>
      <ContactText>{props.title}</ContactText>
      <ContactRefernce href={props.href}>{props.contactInfo}</ContactRefernce>
    </StyledContact>
  );
};

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 22px;
`

const ContactText = styled.span`

`

const ContactRefernce = styled.a`
  color: inherit;
`

