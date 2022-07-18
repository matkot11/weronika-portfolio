import { Form, InfoWrapper, StyledThankYouSVG, ThankYouWrapper, Wrapper } from './Contact.styles';
import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState({
    pending: false,
    sent: false,
  });
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputValues((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageStatus((prevState) => ({ ...prevState, pending: true }));
    const fullName = `${inputValues.firstName} ${inputValues.lastName}`;

    const userKey = 'BZtKeQePazJFHY9_7';
    try {
      await emailjs.send(
        'default_service',
        'template_9r0u4sc',
        {
          subject: inputValues.subject,
          message: inputValues.message,
          fullName,
          mail: inputValues.mail,
        },
        userKey,
      );

      setMessageStatus((prevState) => ({ ...prevState, pending: false }));
      setMessageStatus((prevState) => ({ ...prevState, sent: true }));
    } catch (error) {
      console.log(error);
      setMessageStatus((prevState) => ({ ...prevState, pending: false }));
    }
  };

  return (
    <Wrapper>
      <h2>CONTACT</h2>
      <span>Looking forward to hearing from you</span>
      <InfoWrapper>
        <h3>Phone</h3>
        <span>+44 7715476359</span>
      </InfoWrapper>
      <InfoWrapper>
        <h3>Email</h3>
        <span>weronikakoziol99@gmail.com</span>
      </InfoWrapper>
      {messageStatus.sent ? (
        <ThankYouWrapper>
          <StyledThankYouSVG />
          <h4>Thank you for message</h4>
          <button onClick={() => setMessageStatus((prevState) => ({ ...prevState, sent: false }))}>
            Send new message
          </button>
        </ThankYouWrapper>
      ) : (
        <Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <label>
            First Name
            <input
              type='text'
              required
              value={inputValues.firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange('firstName', e)
              }
            />
          </label>
          <label>
            Last Name
            <input
              type='text'
              required
              value={inputValues.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange('lastName', e)
              }
            />
          </label>
          <label>
            Email
            <input
              type='email'
              required
              value={inputValues.mail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('mail', e)}
            />
          </label>
          <label>
            Subject
            <input
              type='text'
              required
              value={inputValues.subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('subject', e)}
            />
          </label>
          <label>
            Message
            <textarea
              required
              value={inputValues.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange('message', e)
              }
            />
          </label>
          <button type='submit' disabled={messageStatus.pending}>
            {messageStatus.pending ? 'Sending' : 'Submit'}
          </button>
        </Form>
      )}
    </Wrapper>
  );
};

export default Contact;
